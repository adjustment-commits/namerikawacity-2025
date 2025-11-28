const CACHE_NAME = “adjustment-v1”;

const urlsToCache = [
“./”,
“./index.html”,
“./manifest.json”,
“./assets/footer-lite.html”,
“./assets/footer-lite.css”
];

self.addEventListener(“install”, event => {
event.waitUntil(
caches.open(CACHE_NAME).then(cache => {
return cache.addAll(urlsToCache);
})
);
});

self.addEventListener(“fetch”, event => {
event.respondWith(
caches.match(event.request).then(response => {
return response || fetch(event.request);
})
);
});
