// Offline support: the pages + design list are cached on install; each picture is cached the first time it's seen.
// ponytail: pictures aren't pre-downloaded (323 MB) - only what the customer has opened works offline.
const V = 'inkfusion-v1';
const SHELL = ['./', 'index.html', 'catalogue.html', 'site.css', 'common.js', 'data/designs.js', 'img/mark.png', 'img/icon-192.png'];
self.addEventListener('install', (e) => e.waitUntil(caches.open(V).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', (e) => e.waitUntil(caches.keys()
  .then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (u.origin !== location.origin) return;              // fonts, WhatsApp: straight to the network
  if (u.pathname.includes('/img/')) {                    // pictures never change: cache first
    e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request).then((r) => {
      const copy = r.clone(); caches.open(V).then((c) => c.put(e.request, copy)); return r;
    })));
    return;
  }
  // pages, css, design list: fresh when online, cached copy when offline
  e.respondWith(fetch(e.request).then((r) => {
    const copy = r.clone(); caches.open(V).then((c) => c.put(e.request, copy)); return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
