webpackJsonp([0xd2a57dc1d883],{79:function(n,e,t){"use strict";function o(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var a=[{plugin:t(392),options:{plugins:[]}}]},222:function(n,e,t){"use strict";e.components={"component---src-templates-post-template-js":t(365),"component---src-pages-404-js":t(355),"component---src-pages-about-js":t(356),"component---src-pages-garments-personal-js":t(357),"component---src-pages-garments-school-js":t(358),"component---src-pages-illustration-fashion-js":t(359),"component---src-pages-illustration-other-js":t(360),"component---src-pages-index-js":t(361),"component---src-pages-projects-campaigns-js":t(362),"component---src-pages-projects-collections-js":t(363),"component---src-pages-styling-js":t(364)},e.json={"layout-index.json":t(366),"projects-collections-folds.json":t(384),"styling-philip-treacy.json":t(390),"projects-collections-serenity.json":t(386),"illustration-fashion-ecle-outfit.json":t(375),"styling-modern-rococo-editorial.json":t(389),"projects-totoro.json":t(387),"illustration-fashion-valentino.json":t(377),"projects-collections-hay-jay.json":t(385),"projects-campaigns-john-fluevog.json":t(382),"garmets-personal-kiki-peplum.json":t(372),"illustration-fashion-heels.json":t(376),"illustration-other-reflection.json":t(379),"garmets-personal-skirt.json":t(373),"404.json":t(367),"about.json":t(369),"garments-personal.json":t(370),"garments-school.json":t(371),"illustration-fashion.json":t(374),"illustration-other.json":t(378),"index.json":t(380),"projects-campaigns.json":t(381),"projects-collections.json":t(383),"styling.json":t(388),"404-html.json":t(368)},e.layouts={"layout---index":t(354)}},223:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(1),c=o(i),l=t(7),p=o(l),f=t(138),d=o(f),m=t(56),h=o(m),g=t(79),y=t(543),j=o(y),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(t){r(this,e);var o=a(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},56:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(427),a=o(r),u=(0,a.default)();n.exports=u},224:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(76),a=t(139),u=o(a),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),s[a])return s[a];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return i=n,s[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return i=n,s[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return i=n,s[a]=n,!0}return!1}),i}}},225:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(111),a=o(r),u=t(79),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();n.exports=c},368:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(400)})})}},367:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(401)})})}},369:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(402)})})}},370:function(n,e,t){t(3),n.exports=function(n){return t.e(0x78b19abe7ac3,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(403)})})}},371:function(n,e,t){t(3),n.exports=function(n){return t.e(3767092402265,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(404)})})}},372:function(n,e,t){t(3),n.exports=function(n){return t.e(0x772ca5628cd3,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(405)})})}},373:function(n,e,t){t(3),n.exports=function(n){return t.e(0xce11c701341b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(406)})})}},375:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf4463887c910,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(407)})})}},376:function(n,e,t){t(3),n.exports=function(n){return t.e(70012499212250,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(408)})})}},377:function(n,e,t){t(3),n.exports=function(n){return t.e(81922057854347,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(409)})})}},374:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9d31e92922a5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(410)})})}},379:function(n,e,t){t(3),n.exports=function(n){return t.e(0xb5d63d6fffa0,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(411)})})}},378:function(n,e,t){t(3),n.exports=function(n){return t.e(93898978720690,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(412)})})}},380:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(413)})})}},366:function(n,e,t){t(3),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(114)})})}},382:function(n,e,t){t(3),n.exports=function(n){return t.e(0xabb1216808e3,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(414)})})}},381:function(n,e,t){t(3),n.exports=function(n){return t.e(6744790679162,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(415)})})}},384:function(n,e,t){t(3),n.exports=function(n){return t.e(0x6179e4d80edf,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(416)})})}},385:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe76ddfedffbe,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(417)})})}},386:function(n,e,t){t(3),n.exports=function(n){return t.e(49506105411432,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(418)})})}},383:function(n,e,t){t(3),n.exports=function(n){return t.e(18212887506456,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(419)})})}},387:function(n,e,t){t(3),n.exports=function(n){return t.e(86973871339028,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(420)})})}},389:function(n,e,t){t(3),n.exports=function(n){return t.e(94118047102357,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(421)})})}},390:function(n,e,t){t(3),n.exports=function(n){return t.e(0xb765292a8f7d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(422)})})}},388:function(n,e,t){t(3),n.exports=function(n){return t.e(92369126747985,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(423)})})}},354:function(n,e,t){t(3),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(226)})})}},138:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(1),a=(o(r),t(224)),u=o(a),s=t(56),i=o(s),c=t(139),l=o(c),p=void 0,f={},d={},m={},h={},g={},y=[],j=[],x={},v="",R=[],C={},N=function(n){return n&&n.default||n},b=void 0,k=!0,w=[],_={},P={},E=5;b=t(227)({getNextQueuedResources:function(){return R.slice(-1)[0]},createResourceDownload:function(n){T(n,function(){R=R.filter(function(e){return e!==n}),b.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){b.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){b.onPostLoadPageResources(n)});var L=function(n,e){return C[n]>C[e]?1:C[n]<C[e]?-1:0},O=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){t(null,h[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){h[e]=o,w.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),w=w.slice(-E),t(n,o)})}},S=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):P[e]?n.nextTick(function(){t(P[e])}):T(e,function(n,o){if(n)t(n);else{var r=N(o());g[e]=r,t(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=w.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,U={empty:function(){j=[],x={},C={},R=[],y=[],v=""},addPagesArray:function(n){y=n,p=(0,u.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var t=1/M;M+=1,x[e]?x[e]+=1:x[e]=1,U.has(e)||j.unshift(e),j.sort(O);var o=p(e);return o.jsonName&&(C[o.jsonName]?C[o.jsonName]+=1+t:C[o.jsonName]=1+t,R.indexOf(o.jsonName)!==-1||h[o.jsonName]||R.unshift(o.jsonName)),o.componentChunkName&&(C[o.componentChunkName]?C[o.componentChunkName]+=1+t:C[o.componentChunkName]=1+t,R.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||R.unshift(o.componentChunkName)),R.sort(L),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:R,resourcesCount:C}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return p(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),k=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),r=e,s()}),S(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=e,s()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=e,s()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,t(69))},424:function(n,e){n.exports=[{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects-collections-folds.json",path:"/projects/collections/folds"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"styling-philip-treacy.json",path:"/styling/philip-treacy"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects-collections-serenity.json",path:"/projects/collections/serenity"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"illustration-fashion-ecle-outfit.json",path:"/illustration/fashion/ecle-outfit"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"styling-modern-rococo-editorial.json",path:"/styling/Modern-Rococo-Editorial"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects-totoro.json",path:"/projects/totoro"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"illustration-fashion-valentino.json",path:"/illustration/fashion/valentino"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects-collections-hay-jay.json",path:"/projects/collections/hay-jay"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects-campaigns-john-fluevog.json",path:"/projects/campaigns/john-fluevog"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"garmets-personal-kiki-peplum.json",path:"/garmets/personal/kiki-peplum"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"illustration-fashion-heels.json",path:"/illustration/fashion/heels"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"illustration-other-reflection.json",path:"/illustration/other/reflection"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"garmets-personal-skirt.json",path:"/garmets/personal/skirt"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-garments-personal-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"garments-personal.json",path:"/garments/personal/"},{componentChunkName:"component---src-pages-garments-school-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"garments-school.json",path:"/garments/school/"},{componentChunkName:"component---src-pages-illustration-fashion-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"illustration-fashion.json",path:"/illustration/fashion/"},{componentChunkName:"component---src-pages-illustration-other-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"illustration-other.json",path:"/illustration/other/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-projects-campaigns-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects-campaigns.json",path:"/projects/campaigns/"},{componentChunkName:"component---src-pages-projects-collections-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects-collections.json",path:"/projects/collections/"},{componentChunkName:"component---src-pages-styling-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"styling.json",path:"/styling/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},227:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(79),u=t(1),s=o(u),i=t(49),c=o(i),l=t(76),p=t(396),f=t(334),d=o(f),m=t(113),h=t(225),g=o(h),y=t(56),j=o(y),x=t(424),v=o(x),R=t(425),C=o(R),N=t(223),b=o(N),k=t(222),w=o(k),_=t(138),P=o(_);t(256),window.___history=g.default,window.___emitter=j.default,P.default.addPagesArray(v.default),P.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=C.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),L=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};L(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){L(n.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(228);var o=function(n){function e(n){n.page.path===P.default.getPage(o).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(u),window.___history.push(t))}var t=(0,m.createLocation)(n,null,null,g.default.location),o=t.pathname,r=E[o];r&&(o=r.toPath);var a=window.location;if(a.pathname!==t.pathname||a.search!==t.search||a.hash!==t.hash){var u=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);P.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(t)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return s.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(b.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,r({page:!0},o)):(0,u.createElement)(b.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},425:function(n,e){n.exports=[]},228:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(56),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},139:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},334:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},3:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var s=!1,i=!0,c=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},391:function(n,e,t){"use strict";var o=t(14);n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,r=n.target;r.parentNode;r=r.parentNode)if("A"===r.nodeName){t=r;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var a=document.createElement("a");a.href=t.href;var u=document.createElement("a");if(u.href=window.location.href,a.host!==u.host)return!0;var s=new RegExp("^"+u.host+(0,o.withPrefix)("/"));return!s.test(""+a.host+a.pathname)||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},392:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(14),a=t(391),u=o(a);e.onClientEntry=function(){(0,u.default)(window,function(n){(0,r.navigateTo)(n)})}},427:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},69:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&s())}function s(){if(!h){var n=r(u);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,a(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],h=!1,g=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new i(n,e)),1!==m.length||h||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},543:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},355:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(235)})})}},356:function(n,e,t){t(3),n.exports=function(n){return t.e(0xefeaa6d1881d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(236)})})}},357:function(n,e,t){t(3),n.exports=function(n){return t.e(3056925305e4,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(237)})})}},358:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9b3181c35ea5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(238)})})}},359:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9cdbabd78fe0,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(239)})})}},360:function(n,e,t){t(3),n.exports=function(n){return t.e(0x91a04f8c4f29,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(240)})})}},361:function(n,e,t){t(3),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(241)})})}},362:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa52bf2cd74fb,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(242)})})}},363:function(n,e,t){t(3),n.exports=function(n){return t.e(0x73671a3fdccd,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(243)})})}},364:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc8d3c5855809,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(244)})})}},365:function(n,e,t){t(3),n.exports=function(n){return t.e(0xb48ce3051dcc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(245)})})}}});
//# sourceMappingURL=app-d61cc2bcf43feb7c4fed.js.map