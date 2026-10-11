// Service Worker for FUTMINNA 100L Grade-A Master (Offline-First)
const CACHE_NAME = 'futminna-100l-v8';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './favicon.png',
  './data/questions_data.js',
  './data/flashcards_data.js',
  './data/mat101_questions.json',
  './data/phy101_questions.json',
  './data/chm111_questions.json',
  './data/chm191_questions.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './lib/katex/katex.min.css',
  './lib/katex/katex.min.js',
  './lib/katex/auto-render.min.js',
  './lib/katex/fonts/KaTeX_AMS-Regular.woff2',
  './lib/katex/fonts/KaTeX_Caligraphic-Bold.woff2',
  './lib/katex/fonts/KaTeX_Caligraphic-Regular.woff2',
  './lib/katex/fonts/KaTeX_Fraktur-Bold.woff2',
  './lib/katex/fonts/KaTeX_Fraktur-Regular.woff2',
  './lib/katex/fonts/KaTeX_Main-Bold.woff2',
  './lib/katex/fonts/KaTeX_Main-BoldItalic.woff2',
  './lib/katex/fonts/KaTeX_Main-Italic.woff2',
  './lib/katex/fonts/KaTeX_Main-Regular.woff2',
  './lib/katex/fonts/KaTeX_Math-BoldItalic.woff2',
  './lib/katex/fonts/KaTeX_Math-Italic.woff2',
  './lib/katex/fonts/KaTeX_SansSerif-Bold.woff2',
  './lib/katex/fonts/KaTeX_SansSerif-Italic.woff2',
  './lib/katex/fonts/KaTeX_SansSerif-Regular.woff2',
  './lib/katex/fonts/KaTeX_Script-Regular.woff2',
  './lib/katex/fonts/KaTeX_Size1-Regular.woff2',
  './lib/katex/fonts/KaTeX_Size2-Regular.woff2',
  './lib/katex/fonts/KaTeX_Size3-Regular.woff2',
  './lib/katex/fonts/KaTeX_Size4-Regular.woff2',
  './lib/katex/fonts/KaTeX_Typewriter-Regular.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching offline assets');
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('[Service Worker] Non-critical pre-cache issue:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Wiping old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const isHtml = event.request.mode === 'navigate' || event.request.headers.get('accept')?.includes('text/html');

  // NETWORK-FIRST for HTML navigation so users ALWAYS get updated versions when online
  if (isHtml) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => caches.match('./index.html') || caches.match(event.request))
    );
    return;
  }

  // CACHE-FIRST with network fallback for static assets
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (
          event.request.method === 'GET' &&
          networkResponse &&
          networkResponse.status === 200
        ) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      });
    })
  );
});
