/*! Built with http://stenciljs.com */
const{h:e}=window.UefWebComponents;class t{render(){var t="";return null!=this.type&&(t=" uef-badge--"+this.type),e("span",{class:"uef-badge"+t},this.label)}static get is(){return"uef-badge"}static get encapsulation(){return"shadow"}static get properties(){return{label:{type:String,attr:"label"},type:{type:String,attr:"type"}}}static get style(){return".uef-u-center.sc-uef-badge{float:none!important;margin-left:auto;margin-right:auto}.uef-u-clearfix.sc-uef-badge:after, .uef-u-clearfix.sc-uef-badge:before{content:\" \";display:table}.uef-u-clearfix.sc-uef-badge:after{clear:both}.uef-u-pull-right.sc-uef-badge{float:right!important}.uef-u-pull-left.sc-uef-badge{float:left!important}.uef-u-sr-only.sc-uef-badge{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.uef-u-sr-only--focusable.sc-uef-badge:active, .uef-u-sr-only--focusable.sc-uef-badge:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.uef-u-print--block.sc-uef-badge, .uef-u-print--inline.sc-uef-badge, .uef-u-print--inline-block.sc-uef-badge{display:none!important}\@media print{.uef-u-print--block.sc-uef-badge{display:block!important}.uef-u-print--inline.sc-uef-badge{display:inline!important}.uef-u-print--inline-block.sc-uef-badge{display:inline-block!important}.uef-u-print--none.sc-uef-badge{display:none!important}}\@media screen and (min-width:768px){.uef-u-viewport--small.sc-uef-badge{display:none}.uef-u-viewport--large.sc-uef-badge{display:inline}}\@media screen and (max-width:767px){.uef-u-viewport--small.sc-uef-badge{display:inline}.uef-u-viewport--large.sc-uef-badge{display:none}}.uef-badge.sc-uef-badge{color:#222;background-color:rgba(34,34,34,.1);display:inline-block;padding:0 .4rem;font-family:Arimo,sans-serif;font-size:1.4rem;font-weight:700;line-height:2.4rem;text-align:center;vertical-align:top;white-space:nowrap}.uef-badge--danger.sc-uef-badge{color:#c00;background-color:#fdd}.uef-badge--info.sc-uef-badge{color:#05c;background-color:#dff}.uef-badge--success.sc-uef-badge{color:#070;background-color:#dfd}.uef-badge--warning.sc-uef-badge{color:#a40;background-color:#ffd}"}}export{t as UefBadge};