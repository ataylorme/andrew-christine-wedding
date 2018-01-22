/* eslint-disable */
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-inlinesvg-webp-webpalpha-webpanimation-webplossless_webp_lossless-setclasses !*/
!function(A,e,n){function a(A,e){return typeof A===e}function t(){var A,e,n,t,o,s,i;for(var f in r)if(r.hasOwnProperty(f)){if(A=[],e=r[f],e.name&&(A.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(n=0;n<e.options.aliases.length;n++)A.push(e.options.aliases[n].toLowerCase());for(t=a(e.fn,"function")?e.fn():e.fn,o=0;o<A.length;o++)s=A[o],i=s.split("."),1===i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),l.push((t?"":"no-")+i.join("-"))}}function o(A){var e=u.className,n=Modernizr._config.classPrefix||"";if(p&&(e=e.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");e=e.replace(a,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(e+=" "+n+A.join(" "+n),p?u.className.baseVal=e:u.className=e)}function s(A,e){if("object"==typeof A)for(var n in A)c(A,n)&&s(n,A[n]);else{A=A.toLowerCase();var a=A.split("."),t=Modernizr[a[0]];if(2==a.length&&(t=t[a[1]]),"undefined"!=typeof t)return Modernizr;e="function"==typeof e?e():e,1==a.length?Modernizr[a[0]]=e:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=e),o([(e&&0!=e?"":"no-")+a.join("-")]),Modernizr._trigger(A,e)}return Modernizr}function i(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):p?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}var l=[],r=[],f={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,e){var n=this;setTimeout(function(){e(n[A])},0)},addTest:function(A,e,n){r.push({name:A,fn:e,options:n})},addAsyncTest:function(A){r.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var c,u=e.documentElement,p="svg"===u.nodeName.toLowerCase();!function(){var A={}.hasOwnProperty;c=a(A,"undefined")||a(A.call,"undefined")?function(A,e){return e in A&&a(A.constructor.prototype[e],"undefined")}:function(e,n){return A.call(e,n)}}(),f._l={},f.on=function(A,e){this._l[A]||(this._l[A]=[]),this._l[A].push(e),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},f._trigger=function(A,e){if(this._l[A]){var n=this._l[A];setTimeout(function(){var A,a;for(A=0;A<n.length;A++)(a=n[A])(e)},0),delete this._l[A]}},Modernizr._q.push(function(){f.addTest=s}),Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){s("webpalpha",!1,{aliases:["webp-alpha"]})},A.onload=function(){s("webpalpha",1==A.width,{aliases:["webp-alpha"]})},A.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){s("webpanimation",!1,{aliases:["webp-animation"]})},A.onload=function(){s("webpanimation",1==A.width,{aliases:["webp-animation"]})},A.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}),Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){s("webplossless",!1,{aliases:["webp-lossless"]})},A.onload=function(){s("webplossless",1==A.width,{aliases:["webp-lossless"]})},A.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="}),Modernizr.addAsyncTest(function(){function A(A,e,n){function a(e){var a=e&&"load"===e.type?1==t.width:!1,o="webp"===A;s(A,o&&a?new Boolean(a):a),n&&n(e)}var t=new Image;t.onerror=a,t.onload=a,t.src=e}var e=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=e.shift();A(n.name,n.uri,function(n){if(n&&"load"===n.type)for(var a=0;a<e.length;a++)A(e[a].name,e[a].uri)})}),Modernizr.addTest("inlinesvg",function(){var A=i("div");return A.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&A.firstChild&&A.firstChild.namespaceURI)}),t(),o(l),delete f.addTest,delete f.addAsyncTest;for(var d=0;d<Modernizr._q.length;d++)Modernizr._q[d]();A.Modernizr=Modernizr}(window,document);
