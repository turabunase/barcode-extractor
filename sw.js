self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{await caches.delete('barcode-extractor-v2');await self.registration.unregister();await self.clients.claim();})()));
