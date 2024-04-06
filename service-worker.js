/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9dc3555e4c7758f6ee03300921d717bd"
  },
  {
    "url": "assets/css/0.styles.f9fb855f.css",
    "revision": "7f38cf3069326366554b90c14e68fafe"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/1.370c7499.png",
    "revision": "370c74994777eeeacd49831fec560b7c"
  },
  {
    "url": "assets/img/1.4af0d81f.png",
    "revision": "4af0d81f56856c14bdb8c2c74d15b332"
  },
  {
    "url": "assets/img/1.642a315a.png",
    "revision": "642a315a18948ab45e2293db3297eedf"
  },
  {
    "url": "assets/img/1.9f59b3ed.png",
    "revision": "9f59b3ed42702b1a2aa6cb64168fc844"
  },
  {
    "url": "assets/img/1.c8eb150a.jpg",
    "revision": "c8eb150a90800b2b0d5e05555dcbd40b"
  },
  {
    "url": "assets/img/1.cdf724dc.png",
    "revision": "cdf724dca8902770171845151e2ba3cc"
  },
  {
    "url": "assets/img/1.d69bfd24.png",
    "revision": "d69bfd24ab1ddb5090df25439aaf15ec"
  },
  {
    "url": "assets/img/2.ca0b43f8.png",
    "revision": "ca0b43f8d8a739090982a72bfca46e7a"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.087aea53.js",
    "revision": "210af05aac82a17b913869fc04a94653"
  },
  {
    "url": "assets/js/10.07b4db41.js",
    "revision": "dcf35ea95e6a69cc18732f1e8a385a65"
  },
  {
    "url": "assets/js/11.574d3fba.js",
    "revision": "15f8be6feab868f8231188cc351b534f"
  },
  {
    "url": "assets/js/14.0864ae06.js",
    "revision": "f98e370c60c8eff8448fa191674c2fef"
  },
  {
    "url": "assets/js/15.2684e4d0.js",
    "revision": "983cc5f771d3b738f612bfa33103340b"
  },
  {
    "url": "assets/js/16.933d8449.js",
    "revision": "5db7acb4977c3d1003e0d74a2a777c21"
  },
  {
    "url": "assets/js/17.bd467027.js",
    "revision": "3f15ad7b26edfc6b2daade0297cc33b2"
  },
  {
    "url": "assets/js/18.bffa7679.js",
    "revision": "e3ef0a6d9786f1dcfd6a2adeb50f2e89"
  },
  {
    "url": "assets/js/19.16d29799.js",
    "revision": "7d6732146ff83d1e59fa84377d448401"
  },
  {
    "url": "assets/js/2.bba31d58.js",
    "revision": "3e74f2a505703129ee97cde577c3b2b9"
  },
  {
    "url": "assets/js/20.c0c39a26.js",
    "revision": "6f277e30e8ae42c32a097f6088cc8464"
  },
  {
    "url": "assets/js/21.ffa9860d.js",
    "revision": "d8f903ca5f3c3bae6618c7add8009937"
  },
  {
    "url": "assets/js/22.733b5c48.js",
    "revision": "d0a4683ade1fc6c5c3f6df72554c44f2"
  },
  {
    "url": "assets/js/23.584ae6e8.js",
    "revision": "86e4da8c68ee34d0fd6c0682e9cca8d4"
  },
  {
    "url": "assets/js/24.3548689d.js",
    "revision": "3bdaa83567800abafd044d3b36d470e8"
  },
  {
    "url": "assets/js/25.c4e3873d.js",
    "revision": "634fb93b7ac749f52231fadf88e5d585"
  },
  {
    "url": "assets/js/26.8300ee72.js",
    "revision": "86ecd6effe6d8fb3b612f7ac7c44cd66"
  },
  {
    "url": "assets/js/27.a36a0d02.js",
    "revision": "cf03f655b9fe490132e3e4f042c91f00"
  },
  {
    "url": "assets/js/28.d5ee13b9.js",
    "revision": "a7ab5606805e8e6cb11f303bf5b60667"
  },
  {
    "url": "assets/js/29.03b9f316.js",
    "revision": "77e7bacb15275c12a987931ae165ab8a"
  },
  {
    "url": "assets/js/3.98ec49e4.js",
    "revision": "c7a7c7d12a50248adc385fe91d95004b"
  },
  {
    "url": "assets/js/30.5ba6f7dd.js",
    "revision": "f125713155d4eb256e6401c9652aa149"
  },
  {
    "url": "assets/js/31.1b167b56.js",
    "revision": "28e822b468a81bae89b6475cb2649b29"
  },
  {
    "url": "assets/js/32.99293099.js",
    "revision": "08198fbac0ab0cdfa79132cc1d550be1"
  },
  {
    "url": "assets/js/33.a39ed8c6.js",
    "revision": "7948da08a82fdfabd51aae4f0245546d"
  },
  {
    "url": "assets/js/34.079b7749.js",
    "revision": "4f1ef5fab7ea42ac2117a17ae1913adf"
  },
  {
    "url": "assets/js/35.8b90d5db.js",
    "revision": "16509cc65ad2a610bde63c3b489547e2"
  },
  {
    "url": "assets/js/36.fd2608eb.js",
    "revision": "7c4853a43180e27a6578db50ef5f6d95"
  },
  {
    "url": "assets/js/37.879b8caa.js",
    "revision": "ad3acb6e84e22727b7cac0abcdda1514"
  },
  {
    "url": "assets/js/38.b37b7378.js",
    "revision": "daec281b1e4afb0cc611648b309e83cb"
  },
  {
    "url": "assets/js/39.5410d6f9.js",
    "revision": "374d2cac2cc022f108695d3a17848dcf"
  },
  {
    "url": "assets/js/4.2fb584f8.js",
    "revision": "d185c753039444fa31997b87ebc373f9"
  },
  {
    "url": "assets/js/40.8fe5389a.js",
    "revision": "d6fd0c739df25f028aacd1a82b2a88d5"
  },
  {
    "url": "assets/js/41.869376cc.js",
    "revision": "2e388b31430a0f2edd9c362d219d7af4"
  },
  {
    "url": "assets/js/42.7eea63b2.js",
    "revision": "1ba3faef8ee9c9d16e57fe41dc4d0d56"
  },
  {
    "url": "assets/js/43.a2bfd5c4.js",
    "revision": "4e1611eeb211e835ab16820ff35f451f"
  },
  {
    "url": "assets/js/44.c6f76426.js",
    "revision": "de35d0e615f35a1b842789a2e26e4b62"
  },
  {
    "url": "assets/js/45.82686960.js",
    "revision": "94e98b4fe0df7aa9d708031bc5c005bf"
  },
  {
    "url": "assets/js/46.7fbf8b06.js",
    "revision": "5299c03d9f5d5e7ee78dfe0055a9a63f"
  },
  {
    "url": "assets/js/47.a64dbadb.js",
    "revision": "800d3962c41c9b96f6b8a2c503e44fc7"
  },
  {
    "url": "assets/js/48.fc209258.js",
    "revision": "f833a665981380ce52255b49f2753132"
  },
  {
    "url": "assets/js/49.d46c29e3.js",
    "revision": "1915399720c99cbd9ffd19f57d51111e"
  },
  {
    "url": "assets/js/5.26db8f15.js",
    "revision": "76cb911328fa6542aebd9ba5e6155855"
  },
  {
    "url": "assets/js/50.ddd137fb.js",
    "revision": "1e0a203811b4b7e76ca0f3cddc57bea3"
  },
  {
    "url": "assets/js/51.2cfd7389.js",
    "revision": "401b224c07d3779412370de0a5189efe"
  },
  {
    "url": "assets/js/52.a7979ceb.js",
    "revision": "341e4def1a0e33466f8937e469e56ffa"
  },
  {
    "url": "assets/js/53.41ce7c87.js",
    "revision": "a0f7eadaf8ba78975186279aebae5e36"
  },
  {
    "url": "assets/js/54.600fce3b.js",
    "revision": "d48a3b45f1dcb8d573fb2214a0b4e61e"
  },
  {
    "url": "assets/js/6.2935d17c.js",
    "revision": "cafbde766b0ee6dbdf00ef6650ecb166"
  },
  {
    "url": "assets/js/7.db543bee.js",
    "revision": "c8959fd28f606dbe9baf1f4ad3b032ed"
  },
  {
    "url": "assets/js/8.0ce35275.js",
    "revision": "f33f41685dd6fd0f5afb566a88dbd58c"
  },
  {
    "url": "assets/js/9.93bccf14.js",
    "revision": "fdcfef722296ad40e3e574149afd3aca"
  },
  {
    "url": "assets/js/app.43bee490.js",
    "revision": "703cdf2898059cc86daa4661be281267"
  },
  {
    "url": "assets/js/vendors~docsearch.1cd503e1.js",
    "revision": "920d45f00d30ceb82ca0f78733ee1892"
  },
  {
    "url": "avatar.png",
    "revision": "53b3547ed161baeebc3c2bd1950806db"
  },
  {
    "url": "bg.png",
    "revision": "1356de2d4cff6b5a9b28e1d210e66b07"
  },
  {
    "url": "blog/about-recursion/part-one.html",
    "revision": "617fc16e80c445326e04a224915945c3"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "c5e4b29a8011567f7093919a9b4da10e"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "8f416a553a19cba4ca48aa1a4b6207e4"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "70510187439cf940dcbc28987299793b"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "60daac90a82d2a63d67ffd127ab03139"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "d5c3af7162750ebd56dcb9d1ea1bd76a"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "a67e3e5d35d6389745e9703e62b26dc0"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "00ee9686e672bea61d889eacea19a5f6"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "3471a7e3f9f53a5d3e496b00d3b72762"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "e808021b3d0664517aec21bc2a77defa"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "5540da241f6e3d666bfda37b3cdc09c2"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "7dfa2dd1fe62081ef18dbbe612fe66f3"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "0bb7f6c7bc23403b73a657bb3353f952"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "0f4642983106b9fbbe489b7390dfd482"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "debaa1cdf8483f492ae81156bd753e62"
  },
  {
    "url": "categories/index.html",
    "revision": "1eca7bbca896e8c0e85c1dd802fda7d5"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "241edb1e1f694c77d76440aff8a94e33"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "12aa63c1e5eb33cb98e0aac3243cc1c7"
  },
  {
    "url": "categories/React/index.html",
    "revision": "01e306445e642ed353f185a361c952eb"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "eab73fd66767595d59b5438416bc83b3"
  },
  {
    "url": "index.html",
    "revision": "64325a5d7c5071f4efaa328b2e8bc20c"
  },
  {
    "url": "musicCover.png",
    "revision": "166ab759d88f3df9ef26bcd6ca31e0e5"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c37f19cf0ba601b28aaa092e293f64dc"
  },
  {
    "url": "tag/http/index.html",
    "revision": "84908631dd2dfe926fbbafc243826f26"
  },
  {
    "url": "tag/index.html",
    "revision": "31e002f5d6d4a8d48058a67d4133b9cc"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "ab9c1717bf428dcac76f45428ef641a8"
  },
  {
    "url": "tag/react/index.html",
    "revision": "91597bfa5322bc86e6fccbfe7f185b80"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "4f97e6209f96f485d485ae7a8e329cc1"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "a378f558c00166a819d35f5138787b79"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "0c0292d60c446b37dacbcb10ee3daac2"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "41b40b6e2e0e7ea5133fe7521e543147"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "babf8de64a1a0cfe0156af91fe8d6c9d"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "bf2f81fcdeaa6fcc90c1afad5d57eae0"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "36aecac4e2fef58fafc7458a8eaa239a"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "ed4ea4f78e54f3cf279e63cea2e05ecd"
  },
  {
    "url": "timeline/index.html",
    "revision": "9268ebdab7982b4b7f2b6ada2456d0a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
