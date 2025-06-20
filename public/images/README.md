# Images Directory Structure

This directory contains all images used in the Fakhr Al Khaleej website, organized by purpose:

## Organization

- `/blog/` - Blog post images (format: slug.jpg)
  - `default-blog-post.jpg` - Default fallback image for blog posts
  - Individual blog post images named after their slug (e.g., `best-company-uniform-guide-saudi-arabia-2025.jpg`)

- `/authors/` - Author profile images (format: Author_Name.png)
  - `default-author.png` - Default fallback image for authors
  - Author images are named after the author with underscores instead of spaces
  - Current authors: Alya_Alrashid.png, Fahad_Alotaibi.png, Turki_Alharbi.png

## Naming Conventions

1. Blog post images: `/images/blog/[slug].[extension]`
   - Use `.jpg` or `.jpeg` format for blog post images (consistent with SEO best practices)
   - Image should be relevant to the article content
   - Ideal size: 1200px × 630px (optimal for social sharing)
   
2. Author images: `/images/authors/[Author_Name].[extension]`
   - Use `.png` format for author images, preferably with transparent background
   - Square format recommended (at least 300px × 300px)
   - Use author's first and last name separated by underscores

## Image Optimization Guidelines

- Compress all images before upload (target size: <200KB for blog images)
- Use descriptive alt text for all images
- Maintain consistent aspect ratios within each category
- Consider preloading critical images for improved performance

## IMPORTANT: URL Path Note

When referencing images in code:
- CORRECT: Use `/images/blog/image-name.jpg` (starts directly with `/images`)
- INCORRECT: Do NOT include `/public/` in paths (e.g., `/public/images/blog/image-name.jpg`) 

The `/public` directory is the root of static assets during development, but those files are served from the root path in production.

This structure follows the SEO best practices outlined in our roadmap.md file, ensuring images are properly organized and optimized for both user experience and search engine visibility. 