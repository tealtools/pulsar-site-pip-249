"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3625],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(m,l(l({ref:r},u),{},{components:t})):n.createElement(m,l({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},54716:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={id:"pulsar-cs-0.9.7",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"},l=void 0,i={unversionedId:"versioned/pulsar-cs-0.9.7",id:"versioned/pulsar-cs-0.9.7",title:"Pulsar DotPulsar",description:"Added",source:"@site/release-notes/versioned/pulsar-cs-0.9.7.md",sourceDirName:"versioned",slug:"/versioned/pulsar-cs-0.9.7",permalink:"/release-notes/versioned/pulsar-cs-0.9.7",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-cs-0.9.7",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"}},s={},c=[{value:"Added",id:"added",level:2}],u={toc:c};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added an ExceptionHandler method on the IPulsarClientBuilder taking an Action\\<ExceptionContext",">"," for easy sync exception handling"),(0,a.kt)("li",{parentName:"ul"},"Added .NET 5 as a target framework and started using C# 9.0"),(0,a.kt)("li",{parentName:"ul"},"Added performance improvements when sending and receiving data"),(0,a.kt)("li",{parentName:"ul"},"The default values for ConsumerOptions, ReaderOptions, and ProducerOptions are now public")))}d.isMDXComponent=!0}}]);