# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**leo-xee.dev** - A Korean-language technical blog built with Next.js 15 (App Router), featuring articles, problem-solving writeups, and book reviews. The site is statically generated and deployed to AWS S3 + CloudFront.

**Tech Stack:** Next.js 15.5.9, React 19, TypeScript 5, Vanilla Extract (CSS-in-TypeScript), MDX with next-mdx-remote, Framer Motion

**Node Version:** 22.14.0 (check `.nvmrc`)

## Development Commands

```bash
# Install dependencies (Yarn 4.4.0 with PnP)
yarn install

# Development server
yarn dev

# Build for production (outputs to /out directory)
yarn build

# Linting
yarn lint

# Create new content (interactive CLI)
yarn new:content
```

## Architecture

### Content System

**Critical:** Content files live in `__contents/` at the repository root (NOT in `src/`).

```
__contents/
├── articles/           # Technical articles
├── problem-solving/    # Algorithm solutions
└── books/              # Book reviews
```

**Content API:** All content fetching logic is in [src/libs/api.ts](src/libs/api.ts). The main functions are:
- `getPost(type, slug)` - Fetch a single post with MDX compilation
- `getAllPosts(type)` - Fetch all posts of a given type, sorted by date

**PostType:** Union type `'articles' | 'problem-solving' | 'books'` defined in [src/types/post.ts](src/types/post.ts)

### MDX Processing Pipeline

The blog uses a sophisticated MDX pipeline with multiple remark/rehype plugins:

**Remark plugins:**
- `remark-gfm` - GitHub Flavored Markdown
- `remark-math` - Math equation support

**Rehype plugins:**
- `rehype-slug` - Automatic heading IDs
- `rehype-autolink-headings` - Clickable heading anchors
- `rehype-pretty-code` - Syntax highlighting with Shiki (github-light/dracula themes)
- `rehype-mathjax` - Math rendering
- `rehype-class-names` - Custom CSS classes for MDX elements

**Custom Components:** MDX rendering happens in [src/components/common/CustomMDXRemote](src/components/common/CustomMDXRemote) with custom component mappings (e.g., `Blockquote`).

### Styling System (Vanilla Extract)

**Critical:** This project uses Vanilla Extract, NOT CSS Modules or plain CSS.

**Core style files:**
- [src/styles/tokens.ts](src/styles/tokens.ts) - Design tokens (spacing, colors, typography)
- [src/styles/themes.css.ts](src/styles/themes.css.ts) - Theme contract for light/dark mode
- [src/styles/colors.ts](src/styles/colors.ts) - Color palettes
- [src/styles/global.css.ts](src/styles/global.css.ts) - Global styles

**Component Styling Pattern:**
- Each component has a co-located `.css.ts` file (e.g., `Button.tsx` + `Button.css.ts`)
- Always use named exports for styles, never default exports
- Import design tokens: `import { tokens } from '@/styles/tokens'`
- Use `style()` function for component styles
- Use `recipe()` for component variants

**Theme System:**
- Light/dark mode managed by `next-themes`
- Theme provider in root layout: [src/app/layout.tsx](src/app/layout.tsx)
- All theme-dependent values use CSS custom properties
- Always test both light and dark themes

### App Router Structure

```
src/app/
├── layout.tsx              # Root layout with ThemeProvider
├── page.tsx                # Homepage with Introduction
├── articles/
│   ├── page.tsx            # Article list with tag filtering
│   └── [slug]/page.tsx     # Dynamic article pages
├── problem-solving/
│   ├── page.tsx
│   └── [slug]/page.tsx
└── books/
    ├── page.tsx
    └── [slug]/page.tsx
```

**Static Generation:** All routes use `generateStaticParams()` for SSG. The build outputs to `/out` for static hosting.

**Metadata:** Each route defines metadata for SEO (title, description, OpenGraph, Twitter cards).

### Component Organization

**Pattern:** Barrel exports via `index.ts` files in each component directory.

```
src/components/
├── common/                 # Shared components
│   ├── AppBar/             # Navigation bar
│   ├── CustomMDXRemote/    # MDX rendering logic
│   ├── Template/           # Layout composition (compound components)
│   ├── TOC/                # Table of Contents
│   ├── Comments/           # Giscus integration
│   └── ThemeSwitch/        # Light/dark toggle
├── Introduction/           # Homepage intro section
├── PostList/               # Post listing component
├── PostTitle/              # Post header
└── PostTagTabs/            # Tag filtering UI
```

**Template System:** Uses compound component pattern:
- `Template.Root` - Outer container
- `Template.Main` - Main content area
- `Template.Aside` - Sidebar (e.g., TOC)

### Path Aliases

Configure in [tsconfig.json](tsconfig.json):
- `@/*` → `src/*`
- `@posts/*` → `__contents/*` (Note: defined but content is in `__contents/`)
- `@assets/*` → `public/assets/*`

### Build Configuration

**Next.js Config:** [next.config.mjs](next.config.mjs)
- `output: 'export'` - Static site generation
- `trailingSlash: true` - URLs end with `/`
- Custom image loader in `image-loader.ts`
- Production asset prefix: `https://leo-xee.dev`
- Vanilla Extract plugin integrated

**ESLint:** Airbnb + TypeScript rules, separate config for scripts

**Prettier:** Code formatting (see `.prettierrc`)

## Content Guidelines

### Frontmatter Structure

All MDX files MUST include complete frontmatter:

```yaml
---
title: "SEO-friendly title (max 60 chars)"
description: "Meta description for SEO (max 160 chars)"
thumbnail: "/assets/contents/post-slug/thumbnail.png"
tags: ["javascript", "react", "nextjs"]
createdAt: "2024-01-15"
---
```

### File Naming

- **Always** use kebab-case for file names: `my-awesome-post.mdx`
- **Always** use `.mdx` extension
- File name becomes the URL slug

### Image Assets

- **Always** create dedicated folder: `public/assets/contents/[post-slug]/`
- Use sequential naming: `1.png`, `2.png`, `3.png`
- Optimize images before adding (prefer WebP, max 500KB)
- Reference in MDX: `![Alt text](/assets/contents/post-slug/1.png)`
- **Always** include descriptive alt text

### Content Types

**Articles (`articles/`):**
- Technical tutorials, explanations, insights
- Target length: 800-2500 words
- Include practical examples

**Problem Solving (`problem-solving/`):**
- Algorithm solutions with problem description
- Include time/space complexity analysis
- Provide tested code solutions

**Books (`books/`):**
- Book reviews with author and publication year
- Key insights and personal takeaways
- Actionable recommendations

### Code Blocks

**Always** specify language for syntax highlighting:

```javascript
const example = 'Always specify language for highlighting';
```

### Creating New Content

Use the interactive CLI tool:

```bash
yarn new:content
```

This creates MDX files from templates in `scripts/templates/` with proper frontmatter structure.

## Styling Rules

### Design Token Usage

**Never** hardcode values. **Always** use design tokens:

```typescript
import { tokens } from '@/styles/tokens';

export const myStyle = style({
  padding: tokens.space.medium,      // NOT: padding: '16px'
  color: tokens.colors.primary,      // NOT: color: '#3b82f6'
  fontSize: tokens.fontSize.base,    // NOT: fontSize: '1rem'
});
```

### Responsive Design

**Always** use mobile-first approach:

```typescript
export const responsiveContainer = style({
  padding: tokens.space.small,  // Mobile default
  '@media': {
    'screen and (min-width: 768px)': {
      padding: tokens.space.large,  // Tablet+
    },
  },
});
```

**Breakpoints:**
- Mobile: 320px (default)
- Tablet: 768px+
- Desktop: 1024px+

### Style File Organization

**Order properties:**
1. Layout (display, padding, margin)
2. Typography (fontSize, fontWeight, lineHeight)
3. Colors/backgrounds
4. Interaction states (:hover, :focus)
5. Responsive overrides (@media)

### Component Style Pattern

```typescript
import { style } from '@vanilla-extract/css';
import { tokens } from '@/styles/tokens';

export const button = style({
  // Layout
  display: 'flex',
  padding: tokens.space.medium,

  // Typography
  fontSize: tokens.fontSize.base,

  // Colors
  backgroundColor: tokens.colors.primary,

  // States
  ':hover': {
    backgroundColor: tokens.colors.primaryHover,
  },

  // Responsive
  '@media': {
    'screen and (min-width: 768px)': {
      padding: tokens.space.large,
    },
  },
});
```

### Variants with Recipe

For components with multiple variants:

```typescript
import { recipe } from '@vanilla-extract/recipes';

export const buttonVariants = recipe({
  base: { /* shared styles */ },
  variants: {
    size: {
      small: { padding: tokens.space.small },
      medium: { padding: tokens.space.medium },
      large: { padding: tokens.space.large },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
```

## Prohibited Practices

### Styling
- ❌ **Never** use inline styles in JSX
- ❌ **Never** hardcode colors, spacing, or font sizes
- ❌ **Never** create plain CSS files (use Vanilla Extract `.css.ts`)
- ❌ **Never** assume light theme in styles (always test both themes)

### Content
- ❌ **Never** place content files outside `__contents/`
- ❌ **Never** omit required frontmatter fields
- ❌ **Never** use absolute URLs for internal images
- ❌ **Never** skip alt text on images
- ❌ **Never** create MDX files without complete frontmatter

### General
- ❌ **Never** commit without testing both light and dark themes
- ❌ **Never** use outdated Next.js patterns (this is App Router, not Pages Router)
- ❌ **Never** bypass the design token system

## Deployment

The site deploys via GitHub Actions on push to `main`:

1. Build static site (`yarn build` → `/out`)
2. Upload to AWS S3
3. Invalidate CloudFront cache

**Workflow:** [.github/workflows/frontend-prod.yml](.github/workflows/frontend-prod.yml)

**Live URL:** https://leo-xee.dev

## Special Conventions

1. **Barrel Exports:** Every component directory has an `index.ts` for clean imports
2. **Static Generation:** All dynamic routes use `generateStaticParams()`
3. **Co-located Styles:** Every `.tsx` component has a matching `.css.ts` file
4. **Compound Components:** Template components use dot notation (`Template.Root`, `Template.Main`)
5. **Post Sorting:** Posts are sorted by `createdAt` (newest first)

## Recent Security Updates

Recent commits address "RSC 취약점" (React Server Components vulnerabilities). Be mindful of security when working with Server Components and MDX rendering.
