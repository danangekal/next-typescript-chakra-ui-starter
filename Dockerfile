# Set image from base on offical node 22 lts alpine
ARG VERSION=22-alpine
FROM node:$VERSION

# Set label maintainer, version & description
LABEL maintainer="danangekal@gmail.com"
LABEL version="0.1.0"
LABEL description="Next.js 15 + React 19 + TypeScript + Chakra UI 3 starter with latest packages"

# Set working directory
WORKDIR /app

# Enable corepack for pnpm
RUN corepack enable

# Copy package files
COPY package.json pnpm-lock.yaml .npmrc ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy all files
COPY . .

# Build app
RUN pnpm build

# Expose the listening port
EXPOSE 3000

# Run start script when container starts
CMD pnpm start
