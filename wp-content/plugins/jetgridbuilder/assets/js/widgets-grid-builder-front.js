!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=97)}([function(t,e){t.exports=function(t,e,n,i,r,o){var a,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r);var l;if(o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=i),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(t,e){return l.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:s,options:c}}},function(t,e,n){"use strict";function i(t,e){function n(){r++,i==r&&e(t)}var i=0,r=0;t.forEach(function(e,r){if(e.thumbnail_data&&e.thumbnail_data.file){var o=new Image;i++,o.src=e.thumbnail_data.file,o.onload=function(){n()},o.onerror=function(){t[r].thumbnail_data=!1,n()}}}),0===i&&e(t)}function r(t){var e=void 0,n=void 0,i=void 0;e=Array.isArray(t)?[]:{};for(i in t)n=t[i],e[i]="object"===(void 0===n?"undefined":l(n))?r(n):n;return e}function o(t,e){var n=t.indexOf(e);return n>-1&&t.splice(n,1),t}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"thumbnail";return t[e]?t[e]:!!t.full&&t.full}function s(t){if("boolean"==typeof t)return t;switch(t.toLowerCase().trim()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(t)}}function u(t){var e=Array.from(arguments).splice(1),n=!0,i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done);i=!0){var u=a.value;if(!t[u]){n=!1;break}t=t[u]}}catch(t){r=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw o}}return!!n&&t}function c(t){if("string"!=typeof t)return t;var e={"&amp;":"&","&#038;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#039;":"'","&#8217;":"’","&#8216;":"‘","&#8211;":"–","&#8212;":"—","&#8230;":"…","&#8221;":"”"};return t.replace(/\&[\w\d\#]{2,5}\;/g,function(t){return e[t]})}e.e=i,e.a=r,e.f=o,e.c=a,e.g=s,e.d=u,e.b=c;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}},function(t,e,n){"use strict";e.a={getPosts:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=window.jgbSettings.api.endpoints.Posts;jQuery.get(i,t).done(function(t){e(t)}).fail(function(t){console.error(t),"function"==typeof n&&n(t)})},getAllPostTypes:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=window.jgbSettings.api.endpoints.PostTypes;jQuery.get(n,{}).done(function(e){t(e)}).fail(function(t){console.error(t),"function"==typeof e&&e(t)})},getTerms:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=window.jgbSettings.api.endpoints.TaxonomyTerms;jQuery.get(i,t).done(function(t){e(t)}).fail(function(t){console.error(t),"function"==typeof n&&n(t)})},getTaxonomies:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=window.jgbSettings.api.endpoints.Taxonomies;jQuery.get(n,{}).done(function(e){t(e)}).fail(function(t){console.error(t),"function"==typeof e&&e(t)})}}},function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"updateBoxLayout",function(){return o}),n.d(e,"updateBoxPosition",function(){return a}),n.d(e,"positionsAreColliding",function(){return s}),n.d(e,"isFree",function(){return u}),n.d(e,"bubbleUp",function(){return c}),n.d(e,"moveBoxToFreePlace",function(){return l}),n.d(e,"sortLayout",function(){return d}),n.d(e,"layoutBubbleUp",function(){return f}),n.d(e,"positionToPixels",function(){return p}),n.d(e,"getLayoutSize",function(){return h}),n.d(e,"matchesSelector",function(){return m}),n.d(e,"layoutHasCollisions",function(){return g}),n.d(e,"fixLayout",function(){return _});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(t,e){return r({},t,e)},a=function(t,e){return o(t,{position:r({},t.position,e)})},s=function(t,e){return t.x<e.x+e.w&&t.x+t.w>e.x&&t.y<e.y+e.h&&t.y+t.h>e.y},u=function(t,e){for(var n=0;n<t.length;n++)if(s(t[n].position,e))return!1;return!0},c=function(t,e){do{e=a(e,{y:e.position.y-1})}while(u(t,e.position)&&e.position.y>=0);return a(e,{y:e.position.y+1})},l=function(t,e,n){for(n&&(e=c(t,e));!u(t,e.position);)e=a(e,{y:e.position.y+1});return e},d=function(t){return[].concat(i(t)).sort(function(t,e){return t.hidden&&!e.hidden?1:!t.hidden&&e.hidden?-1:t.pinned&&!e.pinned?-1:!t.pinned&&e.pinned?1:t.position.y<e.position.y?-1:t.position.y>e.position.y?1:t.position.x<e.position.x?-1:t.position.x>e.position.x?1:0})},f=function(t){t=d(t);var e=[];return t.forEach(function(t){e.push(c(e,t))}),e},p=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{x:Math.round(t.x*e.w+t.x*n+i),y:Math.round(t.y*e.h+t.y*n+i),w:Math.round(t.w*e.w+(t.w-1)*n),h:Math.round(t.h*e.h+(t.h-1)*n)}},h=function(t){return{w:t.reduce(function(t,e){return e.hidden?t:Math.max(t,e.position.x+e.position.w)},0),h:t.reduce(function(t,e){return e.hidden?t:Math.max(t,e.position.y+e.position.h)},0)}},m=function(t,e){var n=Element.prototype;return(n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(t){return-1!==[].indexOf.call(document.querySelectorAll(t),this)}).call(t,e)},g=function(t){for(var e=0;e<t.length;e++)for(var n=e+1;n<t.length;n++)if(s(t[e].position,t[n].position))return!0;return!1},_=function(t,e){t=d(t);var n=[];return t.forEach(function(t){n.push(l(n,t,e))}),n}},function(t,e,n){"use strict";var i=n(1),r=n(15),o=n(17),a=n(19),s=n(21),u=n(23),c=n(25),l=n(27);e.a={props:{itemData:{type:Object,required:!0}},data:function(){return{component:null}},created:function(){this.component=Vue.component("item-comp",{template:this.getTemplate(),components:{itemThumbnail:r.a,itemDescription:o.a,productCategories:a.a,productStarsRating:s.a,productPrice:u.a,productAddToCart:c.a,termDescription:l.a},props:["itemData"],computed:{layout:function(){return this.getSetting("layout")},thumbnailEnabled:function(){return!!this.getSetting("item_thumbnail")&&!!this.itemData.thumbnail_data.file},postTypeEnabled:function(){return this.getSetting("item_post_type")},titleEnabled:function(){return this.getSetting("item_title")},descriptionEnabled:function(){return this.getSetting("item_description")},authorEnabled:function(){return this.getSetting("item_post_author")},authorPrefix:function(){return Object(i.b)(this.getSetting("item_post_author_prefix"))},dateEnabled:function(){return this.getSetting("item_post_date")},datePrefix:function(){return Object(i.b)(this.getSetting("item_post_date_prefix"))},dividerEnabled:function(){return this.getSetting("item_divider")},productStarsRatingEnabled:function(){return this.getSetting("woocommerce_item_stars_rating")},productCategoriesEnabled:function(){return this.getSetting("woocommerce_item_categories")},productAddToCartEnabled:function(){return this.getSetting("woocommerce_item_add_to_cart")},productPriceEnabled:function(){return this.getSetting("woocommerce_item_price")},termTaxonomyEnabled:function(){return this.getSetting("item_term_taxonomy")},termPostsCountEnabled:function(){return this.getSetting("item_post_count")},termPostsCountPrefix:function(){return this.getSetting("item_posts_count_prefix")}},methods:{getSetting:function(t){return this.$root.$children[0].getSettingValue(t)},getResponsiveSetting:function(t){return this.$root.$children[0].getResponsiveSettingValue(t)},isTrue:function(t){return Object(i.g)(t)}}})},methods:{getTemplate:function(){return this.itemData.is_woocommerce?jQuery(this.$root.$el).siblings(".jgb_woocommerce-item-template").get(0):jQuery(this.$root.$el).siblings(".jgb_item-template").get(0)}}}},function(t,e,n){"use strict";e.a={props:{link:{type:Boolean,default:!1}},computed:{thumbnailComponent:function(){return this.link?"link-thumbnail":"default-thumbnail"},thumbnailStyle:function(){var t={backgroundImage:"url("+this.thumbnailData.file+")"};return["masonry","justified"].includes(this.layout)&&(t.paddingBottom=Math.round(this.thumbnailData.height/this.thumbnailData.width*100*10)/10+"%"),t}},data:function(){return{defaultThumbnailComponent:null,linkThumbnailComponent:null,layout:this.$parent.layout,thumbnailData:this.$parent.itemData.thumbnail_data}},created:function(){this.defaultThumbnailComponent=Vue.component("default-thumbnail",{template:'<div class="jgb_item-thumb"></div>'}),this.linkThumbnailComponent=Vue.component("link-thumbnail",{template:'<a href="#" class="jgb_item-thumb"></a>'})}}},function(t,e,n){"use strict";var i=n(7),r=n.n(i);e.a={filters:r.a,computed:{wordsCount:function(){return this.$parent.getResponsiveSetting("item_description_words_count")},description:function(){var t="";switch(this.$parent.getSetting("item_description")){case"auto":t=this.$parent.itemData.post_excerpt?this.$parent.itemData.post_excerpt:this.$parent.itemData.post_content;break;case"content":t=this.$parent.itemData.post_content;break;case"excerpt":t=this.$parent.itemData.post_excerpt}return t}}}},function(t,e){t.exports={limitation:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return t.split(/\s+/,e+1).length>=e+1&&(t=t.split(/\s+/,e).join(" ")+"..."),t}}},function(t,e,n){"use strict";e.a={data:function(){return{categoriesData:this.$parent.itemData.woocommerce_product_cat}}}},function(t,e,n){"use strict";e.a={data:function(){return{starsCount:5,ratingCount:parseInt(this.$parent.itemData.woocommerce_rating_count),averageRating:parseFloat(this.$parent.itemData.woocommerce_average_rating)}},methods:{getStarsData:function(){for(var t=[],e=0;e<this.starsCount;e++){var n="empty",i=Math.round(100*(this.averageRating-e))/100;i>.7?n="full":i>=.3&&(n="half"),t.push(n)}return t}}}},function(t,e,n){"use strict";e.a={data:function(){return{priceHTML:this.$parent.itemData.woocommerce_price}}}},function(t,e,n){"use strict";var i=n(1);e.a={computed:{addToCartText:function(){return Object(i.b)(this.$parent.getSetting("woocommerce_item_add_to_cart_text"))}},data:function(){return{productId:this.$parent.itemData.id,addToCartUrl:this.$parent.itemData.woocommerce_add_to_cart_url}}}},function(t,e,n){"use strict";var i=n(7),r=n.n(i);e.a={filters:r.a,computed:{wordsCount:function(){return this.$parent.getResponsiveSetting("item_description_words_count")},description:function(){return this.$parent.itemData.term_description}}}},,function(t,e,n){"use strict";var i=n(4),r=n(29),o=n(0),a=o(i.a,r.a,!1,null,null,null);e.a=a.exports},function(t,e,n){"use strict";var i=n(5),r=n(16),o=n(0),a=o(i.a,r.a,!1,null,null,null);e.a=a.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.thumbnailComponent,{tag:"component",style:t.thumbnailStyle})},r=[],o={render:i,staticRenderFns:r};e.a=o},function(t,e,n){"use strict";var i=n(6),r=n(18),o=n(0),a=o(i.a,r.a,!1,null,null,null);e.a=a.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.wordsCount>0&&t.description?n("div",{staticClass:"jgb_item-description",domProps:{innerHTML:t._s(t.$options.filters.limitation(t.description,t.wordsCount))}}):t._e()},r=[],o={render:i,staticRenderFns:r};e.a=o},function(t,e,n){"use strict";var i=n(8),r=n(20),o=n(0),a=o(i.a,r.a,!1,null,null,null);e.a=a.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.categoriesData?n("div",{staticClass:"jgb_product-categories"},t._l(t.categoriesData,function(e){return n("a",{key:e.term_id,staticClass:"jgb_product-category",attrs:{href:e.permalink}},[t._v("\n\t\t"+t._s(e.name)+"\n\t")])})):t._e()},r=[],o={render:i,staticRenderFns:r};e.a=o},function(t,e,n){"use strict";var i=n(9),r=n(22),o=n(0),a=o(i.a,r.a,!1,null,null,null);e.a=a.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ratingCount?n("div",{staticClass:"jgb_product-stars-rating"},t._l(t.getStarsData(),function(t){return n("div",{staticClass:"jgb_product-stars-rating-star",class:"jgb_star-"+t})})):t._e()},r=[],o={render:i,staticRenderFns:r};e.a=o},function(t,e,n){"use strict";var i=n(10),r=n(24),o=n(0),a=o(i.a,r.a,!1,null,null,null);e.a=a.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.priceHTML?n("div",{staticClass:"jgb_product-price",domProps:{innerHTML:t._s(t.priceHTML)}}):t._e()},r=[],o={render:i,staticRenderFns:r};e.a=o},function(t,e,n){"use strict";var i=n(11),r=n(26),o=n(0),a=o(i.a,r.a,!1,null,null,null);e.a=a.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jgb_product-add-to-cart"},[n("a",{staticClass:"add_to_cart_button ajax_add_to_cart",attrs:{"data-quantity":"1","data-product_id":t.productId,href:t.addToCartUrl}},[n("span",{staticClass:"add_to_cart_button_text"},[t._v(t._s(t.addToCartText))])])])},r=[],o={render:i,staticRenderFns:r};e.a=o},function(t,e,n){"use strict";var i=n(12),r=n(28),o=n(0),a=o(i.a,r.a,!1,null,null,null);e.a=a.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.wordsCount>0&&t.description?n("div",{staticClass:"jgb_item-description",domProps:{innerHTML:t._s(t.$options.filters.limitation(t.description,t.wordsCount))}}):t._e()},r=[],o={render:i,staticRenderFns:r};e.a=o},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jgb_item-container",class:t.itemData.class},[t.component?n(t.component,{tag:"component",attrs:{itemData:t.itemData}}):t._e()],1)},r=[],o={render:i,staticRenderFns:r};e.a=o},function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r=n(1),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};e.a={data:function(){return{breakpoints:{desktop:1/0,tablet:Object(r.d)(window,"elementorFrontend","config","breakpoints","lg")||1025,mobile:Object(r.d)(window,"elementorFrontend","config","breakpoints","md")||768},currentBreakpoint:"",breakpointsNames:["desktop","tablet","mobile"],clientWidth:0}},mounted:function(){var t=this;this.breakpointsNames=Object.keys(this.breakpoints).sort(function(e,n){return t.breakpoints[e]+t.breakpoints[n]}),window.addEventListener("resize",this.resizeFrame),this.resizeUpdate()},methods:{getBreakpointPostfix:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=t||this.currentBreakpoint;return"desktop"!==e?"_"+e:""},createLayoutBreakpoint:function(t){this.layoutData=Object.assign(i({},this.currentBreakpoint,t),this.layoutData)},removeLayoutBreakpoint:function(){var t=this;this.layoutData=Object.keys(this.layoutData).reduce(function(e,n){return n!==t.currentBreakpoint?o({},e,i({},n,t.layoutData[n])):e},{}),this.updateOption("layout_data"+this.getBreakpointPostfix(this.currentBreakpoint),"")},setCurrentBreakpoint:function(){var t=this;if(this.$root.breakpointsDisabled)return void(this.currentBreakpoint="desktop");var e=void 0;this.breakpointsNames.forEach(function(n){window.innerWidth<t.breakpoints[n]&&(e=n)}),this.currentBreakpoint=e},resizeFrame:function(){window.requestAnimationFrame(this.resizeUpdate)},resizeUpdate:function(){this.clientWidth=this.$el.clientWidth,this.setCurrentBreakpoint(),"function"==typeof this.onResize&&this.onResize()}}}},function(t,e,n){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.a={methods:{getSettingValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.$root.settings[t];return e&&"object"===(void 0===n?"undefined":i(n))&&(n=n[e]),n},getResponsiveSettingValue:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=!1,r=this.breakpointsNames.indexOf(this.currentBreakpoint);return~r&&this.breakpointsNames.slice(0,r+1).forEach(function(r){var o=e.getSettingValue(t+e.getBreakpointPostfix(r),n);if(o||0===o)return void(i=o)}),i},eachResponsiveSetting:function(t,e){var n=this;this.breakpointsNames.forEach(function(i){var r=n.getSettingValue(t+n.getBreakpointPostfix(i));r&&e(r,i)})},showSpinnerUntilMediaLoads:function(){return"default"===this.getSettingValue("items_type")&&"true"===this.getSettingValue("loading_spinner")&&"true"===this.getSettingValue("loading_spinner_media")}}}},function(t,e,n){"use strict";var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};e.a={data:function(){return{isRTL:document.body.classList.contains("rtl"),layoutData:{desktop:[]}}},computed:{layout:function(){return this.layoutData[this.availableBreakpoint]||[]},layoutMap:function(){var t=new Map;return this.layout.forEach(function(e){t.set(e.id,e)}),t},availableBreakpoint:function(){var t=this,e=this.breakpointsNames.slice(-1)[0],n=this.breakpointsNames.indexOf(this.currentBreakpoint);return this.breakpointsNames.slice(0,n+1).forEach(function(n){if(t.layoutData[n])return void(e=n)}),e},layoutBreakpointEnabled:function(){return!!this.layoutData[this.currentBreakpoint]},colNum:function(){return this.getSettingValue("colNum")},gutter:function(){return this.getResponsiveSettingValue("gutter")},cellSize:function(){var t=(this.clientWidth-this.gutter*(this.colNum-1))/this.colNum;return{w:t,h:t}}},mounted:function(){this.initLayout()},methods:{initLayout:function(){var t={desktop:[]};this.eachResponsiveSetting("layout_data",function(e,n){var i=JSON.parse(e);t[n]=i}),this.layoutData=t},getRequestArgs:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i({},t),n=this.getSettingValue("item_post_date_format"),r=this.getSettingValue("item_thumbnail_size"),o=this.getSettingValue("items_type"),a=this.getSettingValue("woo_items_type"),s=this.getSettingValue("jetengine_listing_id"),u=this.getSettingValue("jet_woo_builder_archive_id");return n&&(e.date_format=n),r&&(e.thumbnail_size=r),o&&(e.items_type=o),a&&(e.woo_items_type=a),s&&(e.jetengine_listing_id=s),u&&(e.jet_woo_builder_archive_id=u),e},"applyСustomMethods":function(){if("jetengine_listing"===this.getSettingValue("items_type")){if(!window.JetEngine)return;window.JetEngine.widgetDynamicField(jQuery(this.$el))}}}}},,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var i=n(2),r=n(50);e.a={mixins:[r.a],methods:{loadContent:function(){var t=this,e=this.getSettingValue("posts");if(!e)return this.loaded=!0,void this.removePreloader();var n=this.getRequestArgs({post_type:"any",post__in:e});i.a.getPosts(n,function(e){t.contentLoaded(e.posts)})}}}},function(t,e,n){"use strict";var i=n(3),r=n(1),o=n(14),a=n(30),s=n(31),u=n(32),c={};e.a={mixins:[a.a,s.a,u.a],components:{item:o.a,box:c},data:function(){return{loaded:!1,items:[]}},computed:{containerStyle:function(){var t=Object(i.getLayoutSize)(this.layout);return{minHeight:t.h*this.cellSize.h+(t.h-1)*this.gutter+"px"}}},mounted:function(){this.loadContent()},methods:{contentLoaded:function(t){var e=this;this.showSpinnerUntilMediaLoads()?Object(r.e)(t,function(t){e.initItems(t)}):this.initItems(t)},initItems:function(t){this.items=t,this.loaded=!0,this.removePreloader(),this.$nextTick(this.applyСustomMethods)},removePreloader:function(){var t=this.$el.parentElement.querySelector(".jgb_spinner");t&&t.remove()},getPixelPositionById:function(t){var e=this.layoutMap.get(t);return Object(i.positionToPixels)(e.position,this.cellSize,this.gutter)}}},c.template='<div :style="style"><slot></slot></div>',c.props={boxId:{required:!0}},c.computed={style:function(){var t=this.$parent.getPixelPositionById(this.boxId);return this.$parent.isRTL&&(t.x=-1*t.x),{width:t.w+"px",height:t.h+"px",transform:"translate("+t.x+"px, "+t.y+"px)"}}}},function(t,e,n){"use strict";var i=n(2),r=n(50);e.a={mixins:[r.a],methods:{loadContent:function(){var t=this,e=this.getSettingValue("terms");if(!e)return this.loaded=!0,void this.removePreloader();var n=this.getRequestArgs({taxonomy:"any",include:e});i.a.getTerms(n,function(e){t.contentLoaded(e.terms)})}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var i=n(49),r=n(83),o=n(0),a=o(i.a,r.a,!1,null,null,null);e.a=a.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jgb_grid-builder jgb_grid-builder-posts",class:{jgb_loading:!t.loaded}},[n("div",{staticClass:"jgb_grid-container",style:t.containerStyle},t._l(t.items,function(t){return n("box",{key:t.id,staticClass:"jgb_grid-box",attrs:{boxId:t.id}},[n("item",{attrs:{itemData:t}})],1)}))])},r=[],o={render:i,staticRenderFns:r};e.a=o},function(t,e,n){"use strict";var i=n(51),r=n(85),o=n(0),a=o(i.a,r.a,!1,null,null,null);e.a=a.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jgb_grid-builder jgb_grid-builder-terms",class:{jgb_loading:!t.loaded}},[n("div",{staticClass:"jgb_grid-container",style:t.containerStyle},t._l(t.items,function(t){return n("box",{key:t.id,staticClass:"jgb_grid-box",attrs:{boxId:t.id}},[n("item",{attrs:{itemData:t}})],1)}))])},r=[],o={render:i,staticRenderFns:r};e.a=o},,,,,,,,,,,,function(t,e,n){n(98),n(99)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(82);!function(t){var e=function(){elementorFrontend.hooks.addAction("frontend/element_ready/posts-grid-builder.default",function(t){var e=t.find(".posts-grid-builder"),n=e.data("settings");new Vue({el:e.get(0),data:{settings:n},render:function(t){return t(i.a)}})})};t(window).on("elementor/frontend/init",e)}(jQuery)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(84);!function(t){var e=function(){elementorFrontend.hooks.addAction("frontend/element_ready/terms-grid-builder.default",function(t){var e=t.find(".terms-grid-builder"),n=e.data("settings");new Vue({el:e.get(0),data:{settings:n},render:function(t){return t(i.a)}})})};t(window).on("elementor/frontend/init",e)}(jQuery)}]);