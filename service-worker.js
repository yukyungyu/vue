if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let u={};const l=e=>r(e,o),t={module:{uri:o},exports:u,require:l};s[o]=Promise.all(i.map((e=>t[e]||l(e)))).then((e=>(n(...e),u)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vuestagram"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vue/css/app.8dcdc1de.css",revision:null},{url:"/vue/follower.json",revision:"2442c3c4ca099b72562fd2144b7400de"},{url:"/vue/img/me.653d507f.jpg",revision:null},{url:"/vue/index.html",revision:"8f8e015432bbddcb981662e54560b8cb"},{url:"/vue/js/app.52794590.js",revision:null},{url:"/vue/js/chunk-vendors.a90fbaea.js",revision:null},{url:"/vue/manifest.json",revision:"6a1ad00dd7d473f746f3897d0ce8c52e"},{url:"/vue/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
