(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{AnuO:function(t,e,n){"use strict";n.r(e);n("xi34");var s=n("q1z7"),a=n.n(s),i=n("rFsW"),o=n("ZhWy"),r=n.n(o),c=n("tZHv");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=a.a.View.extend({TEMPLATES:{404:"template-common-404","mag-suspended":"template-common-mag-suspended","user-suspended":"template-common-user-suspended","domain-error":"template-common-domain-errors"},initialize:function(t){i.a.bindAll(this),i.a.extend(this,t),this.router=this.router||RM.homepageRouter||RM.collectorRouter||RM.constructorRouter,this.template=r.a[this.TEMPLATES[this.type]],this.setElement(this.$container)},render:function(){return this.$el.html(this.template(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.templateData,{Constants:c.a}))),this.postRenderTasks(),this},postRenderTasks:function(){switch(this.type){case"domain-error":i.a.delay(i.a.bind((function(){this.$(".domain-errors").addClass("show-elements")}),this),1e3)}}});e.default=p},ZhWy:function(module,exports){module.exports={"template-common-404":function(obj){var __t,__p="",__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,"")};with(obj||{})__p+='\n    <div id="page404">\n        <table>\n            <tr>\n                <td>\n                    <div class="caption">Page Not Found.</div>\n                    <div class="message">Sorry, there’s nothing here.<br/>Visit our <a class="front-page-link" href="/">front page</a>.</div>\n                </td>\n            </tr>\n        </table>\n    </div>\n';return __p},"template-common-mag-suspended":function(obj){var __t,__p="",__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,"")};with(obj||{})__p+='\n\t<div class="magsuspended-container">\n\t\t<div class="img-preloader"></div>\n\t\t<div class="center-table">\n\t\t\t<div class="center-cell">\n\t\t\t\t<div class="center-content">\n\t\t\t\t\t<div class="caption">Suspended</div>\n\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t<div class="text">Sorry, this project has been suspended due to violation of Readymag’s <a class="link guides-link nowrap" href="https://readymag.com/readymag/terms-and-privacy/">content guidelines</a>.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<a class="link contact" href="mailto:'+(null==(__t=Constants.SUPPORT_MAIL)?"":__t)+'">Contact us</a>\n\t</div>\n';return __p},"template-common-user-suspended":function(obj){var __t,__p="",__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,"")};with(obj||{})__p+='\n\t<div class="usersuspended-container">\n\t\t<div class="img-preloader"></div>\n\t\t<div class="center-table">\n\t\t\t<div class="center-cell">\n\t\t\t\t<div class="center-content">\n\t\t\t\t\t<div class="caption">Suspended</div>\n\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t<div class="text">Sorry, this account has been suspended due to violation of Readymag’s <a class="link guides-link nowrap" href="https://readymag.com/readymag/terms-and-privacy/">content guidelines</a>.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<a class="link contact" href="mailto:'+(null==(__t=Constants.SUPPORT_MAIL)?"":__t)+'">Contact us</a>\n\t</div>\n';return __p},"template-common-domain-errors":function(obj){var __t,__p="",__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,"")};with(obj||{})__p+='\n\n\t<div class="domain-errors">\n\t\t<div class="message">\n\t\t\t',(state.magNotFound||state.domainNotFound)&&(__p+='\n\t\t\t<div class="message-caption">Website is almost here</div>\n\t\t\t\x3c!--__magterm--\x3e\n\t\t\t<div class="message-text">To complete the setup, please hit <br class="br-phone"/>the “Map Now” <br class="br-desktop"/>button in your <br class="br-phone"/>projects’s settings.</div>\n\t\t\t<a class="help-phone" href="http://help.readymag.com/hc/en-us/articles/360020588592-Domain">Need Help?</a>\n\t\t\t'),__p+="\n\t\t\t",state.magNotPublished&&(__p+='\n\t\t\t<div class="message-caption">Website is Offline</div>\n\t\t\t\x3c!--__magterm--\x3e\n\t\t\t<div class="message-text">This project has been unpublished.</div>\n\t\t\t'),__p+="\n\t\t\t",state.subscriptionExpired&&(__p+='\n\t\t\t<div class="message-caption">Website is Offline</div>\n\t\t\t<div class="message-text"><a href="'+(null==(__t=Constants.readymag_auth_host)?"":__t)+'/settings/">Log in</a> to manage your subscription.</div>\n\t\t\t'),__p+='\n\t\t</div>\n\n\t\t<a class="logo" href="'+(null==(__t=Constants.readymag_host)?"":__t)+'"></a>\n\n\t\t',(state.magNotFound||state.domainNotFound)&&(__p+='\n\t\t<a class="help" href="http://help.readymag.com/hc/en-us/articles/360020588592-Domain">Need Help?</a>\n\t\t'),__p+="\n\t</div>\n\n";return __p}}}}]);