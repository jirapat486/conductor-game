// เก็บไฟล์เกมไว้ในเครื่อง เพื่อให้เล่นได้แม้ไม่มีอินเทอร์เน็ต
// ถ้ามีเน็ต จะดึงไฟล์ล่าสุดเสมอ (ครูแก้รายการวัตถุแล้วอัปโหลดใหม่ได้เลย)
var CACHE = "conductor-game-v7";
var CORE = [
  "./",
  "index.html",
  "items.js",
  "icons.js",
  "manifest.webmanifest",
  "fonts/Mitr-Medium.ttf",
  "fonts/Mitr-SemiBold.ttf",
  "icon-180.png",
  "icon-192.png",
  "icon-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }));
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

// ลองโหลดจากเน็ตก่อน ถ้าไม่มีเน็ตหรือช้าเกิน 4 วินาที ให้ใช้ไฟล์ที่เก็บไว้
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;

  e.respondWith(new Promise(function (resolve) {
    var done = false;
    function fromCache() {
      return caches.match(req, { ignoreSearch: true }).then(function (hit) {
        return hit || (req.mode === "navigate" ? caches.match("index.html") : undefined);
      });
    }
    var timer = setTimeout(function () {
      fromCache().then(function (hit) { if (hit && !done) { done = true; resolve(hit); } });
    }, 4000);

    fetch(req.url, { cache: "no-cache" }).then(function (res) {
      if (res && res.ok) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
      }
      if (!done) { done = true; clearTimeout(timer); resolve(res); }
    }).catch(function () {
      clearTimeout(timer);
      fromCache().then(function (hit) {
        if (!done) { done = true; resolve(hit || new Response("", { status: 504 })); }
      });
    });
  }));
});
