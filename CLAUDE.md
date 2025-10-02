# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 15 + React 19 + TypeScript 5 + Chakra UI 3 starter template with PWA support, Docker configuration, and pre-configured code quality tools.

## Essential Commands

### Development
```bash
pnpm dev              # Start development server on http://localhost:3000
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run Biome linter
pnpm format           # Format code with Biome
pnpm check            # Run Biome check (lint + format + organize imports)
```

### Docker
```bash
docker build -t next-typescript-chakra-ui-starter .
docker run --rm -it -p 3000:3000 next-typescript-chakra-ui-starter
docker-compose up     # Alternative using docker-compose
```

## Architecture

### Project Structure
- **pages/**: Next.js pages router (App Shell in `_app.tsx`, Document in `_document.tsx`)
- **pages/api/**: API routes (serverless functions)
- **components/**: React components
- **styles/**: Global styles and Chakra UI theme configuration
- **app/**: Service worker source files (sw.ts)
- **public/**: Static assets (service worker built here)

### Key Configuration Files
- **next.config.js**: Next.js config with Serwist PWA plugin (disabled in dev)
- **app/sw.ts**: Service worker implementation with runtime caching strategies
- **tsconfig.json**: Strict TypeScript config with path aliases (`@/*` maps to root)
- **styles/theme.ts**: Chakra UI theme customization with color mode support

### Styling Architecture
Chakra UI v3 is the primary UI framework. The theme system uses the new v3 API:
- Theme created using `createSystem` and `defaultConfig` in `styles/theme.ts`
- Global styles configured via `globalCss` with color mode support (`_light`, `_dark`)
- ChakraProvider wraps the entire app in `pages/_app.tsx` with custom system
- No longer uses `@emotion/styled` or `framer-motion` (removed in v3)

### Code Quality Tooling
- **Biome**: Fast all-in-one formatter and linter (replaces ESLint + Prettier)
  - Configured in `biome.json`
  - Rules: no-console (error), no-unused-variables (error), recommended rules enabled
  - Format: 2 spaces, single quotes, trailing commas, 80 char line width
  - Auto-organizes imports on check/format
- **Husky + lint-staged**: Pre-commit hooks that run Biome check on staged files

### PWA Configuration
PWA is configured via `@serwist/next` package - a modern, performant PWA toolkit:
- **Service Worker**: Written in TypeScript at `app/sw.ts` with runtime caching strategies
- **Caching Strategies**:
  - Google Fonts: CacheFirst (1 year)
  - Static assets (fonts, images, JS, CSS): StaleWhileRevalidate (1 day to 1 week)
  - API routes: NetworkFirst with 10s timeout (24 hours cache)
  - Navigation: NetworkFirst fallback strategy
- **Features**: Skip waiting, clients claim, navigation preload, reload on online
- **Manifest**: Located at `public/manifest.json` with app icons
- **Build**: Disabled in development, service worker built to `public/sw.js` in production

## Requirements
- Node.js >= 22.0.0 (Active LTS)
- pnpm >= 9.0.0 (package manager used for this project)
