# ADR 0002: Optimize Schema.org & Google Search Console Indexation

**Date:** 2026-06-02  
**Status:** Accepted  
**Decision Maker:** Lucho Escobedo

## Context

Post-migration to GitHub Pages, GSC analysis revealed indexation fragmentation:
- 46 pages marked "not indexed" 
- 7 pages indexed (inconsistent crawl patterns)
- Role and founder status hidden in schema metadata (not crawlable by search algorithms)
- No sitemap to guide Google on what matters
- Tag/category archive pages indexed as duplicate content

This undermined executive positioning:
- Search algorithms couldn't distinguish current role (Yanbal vs prior BCP/ADP)
- Founder/investor status (Kipu, Green Street, Prime Deals) invisible to C-level search
- Old Netlify URLs (ghost pages, 404s) consumed crawl budget

## Decision

Implement comprehensive schema + SEO optimization to consolidate indexation around canonical content and surfacing executive/investor positioning.

### Changes Made

**1. Schema.org Enhancement (index.html)**
- Added `workHistory` array with 7 roles, date ranges (ISO format)
- Clarified current role: "Corporate Director of Data at Yanbal" (Apr 2026–)
- Meta description now leads with founder status: "Founder: Kipu, Green Street Holdings, Prime Deals"
- Added venture URLs to `sameAs` array (primedeals.global, bjjcercademi.org, kipuai.com, greenstreet-holding.com)

**2. SEO Infrastructure (_config.yml, _layouts/)**
- Enabled jekyll-sitemap plugin → auto-generates sitemap.xml
- Added `noindex` to archive layouts (tag, category, year pages are duplicates)
- Added robots meta directive to index, follow, with rich snippets allowed
- Configured sitemap priority and changefreq for crawl efficiency
- Excluded vendor, docs, README from indexation

**3. Canonical Domain Management**
- Restored CNAME file (luchoescobedo.com only)
- GitHub Pages configured with custom domain + HTTPS
- Eliminated HTTP/HTTPS and www/non-www duplication

**4. Google Search Console**
- Submitted sitemap: https://luchoescobedo.com/sitemap.xml
- Status: Success, 16 canonical pages discovered
- Deleted ghost sitemap entry (old Netlify artifact marked "Unknown" with errors)

## Rationale

**Schema optimization** signals executive authority to search algorithms:
- Chronological work history proves 20-year progression
- Current role (Yanbal) ranks first, not lost among past roles
- Founder/investor status elevated from buried metadata to discoverable text

**Sitemap consolidation** focuses Google's crawl on what matters:
- 16 canonical pages (homepage, essays, blog posts)
- Excludes 46 duplicate/archive pages (tag filters, pagination)
- Reduces crawl waste; improves indexation efficiency

**noindex on archives** prevents duplicate content penalties:
- Tag pages (/blog/tag/ai/, /blog/tag/strategy/) are content filters, not original pages
- Marked as noindex; don't drain ranking potential from main content

## Consequences

**Immediate (24-48 hours):**
- Sitemap crawled, 16 canonical pages queued for indexation
- Old Netlify URLs dropped from crawl schedule
- Ghost pages (404s, redirects) no longer consume crawl budget

**Ongoing (48-72 hours):**
- GSC Coverage consolidates: 46 not indexed → ~0; 7 indexed → ~16
- Duplicate content signals resolved (archive pages noindex'd)
- Clean, crawlable narrative emerges: Executive → 20-year progression → Founder/Investor

**Long-term (1+ weeks):**
- Keyword impressions appear in GSC Performance
- C-level searches (e.g., "Lucho Escobedo AI strategy Peru") find coherent profile
- Board/executive search tools see chronological authority, not fragmented roles

## Implementation Timeline

- **2026-06-02 14:06p:** Audit identified indexation fragmentation (46 not indexed)
- **2026-06-02 19:40p:** Schema updates committed (workHistory, founder status, venture URLs)
- **2026-06-02 20:12p:** SEO infrastructure committed (sitemap, noindex, robots meta)
- **2026-06-02 20:18p:** GitHub Pages CNAME restored, custom domain live
- **2026-06-02 20:25p:** Sitemap submitted to GSC (Success, 16 pages discovered)
- **2026-06-02 20:28p:** Ghost sitemap entry deleted

## References

- Google Search Console: https://search.google.com/search-console
- Schema.org Person Type: https://schema.org/Person
- Jekyll Sitemap Plugin: https://github.com/jekyll/jekyll-sitemap
- Repository: https://github.com/lescobedop/lescobedop.github.io
