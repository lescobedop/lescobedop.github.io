# lescobedop.github.io — Personal Portfolio & Brand

**Scope:** Personal portfolio and brand site for Lucho Escobedo. Showcases professional experience, investment thesis, writing, and personal projects.

**When to load:** When working on portfolio site content, personal brand positioning, site architecture, or technology writing.

---

## Context Files (Always Load When Working Here)

`my-brain` is the private GitHub repo **`lescobedop/second-brain`**. Paths below are relative to its root.
- **On the Mac:** `/Users/lescobedo/Documents/my-brain/<path>`
- **In cloud sessions:** select `lescobedop/second-brain` alongside this repo when starting the session (or attach it), then read `<path>` from its checkout.
- **Never copy its contents into this repo.** This repo is public; brand and positioning notes stay private.

- `README.md` — Site architecture, Jekyll setup, deployment, build process
- `my-brain/02-identity/personal-brand.md` — Personal brand identity, positioning, audience, voice
- `my-brain/03-voices/master-voice-principles.md` — Voice rules for all writing
- `ADR-0002` (in my-brain) — Schema optimization + GSC setup for portfolio discoverability

---

## Cross-Functional Links

**Brand voice:** When writing new content, load `my-brain/02-identity/personal-brand.md` to ensure consistency with how you present yourself.

**Architecture decisions:** When making schema, GA/GSC, or deployment decisions, link to `my-brain/00-system/decisions/adr_merlin-dashboard-migration.md` for precedent on tech modernization (portfolio is similar size/complexity to dashboard).

---

## Standing Rules for Portfolio Work

1. **Content must reflect personal brand positioning** — Every page/post must align with how you position yourself professionally
2. **Keep portfolio fresh** — Quarterly review minimum. Update project list, remove outdated content, refresh timestamps
3. **GA/GSC health matters** — Portfolio is part of your professional discovery pipeline. Monitor indexation, clicks, positions in Search Console
4. **Voice consistency** — All writing must follow master-voice-principles; professional register; no casual tone
5. **Technical literacy signals** — Code snippets, architecture diagrams, technical choices visible in source code signal competence. Keep tooling current

---

## Key Files in This Repo

| File | Purpose |
|------|---------|
| `README.md` | Site architecture, Jekyll setup, local dev, deployment to GitHub Pages |
| `_config.yml` | Jekyll configuration, title, author, analytics tracking |
| `_pages/` | Static pages (about, projects, writing) |
| `_posts/` | Blog posts and articles |
| `_projects/` | Project showcase entries |
| `_layouts/` | HTML templates for pages and posts |

---

## Decision Log

**How to document portfolio decisions:**
1. Create or update `SESSION-STATE.md` in this directory
2. Record content updates, technical changes, schema modifications
3. Link to my-brain ADRs if affecting architecture

---

## Related Context

**Personal brand:** `my-brain/02-identity/personal-brand.md` (voice, positioning, audience)
**Writing voice:** `my-brain/03-voices/master-voice-principles.md` (register, tone, style)
**Portfolio ADR:** `my-brain/00-system/decisions/ADR-0002-optimize-schema-and-gsc-indexation.md` (schema strategy)
**Venture context:** `my-brain/04-brands/portfolio-overview.md` (how portfolio fits your ecosystem)
