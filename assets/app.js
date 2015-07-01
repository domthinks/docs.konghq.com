"use strict";$(function(){var t=$(window),e=$("#documentation");if($(".navbar-toggle").on("click",function(){var t=$($(this).data("target"));t.slideToggle(150)}),$(".scroll-to").on("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-70},700)}),!$("body#enterprise").length){var n=$(".section.intro-section").outerHeight()||50,i=$(".navbar-nav").find(".button");t.on("scroll",function(){var t=$(this).scrollTop();t>n?i.removeClass("button-dark").addClass("button-primary"):i.removeClass("button-primary").addClass("button-dark")})}$(".toggle-page-section").on("click",function(t){t.preventDefault();var e=$(this);e.parent().next(".page-section").stop().slideToggle(300,function(){e.toggleClass("active")})});var o=$(".tab-list li"),a=$(".tab-pane");if(o.on("click",function(t,e){t.preventDefault();var n=$(this).find("a").attr("href");o.removeClass("active").filter(this).addClass("active"),a.removeClass("active").filter(n).addClass("active"),history.pushState?history.pushState(null,null,n):window.location.hash=n,e||analytics.track("Choose installation method",{installationMethod:n.substr(1)})}),window.location.hash&&o.find('a[href="'+window.location.hash+'"]').trigger("click",!0),$(".subscribe-form").on("submit",function(t){t.preventDefault();var e=$(this),n=e.find('[name="email"]').val(),i=(new Date).toString();e.fadeOut(300,function(){$(".loader").fadeIn(300)}),analytics.identify(n,{email:n,environment:"kong",newsletter_updates:!0,created_at:i},function(){e.fadeOut(300,function(){$(".loader").fadeOut(300,function(){$(".success-message").fadeIn(300)})}),analytics.track("request_newsletter_updates",{email:n,request_date:i})})}),$(".demo-request-form").on("submit",function(t){t.preventDefault();var e=$(this),n=e.serializeArray(),i=(new Date).toString(),o={},a=$.Deferred(),s={},r={title:8,tell_us_more:6,email:7,phone:9,deployment:14,company:10,name:13,environment:16};e.fadeOut(300,function(){$(".loader").fadeIn(300)}).siblings(".section-header").fadeOut(300);for(var f=0;f<n.length;f++)o[n[f].name]=n[f].value;o.environment="kong",analytics.identify(o.email,$.extend({enterprise:!0,created_at:i},o),function(){analytics.track("request_enterprise_demo",$.extend({request_date:i},o),a.resolve)});for(var l in o)o[l]&&(s[r[l]]=[{raw:o[l]}]);var c=$.ajax({url:"https://mashaper-relateiq-v1.p.mashape.com/accounts",method:"POST",headers:{authorization:"Basic NTU2ZDcxYzdlNGIwMmM5ZTM3YjgxNzc1Ok9NbFNBVGM1QkFTOG1JbEtXZENMZFZ2Z3RqYQ==","x-mashape-key":"mJUINHSWBYmshREqNlfTBKtbBHDZp1N7VKhjsnUIUo4f4r3pVj"},data:JSON.stringify({name:o.email,fieldValues:s})});$.when.apply($,[a,c]).then(function(){$(".loader").fadeOut(300,function(){$(".success-message").fadeIn(300)})})}),e.length){var s=e.find(".page-navigation"),r=e.find(".page-content"),f=s.find("a"),l=s.find("nav:last"),c=window.location.hash,d=function(){f.removeClass("active").filter(this).addClass("active")};c&&f.each(function(){-1!==$(this).attr("href").indexOf(c)&&d.call(this)}),f.on("click",d),r.height()>s.height()&&l.affix({offset:{top:function(){return this.top=l.offset().top-70,this.top},bottom:function(){return this.bottom=$(".footer").outerHeight(!0)+50,this.bottom}}})}$('[href^="/download"]').each(function(){var t=$(this);analytics.trackLink(this,"Clicked download",{section:t.closest(".navbar").length?"header":"page",pathname:window.location.pathname,type:t.hasClass("button")?"button":"link"})}),analytics.track("Viewed "+$.trim(document.title.split("|").shift())+" page"),$(".plugin-plate-link").each(function(){analytics.trackLink(this,"Click on plugin",{plugin_type:$(this).closest(".plugin-plate").find("h3").text()})}),$("#documentation .page-navigation a").each(function(){analytics.trackLink(this,"Click documentation link",{documentation_name:$(this).text()})}),$(".community-plate a").each(function(){analytics.trackLink(this,"Click community link",{community_type:$.trim($(this).closest(".community-plate").find("h4").text())})}),analytics.trackLink($('a[href="#comparison"]')[0],"Clicked Why Kong")})+function(t){function e(e){var n=e.attr("data-target");n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var i=n&&t(n);return i&&i.length?i:e.parent()}function n(n){n&&3===n.which||(t(o).remove(),t(a).each(function(){var i=t(this),o=e(i),a={relatedTarget:this};o.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&t.contains(o[0],n.target)||(o.trigger(n=t.Event("hide.bs.dropdown",a)),n.isDefaultPrevented()||(i.attr("aria-expanded","false"),o.removeClass("open").trigger("hidden.bs.dropdown",a))))}))}function i(e){return this.each(function(){var n=t(this),i=n.data("bs.dropdown");i||n.data("bs.dropdown",i=new s(this)),"string"==typeof e&&i[e].call(n)})}var o=".dropdown-backdrop",a='[data-toggle="dropdown"]',s=function(e){t(e).on("click.bs.dropdown",this.toggle)};s.VERSION="3.3.5",s.prototype.toggle=function(i){var o=t(this);if(!o.is(".disabled, :disabled")){var a=e(o),s=a.hasClass("open");if(n(),!s){"ontouchstart"in document.documentElement&&!a.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",n);var r={relatedTarget:this};if(a.trigger(i=t.Event("show.bs.dropdown",r)),i.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),a.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},s.prototype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){var i=t(this);if(n.preventDefault(),n.stopPropagation(),!i.is(".disabled, :disabled")){var o=e(i),s=o.hasClass("open");if(!s&&27!=n.which||s&&27==n.which)return 27==n.which&&o.find(a).trigger("focus"),i.trigger("click");var r=" li:not(.disabled):visible a",f=o.find(".dropdown-menu"+r);if(f.length){var l=f.index(n.target);38==n.which&&l>0&&l--,40==n.which&&l<f.length-1&&l++,~l||(l=0),f.eq(l).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=i,t.fn.dropdown.Constructor=s,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",a,s.prototype.toggle).on("keydown.bs.dropdown.data-api",a,s.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",s.prototype.keydown)}(jQuery),+function(t){function e(e){return this.each(function(){var i=t(this),o=i.data("bs.affix"),a="object"==typeof e&&e;o||i.data("bs.affix",o=new n(this,a)),"string"==typeof e&&o[e]()})}var n=function(e,i){this.options=t.extend({},n.DEFAULTS,i),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};n.VERSION="3.3.5",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getState=function(t,e,n,i){var o=this.$target.scrollTop(),a=this.$element.offset(),s=this.$target.height();if(null!=n&&"top"==this.affixed)return n>o?"top":!1;if("bottom"==this.affixed)return null!=n?o+this.unpin<=a.top?!1:"bottom":t-i>=o+s?!1:"bottom";var r=null==this.affixed,f=r?o:a.top,l=r?s:e;return null!=n&&n>=o?"top":null!=i&&f+l>=t-i?"bottom":!1},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(n.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},n.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),i=this.options.offset,o=i.top,a=i.bottom,s=Math.max(t(document).height(),t(document.body).height());"object"!=typeof i&&(a=o=i),"function"==typeof o&&(o=i.top(this.$element)),"function"==typeof a&&(a=i.bottom(this.$element));var r=this.getState(s,e,o,a);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var f="affix"+(r?"-"+r:""),l=t.Event(f+".bs.affix");if(this.$element.trigger(l),l.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(f).trigger(f.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:s-e-a})}};var i=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=n,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var n=t(this),i=n.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),e.call(n,i)})})}(jQuery);
//# sourceMappingURL=maps/app.js.map