/*! Built with http://stenciljs.com */
UefWebComponents.loadBundle("acddkg7s",["exports"],function(e){var t=window.UefWebComponents.h,n=function(){function e(){this.loaded=!1}return e.prototype.isLoaded=function(){this.loaded=!0},e.prototype.render=function(){var e=document.getElementById(this.waitFor);return e.addEventListener("uef-event-load",function(){e.closest("uef-waiting-indicator").isLoaded()}),t("div",null,t("span",{class:"uef-js-display "+(this.loaded?"uef--shown":"")},t("slot",null)),t("div",{class:"uef-js-display "+(this.loaded?"":"uef--shown")},t("div",{class:"uef-waiting-indicator"}),t("p",null,this.loadingMessage)))},Object.defineProperty(e,"is",{get:function(){return"uef-waiting-indicator"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{isLoaded:{method:!0},loaded:{state:!0},loadingMessage:{type:String,attr:"loading-message"},waitFor:{type:String,attr:"wait-for"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".uef-waiting-indicator.sc-uef-waiting-indicator{border:16px solid #999;border-top:16px solid #666;border-radius:50%;width:120px;height:120px;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.uef-js-display.sc-uef-waiting-indicator{display:none}.uef-js-display.uef--shown.sc-uef-waiting-indicator{display:block}"},enumerable:!0,configurable:!0}),e}();e.UefWaitingIndicator=n,Object.defineProperty(e,"__esModule",{value:!0})});