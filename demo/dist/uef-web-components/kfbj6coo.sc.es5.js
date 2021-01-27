/*! Built with http://stenciljs.com */
UefWebComponents.loadBundle("kfbj6coo",["exports"],function(e){var t=window.UefWebComponents.h,r=function(){function e(){this.required=!1,this.error=!1,this.errorState=!1}return e.prototype.errorHandler=function(){this.errorState=this.error},e.prototype.getJSON=function(e){var t;try{t=JSON.parse(e)}catch(r){t=window[e]}return t},e.prototype.componentDidLoad=function(){document.getElementsByTagName("uef-error-summary")[0].updateErrors();var e=this.getJSON(this.radioObject),t=this.radiolistEl.querySelectorAll("ol input");if(t.length>0)var r=this.radiolistEl.querySelector("ol input").parentElement;if(0==t.length&&Object.keys(e).length>0){r=this.radiolistEl.shadowRoot.querySelector("ol");for(var i=0;i<Object.keys(e).length;i++){var n=document.createElement("INPUT");r.insertAdjacentElement("beforeend",n)}t=this.radiolistEl.shadowRoot.querySelectorAll("ol input")}if(r.setAttribute("class","uef-input-list"),r.setAttribute("role","radiogroup"),t.length>0)for(i=0;i<t.length;i++){var o=document.createElement("LI");t[i].insertAdjacentElement("beforebegin",o),o.setAttribute("role","application"),o.setAttribute("class","uef-radio"),o.insertAdjacentElement("afterbegin",t[i]);var l=document.createElement("DIV");if(t[i].insertAdjacentElement("afterend",l),l.setAttribute("id",this.fieldName+"-option-"+i+"-label"),l.setAttribute("class","uef-radio_label"),l.innerHTML=e[i].label,null!=e[i].support){var a=document.createElement("DIV");l.insertAdjacentElement("beforeend",a),a.setAttribute("class","uef-radio_support"),a.innerHTML=e[i].support}}var s="";null!=this.labelText&&(s+=this.fieldName+"-label "),null!=this.instructionsText&&(s+=this.fieldName+"-instructions "),null!=this.errorObject&&1==this.error&&(s=this.fieldName+"-error "+s),this.bindInputs(this.fieldName,s,this.required),UEF.forms.init()},e.prototype.componentDidUpdate=function(){document.getElementsByTagName("uef-error-summary")[0].updateErrors()},e.prototype.bindInputs=function(e,t,r){var i=this.radiolistEl.querySelectorAll("ol input");0==i.length&&(i=this.radiolistEl.shadowRoot.querySelectorAll("ol input"));for(var n=this.getJSON(this.radioObject),o=0;o<i.length;o++)i[o].setAttribute("type","radio"),i[o].setAttribute("name",e),i[o].setAttribute("id",e+"-option-"+o),i[o].setAttribute("value",n[o].value),i[o].setAttribute("required",""+r),i[o].setAttribute("aria-labelledby",t+e+"-option-"+o+"-label"),i[o].classList.add("uef-radio_control")},e.prototype.render=function(){var e=this.fieldName+"-label",r=this.fieldName+"-instructions",i="",n="",o=[],l=[this.fieldName];return null!=this.labelText&&(n+=e+" ",o=o.concat([t("uef-input-label",{required:this.required,text:this.labelText,name:e})])),null!=this.instructionsText&&(n+=r+" ",o=o.concat([t("uef-input-instructions",{instructions:this.instructionsText,name:r})])),null!=this.errorObject&&1==this.error&&(n=(i+=this.fieldName+"-error ")+n,o=o.concat([t("uef-input-error",{"error-object":this.errorObject,inputs:l})])),o=o.concat([t("slot",{name:"radiolist"},t("ol",null))]),this.bindInputs(this.fieldName,n,this.required),t("div",{class:"uef-input-group"},o)},Object.defineProperty(e,"is",{get:function(){return"uef-radiolist"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{error:{type:Boolean,attr:"error",reflectToAttr:!0,watchCallbacks:["errorHandler"]},errorObject:{type:String,attr:"error-object"},errorState:{state:!0},fieldName:{type:String,attr:"field-name"},instructionsText:{type:"Any",attr:"instructions-text"},labelText:{type:String,attr:"label-text"},radiolistEl:{elementRef:!0},radioObject:{type:String,attr:"radio-object"},required:{type:Boolean,attr:"required"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".uef-u-center.sc-uef-radiolist{float:none!important;margin-left:auto;margin-right:auto}.uef-u-clearfix.sc-uef-radiolist:after, .uef-u-clearfix.sc-uef-radiolist:before{content:\" \";display:table}.uef-u-clearfix.sc-uef-radiolist:after{clear:both}.uef-u-pull-right.sc-uef-radiolist{float:right!important}.uef-u-pull-left.sc-uef-radiolist{float:left!important}.uef-radio_control.sc-uef-radiolist, .uef-u-sr-only.sc-uef-radiolist{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.uef-u-sr-only--focusable.sc-uef-radiolist:active, .uef-u-sr-only--focusable.sc-uef-radiolist:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.uef-u-print--block.sc-uef-radiolist, .uef-u-print--inline.sc-uef-radiolist, .uef-u-print--inline-block.sc-uef-radiolist{display:none!important}\@media print{.uef-u-print--block.sc-uef-radiolist{display:block!important}.uef-u-print--inline.sc-uef-radiolist{display:inline!important}.uef-u-print--inline-block.sc-uef-radiolist{display:inline-block!important}.uef-u-print--none.sc-uef-radiolist{display:none!important}}\@media screen and (min-width:768px){.uef-u-viewport--small.sc-uef-radiolist{display:none}.uef-u-viewport--large.sc-uef-radiolist{display:inline}}\@media screen and (max-width:767px){.uef-u-viewport--small.sc-uef-radiolist{display:inline}.uef-u-viewport--large.sc-uef-radiolist{display:none}}.uef-radio.sc-uef-radiolist{background-color:#fff;border:.1rem solid #666;border-radius:.4rem;display:block;position:relative}.uef-radio_control.sc-uef-radiolist + .uef-radio_label.sc-uef-radiolist:before{background-color:#fff;border:.1rem solid #666;border-radius:50%;content:\"\";display:inline-block;position:absolute;left:1rem;top:1rem;height:2rem;width:2rem}.uef-radio_control.sc-uef-radiolist:checked + .uef-radio_label.sc-uef-radiolist:after{background-color:#05c;border:.3rem solid #fff;border-radius:50%;content:\"\";display:inline-block;position:absolute;left:1.2rem;top:1.2rem;height:1.6rem;width:1.6rem}.uef-radio_control.sc-uef-radiolist:checked + .uef-radio_label.sc-uef-radiolist:before{background-color:#05c;border-color:#05c}.uef-radio_control.sc-uef-radiolist:focus + .uef-radio_label.sc-uef-radiolist:before{border-color:#05c;-webkit-box-shadow:0 0 0 3px rgba(0,85,170,.2);box-shadow:0 0 0 3px rgba(0,85,170,.2)}.uef-radio_label.sc-uef-radiolist{display:block;cursor:pointer;min-height:4rem;padding:1rem 1.5rem 1rem 4rem}.uef-radio_support.sc-uef-radiolist{color:#666;font-weight:400}.uef-input-list.sc-uef-radiolist > .uef-radio.sc-uef-radiolist{border-bottom:0;border-radius:0}.uef-input-list.sc-uef-radiolist   .uef-radio_label.sc-uef-radiolist{border:0}.uef-input-list.sc-uef-radiolist > .uef-radio.sc-uef-radiolist:first-child{border-top:.1rem solid #666;border-top-left-radius:.4rem;border-top-right-radius:.4rem}.uef-input-list.sc-uef-radiolist > .uef-radio.sc-uef-radiolist:last-child{border-bottom:.1rem solid #666;border-bottom-left-radius:.4rem;border-bottom-right-radius:.4rem}.uef-input-list--inline.sc-uef-radiolist > .uef-radio.sc-uef-radiolist:last-child{float:left;border-bottom-left-radius:0;border-top-right-radius:.4rem}.uef-input-list--inline.sc-uef-radiolist > .uef-radio.sc-uef-radiolist:first-child{float:left;margin-right:-1px;border-bottom-left-radius:.4rem;border-bottom:.1rem solid #666;border-bottom-right-radius:0;border-top-right-radius:0}.uef-input-toggle.sc-uef-radiolist > .uef-radio.sc-uef-radiolist{border-radius:0;border-left:.1rem solid #ccc;border-right:0}.uef-input-toggle.sc-uef-radiolist > .uef-radio.sc-uef-radiolist:first-child{border-bottom-left-radius:.4rem;border-left:.1rem solid #666;border-top-left-radius:.4rem}.uef-input-toggle.sc-uef-radiolist > .uef-radio.sc-uef-radiolist:last-child{border-bottom-right-radius:.4rem;border-right:.1rem solid #666;border-top-right-radius:.4rem}"},enumerable:!0,configurable:!0}),e}();e.UefRadiolist=r,Object.defineProperty(e,"__esModule",{value:!0})});