const CACHE_NAME = “adjustment-v1”;

const urlsToCache = [
“./”,
“./index.html”,
“./manifest.json”,
“./assets/footer-lite.html”,
“./assets/footer-lite.css”,

/* ==== 追加：lesson01関連 ==== */
“./coach/lesson01/index.html”,
“./coach/lesson01/images/page02.png”,
“./coach/lesson01/images/page03-1.png”,
“./coach/lesson01/images/page03-2.png”,
“./coach/lesson01/images/page03-3.png”,
“./coach/lesson01/images/page03-4.png”,
“./coach/lesson01/images/page07.png”,
“./coach/lesson01/images/page10.png”,
“./coach/lesson01/images/page11.png”,
“./coach/lesson01/images/page12.png”,
“./coach/lesson01/images/page13.png”,
“./coach/lesson01/images/page17.png”
];

self.addEventListener(“install”, event => {
event.waitUntil(
caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
);
});

self.addEventListener(“fetch”, event => {
event.respondWith(
caches.match(event.request).then(response => response || fetch(event.request))
);
});
