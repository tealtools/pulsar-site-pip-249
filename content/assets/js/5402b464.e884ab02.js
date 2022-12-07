"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9022],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),h=n,m=c["".concat(o,".").concat(h)]||c[h]||d[h]||l;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},67046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={id:"pulsar-2.9.1",title:"Apache Pulsar 2.9.1",sidebar_label:"Apache Pulsar 2.9.1"},i=void 0,p={unversionedId:"versioned/pulsar-2.9.1",id:"versioned/pulsar-2.9.1",title:"Apache Pulsar 2.9.1",description:"2021-12-20",source:"@site/release-notes/versioned/pulsar-2.9.1.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.9.1",permalink:"/release-notes/versioned/pulsar-2.9.1",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-2.9.1",title:"Apache Pulsar 2.9.1",sidebar_label:"Apache Pulsar 2.9.1"}},o={},u=[{value:"2021-12-20",id:"2021-12-20",level:4},{value:"Library updates",id:"library-updates",level:3},{value:"Broker",id:"broker",level:4},{value:"Pulsar Functions",id:"pulsar-functions",level:4}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"2021-12-20"},"2021-12-20"),(0,n.kt)("p",null,"Apache Pulsar 2.9.1 is a bugfix release, that includes library upgrades for important security issues (like Apache Log4j2).\nIt also includes fixes for some breaking changes introduced in 2.9.0."),(0,n.kt)("h3",{id:"library-updates"},"Library updates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bump log4j to 2.16.0 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13277"},"#13277")),(0,n.kt)("li",{parentName:"ul"},"Upgrade OkHttp3 to address CVE-2021-0341 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13065"},"#13065")),(0,n.kt)("li",{parentName:"ul"},"Upgrade Netty to 4.1.72 - CVE-2021-43797 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13328"},"#13328"))),(0,n.kt)("h4",{id:"broker"},"Broker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed LeaderElectionService.getCurrentLeader and added support for ephemeralOwner in MockZooKeeper ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13066"},"#13066")),(0,n.kt)("li",{parentName:"ul"},"Removed tenant permission verification when list partitioned-topic ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13138"},"#13138")),(0,n.kt)("li",{parentName:"ul"},"Fixed and improve topic ownership assignment ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13069"},"#13069")),(0,n.kt)("li",{parentName:"ul"},"Fixed consume message order issue when use listener.",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13023"},"#13023")),(0,n.kt)("li",{parentName:"ul"},"Fixed ManagedLedger: Do not reuse the Failed OpAddEntry object which lead bundle unloading timeout.",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12993"},"#12993")),(0,n.kt)("li",{parentName:"ul"},"Fixed incompatibility of BacklogQuota in the REST API ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13291"},"#13291")),(0,n.kt)("li",{parentName:"ul"},"Fixed unordered consuming case in Key_Shared subscription.",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12890"},"#12890")),(0,n.kt)("li",{parentName:"ul"},"Fixed the incorrect total size when BrokerEntryMetadata is enabled",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12714"},"#12714")),(0,n.kt)("li",{parentName:"ul"},"Reverted new AuthorizationProvider method ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13133"},"#13133"))),(0,n.kt)("h4",{id:"pulsar-functions"},"Pulsar Functions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed classloader leaks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12973"},"#12973")),(0,n.kt)("li",{parentName:"ul"},"Fixed Kubernetes Pulsar Functions containers not exposing metrics port for scraping ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12065"},"#12065"))))}c.isMDXComponent=!0}}]);