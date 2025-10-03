This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Demo

You can check [demo](https://next-typescript-chakra-ui-starter.vercel.app/)

## Features

- [React.js 19](https://react.dev/blog/2024/12/05/react-19) - Latest stable React version.
- [Next.js 15](https://nextjs.org/blog/next-15) - Latest Next.js with improved performance.
- [Typescript 5](https://www.typescriptlang.org/) - Documentation of typescript.
- [Serwist 9](https://serwist.pages.dev/) - Modern PWA toolkit for Next.js with service worker support.
- [Chakra UI 3](https://chakra-ui.com/) - Latest Chakra UI with new design system.
- [Docker](https://docs.docker.com/) - Documentation of Docker.
- [Biome 2](https://biomejs.dev/) - Fast formatter and linter for JavaScript and TypeScript.
- [Husky 9](https://typicode.github.io/husky/#/) - Documentation of husky.
- [Lint Staged 15](https://github.com/okonet/lint-staged) - Documentation of lint staged.

## Usage

This project using Node.js >= 22.0.0 (Active LTS) & pnpm >= 9.0.0

### Installation

```bash
git clone https://github.com/danangekal/next-typescript-chakra-ui-starter.git
pnpm install
```

#### Development

```bash
pnpm dev
```

#### Production

```bash
pnpm build
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

#### Docker Build

```bash
docker build -t next-typescript-chakra-ui-starter .
```

#### Docker Run

```bash
docker run --rm -it -p 3000:3000 next-typescript-chakra-ui-starter
```

#### Docker Compose

```bash
docker-compose up
```

#### Docker Images

You can use images available on docker hub [next-typescript-chakra-ui-starter](https://hub.docker.com/r/danangekal/next-typescript-chakra-ui-starter).

```bash
docker pull danangekal/next-typescript-chakra-ui-starter
```

## CI/CD

This project uses GitHub Actions for continuous integration and deployment. The pipeline consists of three jobs:

### 1. Lint and Test
- Runs Biome linter checks (`pnpm lint`)
- Runs Biome format and import organization checks (`pnpm check`)
- Ensures code quality standards are met

### 2. Build
- Builds the Next.js application (`pnpm build`)
- Runs after linting passes successfully
- Verifies the application can be built without errors

### 3. Docker
- Builds and pushes Docker image to Docker Hub
- Only runs on pushes to the `main` branch
- Uses GitHub Actions cache for faster builds
- Image available at: [danangekal/next-typescript-chakra-ui-starter](https://hub.docker.com/r/danangekal/next-typescript-chakra-ui-starter)

The workflow is triggered on:
- Push to `main` branch
- Pull requests to `main` branch
- Manual workflow dispatch

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

Copyright © 2021 by Danang Eko Alfianto
