"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7348],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(a),h=l,g=s["".concat(o,".").concat(h)]||s[h]||m[h]||n;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},56538:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>n,metadata:()=>p,toc:()=>c});var r=a(87462),l=(a(67294),a(3905));const n={id:"pulsar-client-go-0.6.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"},i=void 0,p={unversionedId:"versioned/pulsar-client-go-0.6.0",id:"versioned/pulsar-client-go-0.6.0",title:"Pulsar Client Go",description:"Feature",source:"@site/release-notes/versioned/pulsar-client-go-0.6.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-go-0.6.0",permalink:"/release-notes/versioned/pulsar-client-go-0.6.0",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-client-go-0.6.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"}},o={},c=[{value:"Feature",id:"feature",level:2},{value:"Improve",id:"improve",level:2}],u={toc:c};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"feature"},"Feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Make PartitionsAutoDiscoveryInterval configurable, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/514"},"PR-514"),"."),(0,l.kt)("li",{parentName:"ul"},"Always check connection close channell, before attempting to put requests, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/521"},"PR-521"),"."),(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},"LedgerId,EntryId,BatchIdx,PartitionIdx")," func for MessageId interface, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/529"},"PR-529"),"."),(0,l.kt)("li",{parentName:"ul"},"Add DisableReplication to Producer Message, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/543"},"PR-543"),"."),(0,l.kt)("li",{parentName:"ul"},"Updating comments to conform to golang comment specification, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/532"},"PR-532"),"."),(0,l.kt)("li",{parentName:"ul"},"Producer respects Context passed to Send() and SendAsync() when applying backpressure, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/534"},"PR-534"),"."),(0,l.kt)("li",{parentName:"ul"},"Simplify connection close logic, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/559"},"PR-559"),"."),(0,l.kt)("li",{parentName:"ul"},"Add open tracing to pulsar go client, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/518"},"PR-518"),"."),(0,l.kt)("li",{parentName:"ul"},"Update proto file, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/562"},"PR-562"),"."),(0,l.kt)("li",{parentName:"ul"},"Add send error logic for connection, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/566"},"PR-566"),"."),(0,l.kt)("li",{parentName:"ul"},"Add license file for depend on libs, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/567"},"PR-567"),".")),(0,l.kt)("h2",{id:"improve"},"Improve"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update jwt-go dependency to resolve vulnerabilities, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/524"},"PR-524"),"."),(0,l.kt)("li",{parentName:"ul"},"Fixed Athenz repository name, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/522"},"PR-522"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix reader latest position, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/525"},"PR-525"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix timeout guarantee for RequestOnCnx, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/492"},"PR-492"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix nil pointer error with GetPartitionedTopicMetadata, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/536"},"PR-536"),"."),(0,l.kt)("li",{parentName:"ul"},"Release locks before calling producer consumer response callbacks, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/542"},"PR-542"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix lookup service not implemented GetTopicsOfNamespace, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/541"},"PR-541"),"."),(0,l.kt)("li",{parentName:"ul"},"Regenerate the certs to work with Pulsar 2.8.0 and Java 11, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/548"},"PR-548"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix race condition when resend pendingItems, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/551"},"PR-551"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix data race while accessing connection in partitionConsumer, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/535"},"PR-535"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix channel data race, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/558"},"PR-558"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix write to closed channel panic() in internal/connection during connection close, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/539"},"PR-539"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix possible race condition in connection pool, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/561"},"PR-561"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix default connection timeout, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/563"},"PR-563"),"."),(0,l.kt)("li",{parentName:"ul"},"Add lock for compressionProviders to fix data race problem, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/533"},"PR-533"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix send goroutine blocked, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/530"},"PR-530"),".")))}s.isMDXComponent=!0}}]);