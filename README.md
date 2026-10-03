# luchoescobedo.com

Personal site of Lucho Escobedo: executive profile, ventures, and two essay series,
**Institutional Intelligence** (AI, strategy and Latin America) and **The Wolf's Den** (personal essays).

Built with [Jekyll](https://jekyllrb.com/) on the [al-folio](https://github.com/alshedivat/al-folio) theme (MIT, see `LICENSE`)
and served by GitHub Pages at the custom domain in `CNAME`.

## Structure

The public pages are hand-built and bypass the al-folio theme layouts (`layout: null`).

| Path | Page |
| --- | --- |
| `index.html` | Homepage: bilingual (EN/ES) profile, ventures, career, writing, contact, Person JSON-LD |
| `_pages/institutional-intelligence.html` | `/institutional-intelligence/` essay index |
| `_pages/blog.html` | `/blog/` Wolf's Den index |
| `_layouts/post-ii.liquid` | Institutional Intelligence essay page |
| `_layouts/post.liquid` | Wolf's Den essay page |
| `_includes/post-meta.liquid` | Essay canonical, Open Graph, Twitter card and BlogPosting JSON-LD |
| `_includes/analytics.liquid` | GA4 tag and per-page configuration |
| `assets/js/le-analytics.js` | GA4 click and reading events (schema in `SESSION-STATE.md`) |
| `llms.txt` | Summary for AI assistants; essay lists are generated from `_posts/` |
| `blog/2025/*/index.html` | Redirects from old lowercase Wolf's Den URLs |

The al-folio theme still supplies `404.html`, `feed.xml`, `sitemap.xml` and the build plugins.

## Publishing an essay

Add a Markdown file to `_posts/` named `YYYY-MM-DD-Title.md`.

Institutional Intelligence:

```yaml
---
layout: post-ii
title: "The Authorship of a Forecast"
date: 2026-09-17 08:00:00
description: "One or two sentences. Used for search snippets, link previews and the index cards."
tags: [artificial-intelligence, latin-america, strategy]
categories: institutional-intelligence
permalink: /institutional-intelligence/2026/authorship-of-a-forecast/
---
```

The Wolf's Den: use `layout: post`, `categories: reflections`, and an explicit lowercase
`permalink: /blog/YYYY/title-in-lowercase/`. Without it the URL copies the filename's casing
(`/blog/2026/What-Kept-Making-Room/`). Do not change the URL of a post that is already published.

Optional: `og_image: /assets/img/…` overrides the default 1200×630 preview image (`assets/img/og-card.jpg`).

The index pages, homepage writing section, RSS feed, sitemap and `llms.txt` pick up the new post automatically.

## Local development

Requires Ruby 3.1+ and Bundler.

```bash
bundle install
bundle exec jekyll serve      # http://localhost:4000
```

## Deployment

Every push to `main` runs `.github/workflows/jekyll-gh-pages.yml`, which builds the site and publishes `_site/`
to the `gh-pages` branch. GitHub Pages serves that branch.

Internal files (`CLAUDE.md`, `SESSION-STATE.md`, `SEO-AUDIT-*.md`, `docs/`) are listed under `exclude:` in `_config.yml`
so they are not published. Keep that the only `exclude:` key in the file: YAML keeps just the last one.

## Decisions

Architecture decisions are recorded in `docs/adr/`. Session-level changes are logged in `SESSION-STATE.md`.
