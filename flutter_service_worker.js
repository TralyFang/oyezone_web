'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "7a436fcd04e9f35fa71a922471349538",
"index.html": "5161c2be6266dd78f4dd46d555137097",
"/": "5161c2be6266dd78f4dd46d555137097",
"main.dart.js": "f2bcf94e5ee242d2487aeb04ce8402de",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cf06ed05e335313dd56a552bca66edfb",
"assets/AssetManifest.json": "584f3bfc5acd6a38943a8c3a64e03e92",
"assets/NOTICES": "2b4f164e6e4d6e8b4b0533a629ecf04d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "b887a61fb3bbf7f6ec07d6694d45f4bb",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/icon_logo_2023.webp": "9c894763752b459f6110dff14a659ef9",
"assets/assets/images/personal_center/to_user.webp": "603c9831d3baca10dfb3ee5df967df89",
"assets/assets/images/personal_center/talent_transfer.webp": "84721bc6b706a1eb9e8a1ab3ea378ede",
"assets/assets/images/personal_center/icon_more.png": "68a4e276fd3a2da99bcd5f608162a199",
"assets/assets/images/personal_center/icon_drop_down.png": "82f8dbd3706bb18b4848713c2e5b7a87",
"assets/assets/images/personal_center/agent_beans.webp": "e1c4c2f4721aab640776cbe0d21d4b72",
"assets/assets/images/personal_center/default_head.webp": "0022a3634aac43a5d8ec132003f01056",
"assets/assets/images/personal_center/gems.webp": "b6d5833f19682f1628084d0ced22da8f",
"assets/assets/images/personal_center/icon_search.png": "34c4f4b70e4363b8569793ebb9e634e1",
"assets/assets/images/personal_center/to_agent.webp": "43df66d3927005fbc33f50a501085529",
"assets/assets/images/personal_center/talent_total.webp": "341ef756d86c5ecb13fc4e1c278054fb",
"assets/assets/images/personal_center/talent_live_duration.webp": "6905b452203daa8fb1be079a4afad7d2",
"assets/assets/images/personal_center/talent_active.webp": "fefc88d2cb6477d9246295e6cd55b5aa",
"assets/assets/images/personal_center/agent_lost.webp": "e4fdbf5235e26ec024ccc6c140162bb1",
"assets/assets/images/personal_center/pie_badge.webp": "da01fe0af3d4d45d9197235ca863666e",
"assets/assets/images/personal_center/agent_new.webp": "0e402b7014240c5d877fea245428eccc",
"assets/assets/images/personal_center/beans.webp": "f513766f17cdfd4d33b4b6fffbb6be88",
"assets/assets/images/personal_center/to_up.webp": "aa09f4514099efdd23dd2d421f00608d",
"assets/assets/images/personal_center/female.webp": "bf04fcd5dd4949cbecd3a59b70ed6588",
"assets/assets/images/personal_center/topup_history.webp": "ff773cc2ca1d651f66c0b6ee1ca36490",
"assets/assets/images/personal_center/withdraw.webp": "7efcd8b94d360a934898fc98e30eda9a",
"assets/assets/images/personal_center/icon_time.webp": "b7acc27fb30dd0061593ed8a488b862e",
"assets/assets/images/personal_center/location.webp": "89c6f7518feb2e596db3d711dbe036b6",
"assets/assets/images/personal_center/transfer.webp": "484ecc0649158740f65bfc3be809b69b",
"assets/assets/images/personal_center/male.webp": "efbfa554235b541789506ef693a8f09c",
"assets/assets/images/personal_center/agent_total.webp": "67fdf9197a74bb0102e9e20d45fe8d65",
"assets/assets/images/personal_center/icon_success.webp": "7103211494db059a597af4de0968e6ca",
"assets/assets/images/personal_center/icon_arrow.webp": "13f2f3790486d14f35294ebcc348ff35",
"assets/assets/images/personal_center/copy.webp": "b1abd49c142a6c394afc9507cb9ce3a4",
"assets/assets/images/personal_center/setting.webp": "30af3a07b23020f616715e3a47f6e9a5",
"assets/assets/images/personal_center/icon_fail.webp": "578d08d5313c1c964a7eb453a2987ab0",
"assets/assets/images/personal_center/exchange.webp": "199f79dc6fb6e08d47059d8c447dd7b0",
"assets/assets/images/personal_center/agent_active.webp": "f342acbd88626743dc28e54e13526f30",
"assets/assets/images/personal_center/talent_new.webp": "037d193ebb8a7f4a44cb070e36a1e5fa",
"assets/assets/images/personal_center/icon_close.webp": "2c7bd462a71dd327b491c8bae960f17c",
"assets/assets/images/report/report_exchange.png": "6e9b4c16be7fb87de067015d289484b5",
"assets/assets/images/report/report_agent_withdraw.png": "31495343cab41999bf8e1749b1a801ab",
"assets/assets/images/report/talent_live_duration.webp": "a71353acc8beeb536d5d51e4ad724f42",
"assets/assets/images/report/report_monthly_top_tips.png": "9509db9d6d8f71b99ff711072972f717",
"assets/assets/images/report/talent_active.webp": "8610bbd2c7dccf9a9128581f9f2583ee",
"assets/assets/images/report/report_transfer.png": "63f407bbf13f891fc055d99d3aa38b77",
"assets/assets/images/report/withdraw.webp": "43470fe5ae57ab134f2d524dee16f9e7",
"assets/assets/images/report/topup.webp": "b7dd92cd0c0da2185dc9fad620b4218b",
"assets/assets/images/report/transfer.webp": "f60665792e503babeb0367a140f15fea",
"assets/assets/images/report/agent_total.webp": "67fdf9197a74bb0102e9e20d45fe8d65",
"assets/assets/images/report/talent_earning.webp": "ec4bf8b3dd4f8678bbb54df004434973",
"assets/assets/images/report/report_month_exchange.png": "6ad696edfd560a310d87c92b529d53f6",
"assets/assets/images/report/report_agent_topup.png": "b95c18297e337ebd4b614f583841063a",
"assets/assets/images/report/history_talent.webp": "da86fc3300bc3ac17c86e1d0bf3cf6df",
"assets/assets/images/report/report_agent_earning.png": "5fc36798a4761ba8ae78dbb10c6ccc5b",
"assets/assets/images/report/agent_history.png": "464b1f7f1a47899fbdd5f41e22c89ecd",
"assets/assets/images/report/exchange.webp": "6ac021e069fa217277d5ec0ef18d56bb",
"assets/assets/images/report/live_dutation.webp": "6905b452203daa8fb1be079a4afad7d2",
"assets/assets/images/talent/add_talent.webp": "70acc471b91806d168066f6eb397487b",
"assets/assets/images/talent/history_talent.webp": "da86fc3300bc3ac17c86e1d0bf3cf6df",
"assets/assets/translations/en.json": "88cdfc1fcf81f2ae54d09002ee202afc",
"assets/assets/translations/zh-Hant.json": "8e33dc7aebef4c329103b89cf34b8105",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
