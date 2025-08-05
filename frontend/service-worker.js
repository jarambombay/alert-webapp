self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('kenyaflood').then(cache => {
      return cache.addAll([
        '/index.html',
        '/alerts.html',
        '/login.html',
        '/signup.html',
        '/admin.html',
        '/styles.css',
        '/main.js'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});