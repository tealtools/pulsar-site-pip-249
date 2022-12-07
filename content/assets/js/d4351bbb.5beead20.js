"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,f=u["".concat(o,".").concat(h)]||u[h]||m[h]||i;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},15024:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={id:"client-cpp-2.10.0",title:"Client CPP 2.10.0",sidebar_label:"Client CPP 2.10.0"},l=void 0,p={unversionedId:"versioned/client-cpp-2.10.0",id:"versioned/client-cpp-2.10.0",title:"Client CPP 2.10.0",description:"- C++] Add Wireshark cmake and fix build with latest Wireshark [#13236",source:"@site/release-notes/versioned/client-cpp-2.10.0.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.10.0",permalink:"/release-notes/versioned/client-cpp-2.10.0",draft:!1,tags:[],version:"current",frontMatter:{id:"client-cpp-2.10.0",title:"Client CPP 2.10.0",sidebar_label:"Client CPP 2.10.0"}},o={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[C++]"," Add Wireshark cmake and fix build with latest Wireshark ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13236"},"#13236")),(0,n.kt)("li",{parentName:"ul"},"[C++]"," Wireshark Pulsar dissector naming replace yahoo with apache ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13251"},"#13251")),(0,n.kt)("li",{parentName:"ul"},"[C++]"," Support arm64 optimized CRC32c hardware-instructions ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13246"},"#13246")),(0,n.kt)("li",{parentName:"ul"},"[C++]"," Support more pulsar command names and versions in Wireshark dissector ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13286"},"#13286")),(0,n.kt)("li",{parentName:"ul"},"[C++]"," Optimize MessageBuilder and SharedBuffer to avoid unnecessary memory copy ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13293"},"#13293")),(0,n.kt)("li",{parentName:"ul"},"[C++]"," Fix in Apple Silicon macOS the clang-format cannot find ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13333"},"#13333")),(0,n.kt)("li",{parentName:"ul"},"[C++]"," Add clang-format check for Pulsar Wireshark dissector ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13349"},"#13349")),(0,n.kt)("li",{parentName:"ul"},"[C++]"," Adjust clang-format search names ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13369"},"#13369")),(0,n.kt)("li",{parentName:"ul"},"[C++]"," Fix Wireshark dissector decode send command metadata behavior ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13471"},"#13471")),(0,n.kt)("li",{parentName:"ul"},"[C++]"," PIP 37: Support large message size ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13627"},"#13627")),(0,n.kt)("li",{parentName:"ul"},"[C++]"," Fix the consumer configuration inconsistency with Java client ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14070"},"#14070"))))}u.isMDXComponent=!0}}]);