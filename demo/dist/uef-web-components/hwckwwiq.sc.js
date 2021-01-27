/*! Built with http://stenciljs.com */
const{h:e}=window.UefWebComponents;class t{render(){var t,o=(t=null==(t=this.noticeFooterEl.assignedSlot)?this.noticeFooterEl.parentElement:t.parentElement).className.replace("uef-notice","");return e("div",{class:"uef-notice_footer "+o},e("slot",null))}static get is(){return"uef-notice-footer"}static get encapsulation(){return"shadow"}static get properties(){return{noticeFooterEl:{elementRef:!0}}}static get style(){return".uef-u-center.sc-uef-notice-footer{float:none!important;margin-left:auto;margin-right:auto}.uef-u-clearfix.sc-uef-notice-footer:after, .uef-u-clearfix.sc-uef-notice-footer:before{content:\" \";display:table}.uef-u-clearfix.sc-uef-notice-footer:after{clear:both}.uef-u-pull-right.sc-uef-notice-footer{float:right!important}.uef-u-pull-left.sc-uef-notice-footer{float:left!important}.uef-u-sr-only.sc-uef-notice-footer{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.uef-u-sr-only--focusable.sc-uef-notice-footer:active, .uef-u-sr-only--focusable.sc-uef-notice-footer:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.uef-u-print--block.sc-uef-notice-footer, .uef-u-print--inline.sc-uef-notice-footer, .uef-u-print--inline-block.sc-uef-notice-footer{display:none!important}\@media print{.uef-u-print--block.sc-uef-notice-footer{display:block!important}.uef-u-print--inline.sc-uef-notice-footer{display:inline!important}.uef-u-print--inline-block.sc-uef-notice-footer{display:inline-block!important}.uef-u-print--none.sc-uef-notice-footer{display:none!important}}\@media screen and (min-width:768px){.uef-u-viewport--small.sc-uef-notice-footer{display:none}.uef-u-viewport--large.sc-uef-notice-footer{display:inline}}\@media screen and (max-width:767px){.uef-u-viewport--small.sc-uef-notice-footer{display:inline}.uef-u-viewport--large.sc-uef-notice-footer{display:none}}.uef-notice.sc-uef-notice-footer{position:relative;border:.1rem solid #222;border-radius:1rem;margin-bottom:1.6rem;padding:1rem 1rem 1rem 5rem}.uef-notice_icon.sc-uef-notice-footer{position:absolute;top:1.5rem}.uef-notice_icon.sc-uef-notice-footer:before{display:block;position:absolute;left:-4rem;width:3rem;height:3rem;border-radius:1.5rem;content:\"\"}.uef-notice_icon.sc-uef-notice-footer:after{position:absolute;font-weight:700;color:#fff}.uef-notice_content.sc-uef-notice-footer{margin-bottom:1rem}.uef-notice_re-entry-number.sc-uef-notice-footer{font-size:2.6rem;line-height:2.6rem;font-weight:700;word-break:break-all}.uef-notice_re-entry-website.sc-uef-notice-footer{font-weight:700;word-break:break-all}.uef-notice_footer.sc-uef-notice-footer{margin-right:-1rem;margin-left:-5rem;padding-top:1rem;padding-left:5rem;border-top:.1rem solid #222}.uef-notice_footer--re-entry.sc-uef-notice-footer{margin-left:-5rem;padding-left:1rem;padding-right:1rem;border-top:.1rem solid #222}.uef-notice_title.sc-uef-notice-footer{margin:1rem 0 0;line-height:1.2;font-size:1.6rem;font-weight:700}.uef-notice_title.uef-notice_title--dismissible.sc-uef-notice-footer{margin-right:2rem}.uef-notice--compact.sc-uef-notice-footer   .uef-notice_title.sc-uef-notice-footer{font-weight:400;margin-top:.4rem}.uef-notice.uef--danger.sc-uef-notice-footer{background-color:#fdd;border-color:#c00}.uef-notice_icon.uef--danger.sc-uef-notice-footer:before{background-color:#c00}.uef-notice_icon.uef--danger.sc-uef-notice-footer:after{content:\"×\";font-size:2.25rem;left:-3.15rem;top:-.15rem}.uef-notice--compact.sc-uef-notice-footer   .uef--danger.sc-uef-notice-footer:after{font-size:1.3rem;left:-1.6rem}.uef-notice.uef--danger.sc-uef-notice-footer > .uef-notice_footer.sc-uef-notice-footer, .uef-notice_footer.uef--danger.sc-uef-notice-footer{border-top-color:#c00}.uef-notice.uef--error.sc-uef-notice-footer{background-color:#fdd;border-color:#c00}.uef-notice_icon.uef--error.sc-uef-notice-footer:before{background-color:#c00}.uef-notice_icon.uef--error.sc-uef-notice-footer:after{content:\"×\";font-size:2.25rem;left:-3.15rem;top:-.15rem}.uef-notice_error-list.sc-uef-notice-footer{padding-left:2rem}.uef-notice.uef--info.sc-uef-notice-footer{background-color:#dff;border-color:#05c}.uef-notice_icon.uef--info.sc-uef-notice-footer:before{background-color:#05c}.uef-notice_icon.uef--info.sc-uef-notice-footer:after{content:\"i\";font-family:monospace;font-size:2rem;left:-3.1rem}.uef-notice--compact.sc-uef-notice-footer   .uef--info.sc-uef-notice-footer:after{left:-1.6rem;top:-.3rem;font-size:1.5rem}.uef-notice.uef--info.sc-uef-notice-footer > .uef-notice_footer.sc-uef-notice-footer, .uef-notice_footer.uef--info.sc-uef-notice-footer{border-top-color:#05c}.uef-notice--re-entry.sc-uef-notice-footer{background-color:#dff;border-color:#05c}.uef-notice_icon--re-entry.sc-uef-notice-footer:before{background-color:#05c}.uef-notice_icon--re-entry.sc-uef-notice-footer:after{content:\"i\";font-family:monospace;font-size:2rem;left:-3.1rem}.uef-notice--re-entry.sc-uef-notice-footer > .uef-notice_footer.sc-uef-notice-footer{border-top-color:#05c}.uef-notice.uef--success.sc-uef-notice-footer{background-color:#dfd;border-color:#070}.uef-notice_icon.uef--success.sc-uef-notice-footer:before{background-color:#070}.uef-notice_icon.uef--success.sc-uef-notice-footer:after{left:-3rem;top:.65rem;height:14px;width:9px;border-bottom:.4rem solid;border-right:.4rem solid;content:\"\";-webkit-transform:rotate(45deg);transform:rotate(45deg)}.uef-notice--compact.sc-uef-notice-footer   .uef-notice_icon.uef--success.sc-uef-notice-footer:after{left:-1.5rem;top:.25rem;height:9px;width:5px;border-bottom:.2rem solid;border-right:.2rem solid}.uef-notice.uef--success.sc-uef-notice-footer > .uef-notice_footer.sc-uef-notice-footer, .uef-notice_footer.uef--success.sc-uef-notice-footer{border-top-color:#070}.uef-notice.uef--warning.sc-uef-notice-footer{background-color:#ffd;border-color:#a40}.uef-notice.uef--warning.sc-uef-notice-footer > .uef-notice_footer.sc-uef-notice-footer, .uef-notice_footer.uef--warning.sc-uef-notice-footer{border-top-color:#a40}.uef-notice_icon.uef--warning.sc-uef-notice-footer:before{background-color:#a40}.uef-notice_icon.uef--warning.sc-uef-notice-footer:after{content:\"!\";font-family:monospace;font-size:2.5rem;left:-3.2rem;top:-.3rem}.uef-notice--compact.sc-uef-notice-footer   .uef--warning.sc-uef-notice-footer:after{left:-1.65rem;top:-.3rem;font-size:1.5rem}.uef-notice--compact.sc-uef-notice-footer   .uef-notice_icon.sc-uef-notice-footer:before{left:-2rem;width:1.6rem;height:1.6rem;border-radius:.8rem}.uef-notice.uef-notice--compact.sc-uef-notice-footer{border-color:transparent;padding-left:3rem}.uef-notice--compact.sc-uef-notice-footer   .uef-close-control.sc-uef-notice-footer{top:1.5rem}.uef-notice.sc-uef-notice-footer   .sc-uef-notice-footer:last-child, .uef-notice--compact.sc-uef-notice-footer   .sc-uef-notice-footer:first-child{margin-bottom:0}.uef-optional-info.sc-uef-notice-footer, .uef-required-info.sc-uef-notice-footer{font-size:1.5rem}.uef-required-info_icon.sc-uef-notice-footer:before{content:\"*\";display:inline-block;vertical-align:text-top;text-align:right;border:0;color:#c00;cursor:default;width:1rem;margin-left:-1rem;padding-top:.2rem;padding-right:.2rem;line-height:.8rem;font-style:normal;font-weight:700;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}"}}export{t as UefNoticeFooter};