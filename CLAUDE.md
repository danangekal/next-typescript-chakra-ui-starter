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
- **public/**: Static assets (PWA assets generated here)

### Key Configuration Files
- **next.config.js**: Next.js config with PWA plugin (disabled in dev, outputs to public/)
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
PWA is configured via `next-pwa` package in next.config.js:
- Disabled in development
- Service worker and manifest generated to public/ directory during build
- Production builds are fully PWA-compliant

## Requirements
- Node.js >= 22.0.0 (Active LTS)
- pnpm >= 9.0.0 (package manager used for this project)
