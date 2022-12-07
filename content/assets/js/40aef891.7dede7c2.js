"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5773],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||i;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81193:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"client-cpp-2.10.1",title:"Client CPP 2.10.1",sidebar_label:"Client CPP 2.10.1"},l=void 0,o={unversionedId:"versioned/client-cpp-2.10.1",id:"versioned/client-cpp-2.10.1",title:"Client CPP 2.10.1",description:"- fix avoid race condition causing double callback on close 15508",source:"@site/release-notes/versioned/client-cpp-2.10.1.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.10.1",permalink:"/release-notes/versioned/client-cpp-2.10.1",draft:!1,tags:[],version:"current",frontMatter:{id:"client-cpp-2.10.1",title:"Client CPP 2.10.1",sidebar_label:"Client CPP 2.10.1"}},c={},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][C++]"," avoid race condition causing double callback on close ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15508"},"15508")),(0,a.kt)("li",{parentName:"ul"},"[fix][C++]"," Wait until event loop terminates when closing the Client ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15316"},"15316")),(0,a.kt)("li",{parentName:"ul"},"[fix][C++]"," Fix UnknownError might be returned for a partitioned producer ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15161"},"15161")),(0,a.kt)("li",{parentName:"ul"},"[fix][C++]"," Fix single message metadata not set correctly ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15072"},"15072")),(0,a.kt)("li",{parentName:"ul"},"[fix][C++]"," Fix connection is not closed when broker closes the connection to proxy ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15009"},"15009")),(0,a.kt)("li",{parentName:"ul"},"[fix][C++]"," Fix send callback might not be invoked in key based batching ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14898"},"14898")),(0,a.kt)("li",{parentName:"ul"},"[fix][C++]"," Fix segmentation fault when creating socket failed ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14834"},"14834")),(0,a.kt)("li",{parentName:"ul"},"[fix][C++]"," Fix the race condition of connect timeout task ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14823"},"14823")),(0,a.kt)("li",{parentName:"ul"},"[fix][C++]"," Fix producer is never destructed until client is closed ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14797"},"14797"))))}s.isMDXComponent=!0}}]);