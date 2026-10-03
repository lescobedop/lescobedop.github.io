# Session State — lescobedop.github.io Portfolio

**Session Date:** 2026-10-03
**Focus:** GA4 coverage and event tracking

---

## Current Status

**Latest deployed content:** The Authorship of a Forecast (Institutional Intelligence, 2026-09-17)
**Portfolio metrics:** GA4 property `G-8J7JKD12YC`. Before 2026-10-03 only the homepage was tagged; essay and index pages reported nothing.

---

## Decisions Made This Session

- **Decision:** Tag every hand-built page with GA4 through one include, and add custom events.
  - **Rationale:** No data existed on which essays are read or which links are clicked. GA was hardcoded in `index.html` only.
  - **Brand impact:** Writing and venture decisions can rest on reader behaviour rather than guesswork.
  - **Files:** `_includes/analytics.liquid` (tag + per-page config), `assets/js/le-analytics.js` (events). Included in `index.html`, `_layouts/post.liquid`, `_layouts/post-ii.liquid`, `_pages/blog.html`, `_pages/institutional-intelligence.html`.

### Events

| Event | Fires when | Parameters |
|---|---|---|
| `contact_click` | Any mailto link | `contact_subject` (e.g. "Resume Request"), `link_text`, `link_location` |
| `outbound_click` | Link to another domain | `link_domain`, `link_url`, `link_text`, `link_location` |
| `internal_click` | Link within the site | `link_url`, `link_text`, `link_location`, `list_position` |
| `language_switch` | EN/ES toggle | `language` |
| `article_progress` | 25/50/75/100% of the essay body seen | `article_title`, `percent_scrolled`, `active_seconds`, `word_count`, `published_date` |
| `article_read` | Reached 90% of the essay **and** active time ≥ a third of expected reading time (230 wpm, 20 s floor) | `article_title`, `active_seconds`, `word_count`, `published_date` |
| `page_not_found` | Someone lands on a missing address (404 page) | `missing_path`, `referrer_url` |
| `newsletter_signup` | Email signup form submitted | `link_location` (`essay_end`, `essay_index`) |

All events carry `content_group`: `Home`, `Institutional Intelligence`, `Wolf's Den` or `404`.
Broken inbound links without extra setup: Explorations → filter Content group = `404`, dimensions Page path + Page referrer.
`link_location` is the page region: `nav`, `hero`, `ventures`, `career`, `contact`, `essay_list`, `related_essays`, `article_body`, `back_link`, `footer`.
Add `?ga_debug=1` to any URL to see its hits in GA4 → Admin → DebugView.

- **Decision:** Stop publishing internal files and give essays full search metadata (commit "Stop publishing internal files…").
  - **Rationale:** Three `exclude:` keys in `_config.yml` meant only the last applied; CLAUDE.md, this file, the SEO audit and ADRs were public. Essays lacked canonical, preview image and structured data.
  - **Also:** removed failing duplicate `deploy.yml`; removed Medium feed dependency; hero photo moved out of inline base64; `llms.txt` generated from posts; redirect stubs out of sitemap; README rewritten for this site.
- **Decision:** Remove unused al-folio template material (placeholder projects, theme docs and screenshots, Docker workflows, issue templates). LICENSE and the sample bibliography stay.
- **Decision:** Kipu role is "Founder and Partner" (search description keeps "Founder" for length).
- **Decision:** Keep existing mixed-case Wolf's Den URLs; new Wolf's Den posts use an explicit lowercase `permalink`.
- **Decision (2026-10-03, second pass):** CV is shared by email only. Removed `assets/pdf/LEscobedo_Resume.pdf` and `assets/json/resume.json`; the "Request my CV" mailto stays.
  - Unused theme assets (~92 MB: photos, fonts, demo pages, theme CSS/JS) excluded from the build; the site publishes 8 asset files (~0.9 MB total site).
  - 404 page rebuilt in the site design with GA (`content_group` 404, `page_not_found` event), noindex, no auto-redirect.
  - Deploy workflow on Ruby 3.3 (3.1 is end-of-life).

---

## Blockers or Decisions Needed

- [x] 2026-10-03 **GA4 Admin → Custom definitions:** register event-scoped custom dimensions `article_title`, `link_location`, `link_domain`, `link_text`, `contact_subject`, `percent_scrolled`, `language`, and custom metrics `active_seconds` (seconds), `list_position`. Parameters are collected without this but cannot be used in reports until registered; registration is not retroactive.
- [x] 2026-10-03 **GA4 Admin → Events:** mark `contact_click` and `article_read` as key events.
- [x] 2026-10-03 (correct property `https://luchoescobedo.com/`) Search Console: resubmit `sitemap.xml` and request indexing for the newest essays (they now carry canonical + BlogPosting markup).
- [ ] Optional: register `missing_path` and `referrer_url` as event-scoped custom dimensions for the 404 report.
- [ ] Remove stray Search Console properties (www / http / Netlify) to avoid submitting to the wrong one again.
- [x] 2026-10-03 CV purged from git history: `git filter-repo` removed `*LEscobedo_Resume*` (three versions) and `assets/json/resume.json` from `main`, `gh-pages`, `prod-backup`; force-pushed. Site content unchanged. Re-clone any older local copy; never push from one.
- [x] 2026-10-03 Netlify project `luchoescobedo` deleted (it held a June 2 copy of the site). DNS is at GoDaddy and points to GitHub Pages; Netlify never served the domain after the migration.
- [x] 2026-10-03 GitHub Support request sent: remove PR refs `refs/pull/1/head`, `refs/pull/2/head` and cached views; PR #1's snapshot still serves the old CV (support.github.com/contact/private-information).
- [ ] Newsletter: code is in place and hidden. To launch: create the Buttondown account, set `buttondown.username` in `_config.yml`, then in Buttondown → Automations add RSS-to-email from `https://luchoescobedo.com/feed/institutional-intelligence.xml` as **draft**. Mark `newsletter_signup` as a GA key event (its location uses the already registered `link_location`).
- [x] 2026-10-03 Voice rules: my-brain = private repo `lescobedop/second-brain`. CLAUDE.md now gives repo-relative paths; select that repo with this one in writing sessions. Never copy its contents here (public repo).

---

## Next Actions

1. After ~4–6 weeks of data, build an Explorations report: rows `article_title`, values views, `article_read` count, read rate (`article_read` / views). Use it to decide which essays to keep, expand or retire.
2. Check `outbound_click` by `link_domain` to see which ventures draw interest, and `contact_click` by `link_location` for which section produces contact.

---

## Links & References

- Personal brand: `/Users/lescobedo/Documents/my-brain/02-identity/personal-brand.md`
- Voice principles: `/Users/lescobedo/Documents/my-brain/03-voices/master-voice-principles.md`
- ADR-0002: Schema + GSC setup
