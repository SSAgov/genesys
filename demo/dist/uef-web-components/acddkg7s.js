/*! Built with http://stenciljs.com */
const{h:t}=window.UefWebComponents;class e{constructor(){this.loaded=!1}isLoaded(){this.loaded=!0}render(){const e=document.getElementById(this.waitFor);return e.addEventListener("uef-event-load",function(){e.closest("uef-waiting-indicator").isLoaded()}),t("div",null,t("span",{class:"uef-js-display "+(this.loaded?"uef--shown":"")},t("slot",null)),t("div",{class:"uef-js-display "+(this.loaded?"":"uef--shown")},t("div",{class:"uef-waiting-indicator"}),t("p",null,this.loadingMessage)))}static get is(){return"uef-waiting-indicator"}static get encapsulation(){return"shadow"}static get properties(){return{isLoaded:{method:!0},loaded:{state:!0},loadingMessage:{type:String,attr:"loading-message"},waitFor:{type:String,attr:"wait-for"}}}static get style(){return".uef-waiting-indicator{border:16px solid #999;border-top:16px solid #666;border-radius:50%;width:120px;height:120px;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}\@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.uef-js-display{display:none}.uef-js-display.uef--shown{display:block}"}}export{e as UefWaitingIndicator};