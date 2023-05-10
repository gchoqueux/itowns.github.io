"use strict";!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("itowns_widgets",[],e):"object"==typeof exports?exports.itowns_widgets=e():t.itowns_widgets=e()}(self,(()=>(self.webpackChunkitowns=self.webpackChunkitowns||[]).push([[318],{81499:(t,e,n)=>{n.r(e),n.d(e,{C3DTilesStyle:()=>et,Minimap:()=>O,Navigation:()=>M,Scale:()=>_,Searchbar:()=>q,Widget:()=>p});var o=n(15671),i=n(43144),a=n(97326),r=n(79340),c=n(82963),l=n(61120),s=n(13092),u=n(86033),d=n(90007);function f(t,e,n){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,n)}var m=new WeakMap;const p=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;(0,o.Z)(this,t),f(this,m,{writable:!0,value:void 0}),this.parentElement=n.parentElement||e.domElement,this.position=n.position||i.position,["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right"].includes(this.position)||(console.warn("'position' optional parameter for 'Widget' constructor is not a valid option. "+"It will be set to '".concat(i.position,"'.")),this.position=i.position),this.domElement=document.createElement("div"),this.parentElement.appendChild(this.domElement),this.domElement.style.width="".concat(n.width||n.size||i.width,"px"),this.domElement.style.height="".concat(n.height||n.size||i.height,"px");var a=this.position.split("-");if(this.domElement.classList.add("".concat(a[0],"-widget")),a[1])this.domElement.classList.add("".concat(a[1],"-widget"));else switch(a[0]){case"top":case"bottom":this.domElement.style.left="calc(50% - ".concat(this.domElement.offsetWidth/2,"px)");break;case"left":case"right":this.domElement.style.top="calc(50% - ".concat(this.domElement.offsetHeight/2,"px)")}n.translate&&(this.domElement.style.transform="translate(".concat(n.translate.x||0,"px, ").concat(n.translate.y||0,"px)")),this.domElement.addEventListener("pointerdown",(function(t){t.stopPropagation()})),this.domElement.addEventListener("mousedown",(function(t){t.stopPropagation()}))}return(0,i.Z)(t,[{key:"show",value:function(){this.domElement.style.display=(0,u.Z)(this,m)}},{key:"hide",value:function(){(0,s.Z)(this,m,window.getComputedStyle(this.domElement).display),this.domElement.style.display="none"}}]),t}();function h(t,e){y(t,e),e.add(t)}function v(t,e,n){y(t,e),e.set(t,n)}function y(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function g(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var w={displayCompass:!0,display3DToggle:!0,displayZoomIn:!0,displayZoomOut:!0,animationDuration:500,position:"bottom-left",direction:"column"},E={id:"compass",content:"",info:"Rotate the camera to face North",parentId:"widgets"},b={id:"3d-button",content:"3D",info:"Tilt the camera"},Z={id:"zoom-in-button",content:'<span class="widget-zoom-button-logo"></span>',info:"Zoom in",parentId:"zoom-button-bar"},C={id:"zoom-out-button",content:'<span id="zoom-out-logo" class="widget-zoom-button-logo"></span>',info:"Zoom out",parentId:"zoom-button-bar"},x=new WeakMap,L=new WeakSet,S=new WeakSet;function T(t){return t.time=this.animationDuration,(0,u.Z)(this,x).controls.lookAtCoordinate(t)}function R(t,e){return this.addButton(t.id,t.content,t.info,e,t.parentId)}const M=function(t){(0,r.Z)(m,t);var e,n,f=(e=m,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return(0,c.Z)(this,t)});function m(t){var e,n,i,r,c,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((0,o.Z)(this,m),!t.isGlobeView)throw new Error("'Navigation' plugin only supports 'GlobeView'. Therefore, the 'view' parameter must be a 'GlobeView'.");return["top","bottom","left","right"].includes(l.position)&&(console.warn("'position' optional parameter for 'Navigation' is not a valid option. "+"It will be set to '".concat(w.position,"'.")),l.position=w.position),c=f.call(this,t,l,w),h((0,a.Z)(c),S),h((0,a.Z)(c),L),v((0,a.Z)(c),x,{writable:!0,value:void 0}),(0,s.Z)((0,a.Z)(c),x,t),c.direction=l.direction||w.direction,["column","row"].includes(c.direction)||(console.warn("'direction' optional parameter for 'Navigation' constructor is not a valid option. "+"It will be set to '".concat(w.direction,"'.")),c.direction=w.direction),c.animationDuration=void 0===l.animationDuration?w.animationDuration:l.animationDuration,c.domElement.id="widgets-navigation",c.domElement.classList.add("".concat(c.direction,"-widget")),(null!==(e=l.displayCompass)&&void 0!==e?e:w.displayCompass)&&(c.compass=g((0,a.Z)(c),S,R).call((0,a.Z)(c),E,(function(){g((0,a.Z)(c),L,T).call((0,a.Z)(c),{heading:0,tilt:89.5})})),t.addEventListener(d.b.CAMERA_MOVED,(function(t){c.compass.style.transform="rotate(".concat(-t.heading,"deg)")}))),(null!==(n=l.display3DToggle)&&void 0!==n?n:w.display3DToggle)&&(c.toggle3D=g((0,a.Z)(c),S,R).call((0,a.Z)(c),b,(function(){g((0,a.Z)(c),L,T).call((0,a.Z)(c),{tilt:(0,u.Z)((0,a.Z)(c),x).controls.getTilt()<89?89.5:40})})),t.addEventListener(d.b.CAMERA_MOVED,(function(t){c.toggle3D.innerHTML=t.tilt<89?"2D":"3D"}))),(null!==(i=l.displayZoomIn)&&void 0!==i?i:w.displayZoomIn)&&(c.zoomIn=g((0,a.Z)(c),S,R).call((0,a.Z)(c),Z,(function(){g((0,a.Z)(c),L,T).call((0,a.Z)(c),{zoom:Math.min(20,(0,u.Z)((0,a.Z)(c),x).controls.getZoom()+1)})}))),(null!==(r=l.displayZoomOut)&&void 0!==r?r:w.displayZoomOut)&&(c.zoomOut=g((0,a.Z)(c),S,R).call((0,a.Z)(c),C,(function(){g((0,a.Z)(c),L,T).call((0,a.Z)(c),{zoom:Math.max(3,(0,u.Z)((0,a.Z)(c),x).controls.getZoom()-1)})}))),c}return(0,i.Z)(m,[{key:"addButton",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=arguments.length>4?arguments[4]:void 0,r=document.getElementById(a);r||(r=this.addButtonBar(a));var c=document.createElement("button");return c.className="widget-button",c.id=t,c.innerHTML=n,c.title=o,c.onclick=i,r.appendChild(c),c.tabIndex=-1,window.addEventListener("pointerup",(function(){document.activeElement===c&&(0,u.Z)(e,x).domElement.focus()})),c}},{key:"addButtonBar",value:function(t){var e=document.createElement("div");return e.className="widget-button-bar",t&&(e.id=t),this.domElement.appendChild(e),e}}]),m}(p);var z=n(60145),A=n(49469),D=n(48682),I=n(800);var k={minScale:2e-6,maxScale:2e-9,zoomRatio:1/30,width:150,height:150,position:"bottom-left"};const O=function(t){(0,r.Z)(s,t);var e,n,a=(e=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return(0,c.Z)(this,t)});function s(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if((0,o.Z)(this,s),!t.isGlobeView)throw new Error("'Minimap' plugin only supports 'GlobeView'. Therefore, the 'view' parameter must be a 'GlobeView'.");if(!e.isColorLayer)throw new Error("'layer' parameter form 'Minimap' constructor should be a 'ColorLayer'.");if((n=a.call(this,t,i,k)).minScale=i.minScale||k.minScale,n.maxScale=i.maxScale||k.maxScale,n.zoomRatio=i.zoomRatio||k.zoomRatio,n.domElement.id="widgets-minimap",i.cursor){var r=document.createElement("div");r.id="cursor-wrapper",n.domElement.appendChild(r),"string"==typeof i.cursor?r.innerHTML=i.cursor:i.cursor instanceof HTMLElement&&r.appendChild(i.cursor)}n.view=new D.Z(n.domElement,e.source.extent,{camera:{type:I.P.ORTHOGRAPHIC},placement:e.source.extent,noControls:!0,maxSubdivisionLevel:t.tileLayer.maxSubdivisionLevel,disableFocusOnStart:!0}),n.view.addLayer(e),n.domElement.addEventListener("pointerdown",(function(t){t.preventDefault()}));var c=n.view.camera.camera3D,l=n.view.getScale(i.pitch),u=c.zoom*n.maxScale/l,d=c.zoom*n.minScale/l,f=new z.Z(t.referenceCrs),m=new z.Z(n.view.referenceCrs),p=t.controls.getCameraTargetPosition();return t.addFrameRequester(A.Ao.AFTER_RENDER,(function(){var e=t.camera.camera3D.position.distanceTo(p),o=t.getScaleFromDistance(i.pitch,e);c.zoom=n.zoomRatio*d*o/n.minScale,c.zoom=Math.min(Math.max(c.zoom,u),d),c.updateProjectionMatrix(),f.setFromVector3(t.controls.getCameraTargetPosition()),f.as(n.view.referenceCrs,m),c.position.x=m.x,c.position.y=m.y,c.updateMatrixWorld(!0),n.view.notifyChange(c)})),n}return(0,i.Z)(s)}(p);var P=n(11925),B=n(91742),N=n(44450);var V={width:200,height:30,position:"bottom-left"};const _=function(t){(0,r.Z)(s,t);var e,n,a=(e=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return(0,c.Z)(this,t)});function s(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,o.Z)(this,s),(e=a.call(this,t,n,V)).domElement.id="widgets-scale",e.view=t,e.domElement.innerHTML="Scale",e.width=n.width||V.width,e.view.isGlobeView?(e.view.addEventListener(B.b.GLOBE_INITIALIZED,(function(){e.update()})),e.view.controls.addEventListener(P.Q.RANGE_CHANGED,(function(){e.update()}))):e.view.isPlanarView?(e.view.addEventListener(d.b.INITIALIZED,(function(){e.update()})),e.view.addEventListener(N.uZ.MOVED,(function(){e.update()}))):console.warn("The 'view' linked to scale widget is neither a 'GlobeView' nor a 'PlanarView'. The scale wont automatically update. You can implement its update automation using 'Scale.update' method."),e}return(0,i.Z)(s,[{key:"addEventListeners",value:function(){}},{key:"update",value:function(){var t=Math.round(this.view.getPixelsToMeters(this.width)),e=Math.pow(10,t.toString().length-1);t=Math.round(t/e)*e;var n=this.view.getMetersToPixels(t),o="m";t>=1e3&&(t/=1e3,o="km"),this.domElement.innerHTML="".concat(t," ").concat(o),this.domElement.style.width="".concat(n,"px")}}]),s}(p);var G=n(33347);function H(t,e,n){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,n)}var j={width:300,height:38,position:"top",maxSuggestionNumber:10,fontSize:16,placeholder:"Search location"};function W(t,e){var n;return t?(F(t),e>=t.length?e=0:e<0&&(e=t.length-1),null===(n=t[e])||void 0===n||n.classList.add("active"),e):e}function F(t){for(var e=0;e<t.length;e++)t[e].classList.remove("active")}function U(t){for(;t.children.length>1;)t.removeChild(t.lastChild)}var X=new WeakMap;const q=function(t){(0,r.Z)(f,t);var e,n,d=(e=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return(0,c.Z)(this,t)});function f(t,e){var n,i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if((0,o.Z)(this,f),i=d.call(this,t,r,j),H((0,a.Z)(i),X,{writable:!0,value:void 0}),!e||!e.url||!e.parser||"function"!=typeof e.parser)throw new Error("'geocodingOptions' parameter for 'Searchbar' constructor is not a valid option. Please refer to the documentation.");(0,s.Z)((0,a.Z)(i),X,null!==(n=e.onSelected)&&void 0!==n?n:function(){}),i.domElement.id="widgets-searchbar",i.domElement.style.height="auto";var c=document.createElement("form");c.setAttribute("autocomplete","off"),c.id="searchbar-autocompletion-form",i.domElement.appendChild(c);var l,m=document.createElement("input");m.setAttribute("type","text"),m.setAttribute("name","mySearch"),m.setAttribute("placeholder",r.placeholder||j.placeholder),m.style.height="".concat(r.height||r.size||j.height,"px"),m.style.fontSize="".concat(r.fontSize||j.fontSize,"px"),c.appendChild(m),m.addEventListener("input",(function(){var t=m.value;if(U(c),l=-1,!t)return!1;e.url.searchParams.set("text",t),G.Z.json(e.url).then((function(n){var o=e.parser(n),s=0;o.forEach((function(e,n){if(s!==Math.min(o.size,r.maxSuggestionNumber||j.maxSuggestionNumber)){var d=s;s++;var f=n.toUpperCase().indexOf(t.toUpperCase());if(f>-1){var p=document.createElement("div");p.style.minHeight=m.style.height,p.style.fontSize="".concat(r.fontSize||j.fontSize,"px");var h=n.slice(0,f),v=n.slice(f,f+t.length),y=n.slice(f+t.length,n.length);p.innerHTML="<p>".concat(h,"<strong>").concat(v,"</strong>").concat(y,"</p>"),p.setAttribute("location",n),c.appendChild(p),p.addEventListener("mouseover",(function(){F(c.children),l=d,p.classList.add("active")})),p.addEventListener("click",(function(){(0,u.Z)((0,a.Z)(i),X).call((0,a.Z)(i),e),m.value=p.getAttribute("location"),U(c)}))}}}))}))}));var p=(r.position||j.position).includes("top")?1:-1;return m.addEventListener("keydown",(function(e){e.stopPropagation();var n=c.getElementsByTagName("div");switch(e.code){case"Escape":U(c),m.value="",t.domElement.focus();break;case"ArrowDown":e.preventDefault(),l=W(n,l+p);break;case"ArrowUp":e.preventDefault(),l=W(n,l-p);break;case"Enter":e.preventDefault(),n[Math.max(l,0)]&&(n[Math.max(l,0)].click(),t.domElement.focus())}})),m.addEventListener("focus",(function(){c.classList.add("focus")})),m.addEventListener("blur",(function(){c.classList.remove("focus"),F(c.children)})),c.addEventListener("mouseleave",(function(){F(c.children),l=-1})),i}return(0,i.Z)(f)}(p);var Q=n(70885),Y=n(48891),$=n(24266);function J(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return r=t.done,t},e:function(t){c=!0,a=t},f:function(){try{r||null==n.return||n.return()}finally{if(c)throw a}}}}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var tt={width:200,position:"top-right"};const et=function(t){(0,r.Z)(s,t);var e,n,a=(e=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return(0,c.Z)(this,t)});function s(t,e){var n;(0,o.Z)(this,s),(n=a.call(this,t,e,tt)).domElement.onclick=function(t){return t.stopImmediatePropagation()};var i=document.createElement("select");n.domElement.appendChild(i);var r=new Map,c=function(){var t,e=J(r);try{for(e.s();!(t=e.n()).done;){var n=(0,Q.Z)(t.value,2),o=n[0];n[1].hidden=o!==i.selectedOptions[0]}}catch(t){e.e(t)}finally{e.f()}};return i.onchange=c,t.getLayers().filter((function(t){return!0===t.isC3DTilesLayer})).forEach((function(e){var o=document.createElement("option");o.innerText=e.name,i.add(o);var a=document.createElement("div");n.domElement.appendChild(a),r.set(o,a),e.addEventListener($.y.ON_TILE_CONTENT_LOADED,(function(){for(;a.firstChild;)a.firstChild.remove();var n,o=new Map,i=J(e.tilesC3DTileFeatures);try{for(i.s();!(n=i.n()).done;){var r,c=(0,Q.Z)(n.value,2),l=(c[0],J(c[1]));try{for(l.s();!(r=l.n()).done;){var u=(0,Q.Z)(r.value,2),d=(u[0],u[1]);for(var f in d.getInfo().batchTable){o.has(f)||o.set(f,[]);var m=d.getInfo().batchTable[f];o.get(f).includes(m)||o.get(f).push(m)}}}catch(t){l.e(t)}finally{l.f()}}}catch(t){i.e(t)}finally{i.f()}var p,h=new Map,v=new Map,y=function(n,o,i){var r=document.createElement("input");r.setAttribute("type","color"),a.appendChild(r),r.onchange=function(){var a=n();if(i.includes(a)){var c=r.value;h.set(a,(function(t){return t.getInfo().batchTable[o]==a?c:null})),e.updateStyle(),t.notifyChange()}};var c=document.createElement("input");return c.setAttribute("type","range"),c.min=0,c.max=1,c.step=.1,c.value=1,a.appendChild(c),c.onchange=function(){var a=n();if(i.includes(a)){var r=c.value;v.set(a,(function(t){return t.getInfo().batchTable[o]==a?r:null})),e.updateStyle(),t.notifyChange()}},{inputColor:r,opacityElement:c}},g=function(t,e){var n=document.createElement("label");n.innerText=t,a.appendChild(n);var o=document.createElement("select");a.appendChild(o),e.forEach((function(t){var e=document.createElement("option");e.value=t,e.text=t,o.add(e)})),y((function(){return o.selectedOptions[0].value}),t,e)},w=function(n,o){var i=document.createElement("label");i.innerText=n,a.appendChild(i);var r=document.createElement("input");r.setAttribute("type","text"),a.appendChild(r);var c=y((function(){return r.value}),n,o),l=c.inputColor,s=c.opacityElement;r.onchange=function(){if(o.includes(r.value)){var i=l.value,a=r.value;h.set(a,(function(t){return t.getInfo().batchTable[n]==a?i:null}));var c=s.value;v.set(a,(function(t){return t.getInfo().batchTable[n]==a?c:null})),e.updateStyle(),t.notifyChange()}}},E=J(o);try{for(E.s();!(p=E.n()).done;){var b=(0,Q.Z)(p.value,2),Z=b[0],C=b[1];C.length<s.MAX_SELECT_VALUE?g(Z,C):w(Z,C)}}catch(t){E.e(t)}finally{E.f()}e.style=new Y.ZP({fill:{color:function(t){var e,n=null,o=J(h);try{for(o.s();!(e=o.n()).done;){var i=(0,Q.Z)(e.value,2);i[0],n=(0,i[1])(t)||n}}catch(t){o.e(t)}finally{o.f()}return n},opacity:function(t){var e,n=1,o=J(v);try{for(o.s();!(e=o.n()).done;){var i=(0,Q.Z)(e.value,2);i[0],n=(0,i[1])(t)||n}}catch(t){o.e(t)}finally{o.f()}return n}}})}))})),c(),n}return(0,i.Z)(s,null,[{key:"MAX_SELECT_VALUE",get:function(){return 10}}]),s}(p)}},t=>(81499,t(t.s=81499))])));
//# sourceMappingURL=itowns_widgets.js.map