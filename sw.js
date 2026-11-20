const CACHE='procure-pharmacy-v3-final';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./procure-logo-original.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('procure-')&&k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(resp=>{const cp=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return resp}).catch(()=>caches.match('./index.html'))))});
