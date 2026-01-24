// Service Worker for Offline Luxor Site
const CACHE_NAME = 'luxor-offline-v1';
const urlsToCache = [
  '/',
  '/index.js',
  '/_next/static/css/',
  '/_next/static/js/',
  '/assets/new_launches/pcw.jpg',
  '/assets/new_launches/kids.png',
  '/assets/new_launches/neronew.png',
  '/assets/new_launches/vistanew.png',
  '/assets/new_launches/AneliaBlack.png',
  '/assets/new_launches/marker_blue.png',
  '/assets/new_launches/Outline-Marker-Purple.png',
  '/assets/new_launches/Broadtip Marker.png',
  '/assets/new_launches/Fineliner.png',
  '/assets/new_launches/Elan.png',
  '/assets/new_launches/ikon_6.png',
  '/assets/new_launches/Fluorescent.png',
  '/assets/new_launches/WBM 120 Red.png',
  '/assets/new_launches/MetallicMarkerGold11.png',
  '/assets/new_launches/Pastel.png',
  '/assets/new_launches/metal_pens.png',
  '/assets/env_1.gif',
  '/assets/High_Quality.png',
  '/assets/Eco_Friendly.png',
  '/assets/Smooth.png',
  '/assets/100_Quality.png',
  '/assets/100_Cust.png',
  '/assets/3r.png',
  '/assets/map.png',
  '/assets/logo.png',
  '/assets/award1.png',
  '/assets/award2.png',
  '/assets/award3.png',
  '/assets/images/certificates/Ap.jpg',
  '/assets/images/certificates/Ce.jpg',
  '/assets/images/certificates/Eco.jpg',
  '/assets/images/certificates/EN71.jpg',
  '/assets/images/certificates/ISo9001.jpg',
  '/assets/images/certificates/ISO14001.jpg',
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache)
          .catch(error => {
            console.log('Cache addAll failed:', error);
            // Continue with partial cache
            return Promise.resolve();
          });
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(() => {
          // If fetch fails (offline), try to serve from cache
          return caches.match(event.request);
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
