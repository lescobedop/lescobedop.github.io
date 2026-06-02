# ADR 0001: Migrate from Netlify to GitHub Pages

**Date:** 2026-06-02  
**Status:** Accepted  
**Decision Maker:** Lucho Escobedo

## Context

The site was hosted on Netlify with luchoescobedo.com as a custom domain. The setup caused:
- DNS conflicts (GitHub Pages settings also claimed luchoescobedo.com)
- Cache management issues (stale artifacts persisted after deletion)
- Ghost pages (e.g., "Governance Advantage" essay remained live despite deletion from repo)
- Unnecessary complexity (two platforms managing the same site)

The Jekyll static site generator and post filtering were correctly implemented but overshadowed by deployment infrastructure problems.

## Decision

Migrate from Netlify to GitHub Pages as the sole deployment platform for lescobedop.github.io.

### Changes Made

1. **Removed CNAME file** from repository (GitHub Pages no longer needed domain configuration in repo)
2. **Enabled GitHub Pages** in repo settings, configured to deploy from gh-pages branch
3. **Updated DNS on GoDaddy:**
   - Deleted old Netlify A record (75.2.60.5)
   - Added 4 GitHub Pages A records (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
   - Updated www CNAME from luchoescobedo.netlify.app to lescobedop.github.io
   - Added custom domain luchoescobedo.com to GitHub Pages settings
4. **Verified post filtering** works correctly:
   - Wolf's Den: 6 reflections posts
   - Institutional Intelligence: 7 institutional-intelligence posts

## Rationale

**GitHub Pages advantages:**
- Native GitHub integration (no external platform)
- Automatic builds on push (clean state, no cache issues)
- Built-in Jekyll support
- Simpler mental model: code → GitHub = site live
- Eliminates deployment infrastructure complexity
- Free

**Trade-offs accepted:**
- Slightly less build environment customization (acceptable for static site)
- No preview deploys to separate URLs (acceptable for portfolio)

## Consequences

✅ **Immediate:**
- Governance Advantage ghost page completely removed
- Strategic Choice essay now visible on live site
- Clean separation of concerns (GitHub = source + deploy)

✅ **Ongoing:**
- Push to repo = instant deploy (no external build service)
- No more cache conflicts
- HTTPS certificate auto-managed by GitHub
- DNS solely controlled via GoDaddy (cleaner)

## Implementation Timeline

- **2026-06-02 10:39a:** Jekyll deployment workflow already configured (jekyll-gh-pages.yml)
- **2026-06-02 14:06p:** Post filtering verified in code (already implemented)
- **2026-06-02 14:25p:** Post content finalized (Governance Advantage removed, Strategic Choice added)
- **2026-06-02 19:40p:** GitHub Pages enabled, DNS updated, custom domain configured
- **2026-06-02 19:45p:** Site live at luchoescobedo.com via GitHub Pages with valid HTTPS

## References

- GitHub Pages documentation: https://docs.github.com/en/pages
- Jekyll documentation: https://jekyllrb.com/docs/
- Repository: https://github.com/lescobedop/lescobedop.github.io
