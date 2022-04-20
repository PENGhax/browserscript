// ==UserScript==
// @name         WeChatMP Assistant
// @namespace    http://deephax.top
// @license      MIT
// @version      0.1
// @description  WeChatMP.web platform assistant.
// @author       PENGhax
// @match        https://mp.weixin.qq.com/*
// @icon         https://res.wx.qq.com/a/fed_upload/9300e7ac-cec5-4454-b75c-f92260dd5b47/logo-mp.ico
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/vue/dist/vue.js
// @require      https://cdn.bootcdn.net/ajax/libs/spectre.css/0.5.9/spectre.min.css
// ==/UserScript==

(function () {
  "use strict";

  window.onload = () => {
    // After loaded script hide QA section.
    document.querySelector(".weui-desktop-online-faq__wrp").style.display = "none";
    createRootEle();

    const App = {
      data() {
        return {
          message: "Hi",
        };
      },
    };
    const app = Vue.createApp(App).mount("#WXMP");
  };

  function createRootEle() {
    const sliderEleRoot = document.createElement("div");
    sliderEleRoot.id = "WXMP";
    sliderEleRoot.className = "container";
    document.body.appendChild(sliderEleRoot);
  }
})();
