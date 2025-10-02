import type { PrecacheEntry, SerwistGlobalConfig } from 'serwist';
import {
  CacheFirst,
  NetworkFirst,
  Serwist,
  StaleWhileRevalidate,
} from 'serwist';

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: WorkerGlobalScope & typeof globalThis;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [
    {
      matcher({ url }) {
        return (
          url.hostname.includes('fonts.googleapis.com') ||
          url.hostname.includes('fonts.gstatic.com')
        );
      },
      handler: new CacheFirst({
        cacheName: 'google-fonts',
      }),
    },
    {
      matcher({ url }) {
        return /\.(?:eot|otf|ttc|ttf|woff|woff2|font\.css)$/i.test(
          url.pathname,
        );
      },
      handler: new StaleWhileRevalidate({
        cacheName: 'static-font-assets',
      }),
    },
    {
      matcher({ request }) {
        return request.destination === 'image';
      },
      handler: new StaleWhileRevalidate({
        cacheName: 'static-image-assets',
      }),
    },
    {
      matcher({ request }) {
        return request.destination === 'script';
      },
      handler: new StaleWhileRevalidate({
        cacheName: 'static-js-assets',
      }),
    },
    {
      matcher({ request }) {
        return request.destination === 'style';
      },
      handler: new StaleWhileRevalidate({
        cacheName: 'static-style-assets',
      }),
    },
    {
      matcher({ url }) {
        return url.pathname.startsWith('/api/');
      },
      handler: new NetworkFirst({
        cacheName: 'api-cache',
        networkTimeoutSeconds: 10,
      }),
    },
    {
      matcher({ request }) {
        return request.mode === 'navigate';
      },
      handler: new NetworkFirst({
        cacheName: 'pages',
        networkTimeoutSeconds: 10,
      }),
    },
  ],
});

serwist.addEventListeners();
