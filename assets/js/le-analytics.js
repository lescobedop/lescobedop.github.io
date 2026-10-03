// Custom GA4 events for luchoescobedo.com.
// Configured by _includes/analytics.liquid (window.leAnalytics).
//
// Events:
//   contact_click    mailto links (contact form, CV request)
//   outbound_click   links to other domains (ventures, LinkedIn)
//   internal_click   links within the site (nav, essay cards, related essays)
//   language_switch  EN/ES toggle
//   article_progress read-depth milestones (25/50/75/100% of the article body)
//   article_read     reader reached the end AND spent plausible reading time
(function () {
  "use strict";
  if (typeof window.gtag !== "function") return;

  var cfg = window.leAnalytics || {};
  var group = cfg.contentGroup || "Site";

  function send(name, params) {
    params = params || {};
    params.content_group = group;
    window.gtag("event", name, params);
  }

  function clip(s) {
    return (s || "").replace(/\s+/g, " ").trim().slice(0, 100);
  }

  // Where on the page a link sits, so reports can separate e.g. a venture
  // card click from the same URL in the contact section.
  function locate(el) {
    if (el.closest("nav")) return "nav";
    if (el.closest("footer")) return "footer";
    if (el.closest(".related-section")) return "related_essays";
    if (el.closest(".back-link")) return "back_link";
    if (el.closest(".post-content")) return "article_body";
    if (el.closest(".blog-card")) return "essay_list";
    var section = el.closest("section[id]");
    return section ? section.id : "page";
  }

  // 1-based position within a card grid, to show whether readers pick the
  // newest item or browse further down.
  function position(el) {
    var card = el.closest(".blog-card, .related-card, .venture-card");
    if (!card || !card.parentElement) return undefined;
    var cls = card.classList[0];
    var siblings = card.parentElement.querySelectorAll(":scope > ." + cls);
    return Array.prototype.indexOf.call(siblings, card) + 1;
  }

  // ---- Clicks -------------------------------------------------------------
  document.addEventListener(
    "click",
    function (e) {
      var target = e.target;
      if (!(target instanceof Element)) return;

      var langBtn = target.closest(".lang-btn");
      if (langBtn) {
        var lang = langBtn.dataset.lang || (langBtn.id || "").replace("btn-", "");
        if (lang) send("language_switch", { language: lang });
        return;
      }

      var a = target.closest("a[href]");
      if (!a) return;
      var href = a.getAttribute("href");
      if (!href || href.charAt(0) === "#" || href.indexOf("javascript:") === 0) return;

      // Cards wrap tags, dates and excerpts; their heading is the useful label.
      var heading = a.querySelector("h2, h3, h4");
      var base = {
        link_text: clip((heading || a).textContent),
        link_location: locate(a),
      };

      if (href.indexOf("mailto:") === 0) {
        var subject = /[?&]subject=([^&]*)/.exec(href);
        base.contact_subject = subject ? clip(decodeURIComponent(subject[1])) : "(none)";
        send("contact_click", base);
        return;
      }

      var url;
      try {
        url = new URL(href, location.href);
      } catch (err) {
        return;
      }

      if (url.hostname !== location.hostname) {
        base.link_domain = url.hostname.replace(/^www\./, "");
        base.link_url = url.href.slice(0, 100);
        send("outbound_click", base);
      } else {
        base.link_url = url.pathname;
        var pos = position(a);
        if (pos) base.list_position = pos;
        send("internal_click", base);
      }
    },
    true
  );

  // ---- Article reading ----------------------------------------------------
  var article = cfg.article;
  var body = document.querySelector(".post-content");
  if (!article || !body) return;

  var milestones = [25, 50, 75, 100];
  var reached = {};
  var maxPercent = 0;
  var activeSeconds = 0;
  var lastActivity = Date.now();
  var readSent = false;

  // Count as "read" only if the reader spent at least a third of the time an
  // average reader (~230 wpm) would need, with a 20-second floor. This keeps
  // fast scroll-to-bottom visits out of the completion numbers.
  var minReadSeconds = Math.max(20, Math.round(((article.words || 0) / 230) * 60 * 0.33));

  function articleParams(extra) {
    var p = {
      article_title: clip(article.title),
      published_date: article.published,
      word_count: article.words,
    };
    for (var k in extra) p[k] = extra[k];
    return p;
  }

  function progress() {
    var rect = body.getBoundingClientRect();
    var total = rect.height;
    if (total <= 0) return 0;
    var seen = window.innerHeight - rect.top;
    return Math.max(0, Math.min(100, (seen / total) * 100));
  }

  function maybeRead() {
    if (readSent || maxPercent < 90 || activeSeconds < minReadSeconds) return;
    readSent = true;
    send("article_read", articleParams({ active_seconds: activeSeconds }));
  }

  function onScroll() {
    var pct = progress();
    if (pct > maxPercent) maxPercent = pct;
    for (var i = 0; i < milestones.length; i++) {
      var m = milestones[i];
      if (maxPercent >= m && !reached[m]) {
        reached[m] = true;
        send("article_progress", articleParams({ percent_scrolled: m, active_seconds: activeSeconds }));
      }
    }
    maybeRead();
  }

  function markActive() {
    lastActivity = Date.now();
  }

  // Active time: tab visible and some interaction in the last 30 seconds.
  setInterval(function () {
    if (document.visibilityState === "visible" && Date.now() - lastActivity < 30000) {
      activeSeconds++;
      maybeRead();
    }
  }, 1000);

  ["scroll", "mousemove", "keydown", "touchstart", "wheel"].forEach(function (evt) {
    window.addEventListener(evt, markActive, { passive: true });
  });

  var ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        onScroll();
      });
    },
    { passive: true }
  );
  onScroll();
})();
