# Daily Publishing Checklist

Use this checklist for the next 3 months when publishing a new BestKarma article.

## Goal

Keep the editorial workflow separate from the website, and only promote approved content into the live published set that Vercel deploys.

## Daily Steps

1. Choose the topic and create a short brief in your private content workspace.
   Include:
   - target reader
   - core question or claim
   - category
   - likely tags
   - the practical takeaway

2. Gather and review sources in the research stage.
   Prefer:
   - primary studies
   - strong review papers
   - reputable expert material

3. Draft the article in the draft stage.
   Do not write directly into the live published directory.

4. Pick a valid category before finalizing.
   Current valid categories are:
   - `wellness`
   - `longevity`
   - `nutrition`
   - `sleep`
   - `mind-body`

5. Prepare the article frontmatter.
   Match the schema used by the website:
   - `title`
   - `description`
   - `author`
   - `reviewer`
   - `pubDate`
   - `reviewedDate`
   - `category`
   - `tags`
   - `readTime`
   - `status`
   Optional:
   - `updatedDate`
   - `heroImage`
   - `featured`

6. Prepare image metadata.
   For each article, have image details ready for:
   - `alt`
   - `credit`
   - `sourceUrl`
   - `usage`

7. Move the article into the validated stage.
   Put the markdown file in:
   [content-system/validated/articles](/Users/pareshchauhan/ai/projects/bestkarma/content-system/validated/articles)

8. Create the article bundle in the validated stage.
   Create:
   `content-system/validated/<slug>.bundle/`
   Add:
   - `sources.json`
   - `review.json`
   - `image.json`

9. Run validation.
   ```bash
   npm run content:validate -- validated
   ```

10. Fix any blocking issues.
   Do not publish until validation passes.

11. Do a final human review.
   Check:
   - factual accuracy
   - title quality
   - description quality
   - category fit
   - tags
   - disclaimer needs
   - image metadata
   - usefulness of the takeaway

12. Promote the article to the published set.
   ```bash
   npm run content:promote -- <slug>
   ```

13. Run a local production build.
   ```bash
   npm run build
   ```

14. Confirm the article is now in the live-source directories.
   Article markdown:
   [content-system/published/articles](/Users/pareshchauhan/ai/projects/bestkarma/content-system/published/articles)

   Bundle metadata:
   [content-system/published](/Users/pareshchauhan/ai/projects/bestkarma/content-system/published)

15. Commit only production-ready content changes.
   At minimum, commit:
   - the article in `published/articles`
   - its bundle files
   - any required production image assets

16. Push to GitHub.
   Vercel will rebuild from the pushed repo state.

17. Verify production after deploy.
   Check:
   - article page
   - topic hub placement
   - tag archive links
   - newsletter CTA
   - social preview if relevant

## Simple Rule

- `drafts/` is for writing
- `validated/` is for reviewed content waiting to publish
- `published/` is what the website and Vercel use

## Key Files

- Workflow overview: [content-system/README.md](/Users/pareshchauhan/ai/projects/bestkarma/content-system/README.md)
- Validation checklist: [content-system/qa/publish-checklist.md](/Users/pareshchauhan/ai/projects/bestkarma/content-system/qa/publish-checklist.md)
- Author profiles: [content-system/authors/profiles.json](/Users/pareshchauhan/ai/projects/bestkarma/content-system/authors/profiles.json)
- Content schema: [src/content.config.ts](/Users/pareshchauhan/ai/projects/bestkarma/src/content.config.ts)
