/*! Built with http://stenciljs.com */
UefWebComponents.loadBundle("wp5rm4hf",["exports"],function(e){window.UefWebComponents.h;var t=function(){function e(){this.selected=!1}return e.prototype.componentDidLoad=function(){var e=document.createElement("option");e.text=this.label,e.value=this.value,e.selected=this.selected,this.optionEl.parentElement.insertAdjacentElement("afterbegin",e),this.optionEl.remove()},e.prototype.render=function(){return null},Object.defineProperty(e,"is",{get:function(){return"uef-option"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{label:{type:String,attr:"label"},optionEl:{elementRef:!0},selected:{type:Boolean,attr:"selected"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),e}();e.UefOption=t,Object.defineProperty(e,"__esModule",{value:!0})});