# Working with AI Coding Agents

This document provides guidance for AI coding agents working on this website.

## Project Structure

```
website/
├── index.html              # Homepage with hero section and about
├── blog/                   # Blog folder
│   ├── blog-styles.css     # Shared CSS for all blog pages
│   ├── blog-template.js    # Shared header/footer/nav templates
│   ├── images/             # Blog images
│   ├── part-1-what-is-agentic-workforce.html
│   ├── part-2-platform-challenges.html
│   └── part-3-open-platform-principles.html
└── README.md               # Main readme
```

## Key Design Decisions

### Centralized Blog Templates
- **Header, footer, and navigation** are defined once in `blog/blog-template.js`
- Blog pages call `initBlogPage(partNumber)` to load common elements
- All styles are in `blog/blog-styles.css`
- Blog content is pure HTML - no template duplication

### Style Consistency
- Color palette: `#667eea` (purple/blue accent), `#1a1a1a` (dark), `#666` (gray), `#fafafa` (light background)
- Fonts: Inter from Google Fonts
- Arrow bullets (`→`) for unordered lists
- Colored highlight boxes for callouts

### Blog Conventions
- Images in `blog/images/` folder
- Use semantic file names: `part-X-title.html`
- Navigation links automatically update based on part number
- Cross-linking between parts via "next article" buttons

## Making Changes

### Adding a New Blog Post
1. Create `blog/part-N-title.html`
2. Copy structure from existing part
3. Update `blog-template.js` to include new part in navigation
4. Add images to `blog/images/`
5. Update previous part's "next article" link

### Updating Shared Elements
- **Header/Footer**: Edit `blog/blog-template.js`
- **Styles**: Edit `blog/blog-styles.css`
- **Homepage**: Edit `index.html` directly

### Image Guidelines
- Place in `blog/images/`
- Reference as `images/filename.png` from blog pages
- Include descriptive `figcaption` for accessibility
- Use `.blog-figure` class, add `.smaller` for 60% width

## Social Links

- LinkedIn: https://www.linkedin.com/in/krisverlaenen/
- GitHub: https://github.com/krisv (note: krisv, not krisverlaenen)

## Important Notes

- No Twitter/X link (removed)
- GitHub username is `krisv` not `krisverlaenen`
- Keep design clean and minimal
- Avoid AI-generated markers (excessive bullets, horizontal lines, etc.)
- Use highlight boxes for key takeaways
- Mobile responsive design required
