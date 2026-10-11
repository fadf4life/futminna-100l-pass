// Service Worker for FUTMINNA 100L Grade-A Master (Offline-First)
const CACHE_NAME = 'futminna-100l-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './data/questions_data.js',
  './data/flashcards_data.js',
  './data/mat101_questions.json',
  './data/phy101_questions.json',
  './data/chm111_questions.json',
  './data/chm191_questions.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
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
            console.log('[Service Worker] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Offline-first strategy
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        // Cache external fonts and successful GET requests dynamically
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
      }).catch(() => {
        // If both cache and network fail, return offline fallback for HTML requests
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
