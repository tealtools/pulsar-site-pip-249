"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"pulsar-cs-0.10.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"},i=void 0,d={unversionedId:"versioned/pulsar-cs-0.10.0",id:"versioned/pulsar-cs-0.10.0",title:"Pulsar DotPulsar",description:"Added",source:"@site/release-notes/versioned/pulsar-cs-0.10.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-cs-0.10.0",permalink:"/release-notes/versioned/pulsar-cs-0.10.0",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-cs-0.10.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"}},l={},s=[{value:"Added",id:"added",level:2},{value:"Changed",id:"changed",level:2},{value:"Fixed",id:"fixed",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added performance improvements when receiving data"),(0,a.kt)("li",{parentName:"ul"},"Added the IHandleStateChanged\\<TStateChanged",">"," interface for easier state monitoring"),(0,a.kt)("li",{parentName:"ul"},"Added StateChangedHandler methods on ConsumerBuilder, ReaderBuilder, and ProducerBuilder for easier state monitoring"),(0,a.kt)("li",{parentName:"ul"},"Added StateChangedHandler property on ConsumerOptions, ReaderOptions, and ProducerOptions for easier state monitoring"),(0,a.kt)("li",{parentName:"ul"},"Added four new DotPulsarExceptions: InvalidTransactionStatusException, NotAllowedException, TransactionConflictException and TransactionCoordinatorNotFoundException"),(0,a.kt)("li",{parentName:"ul"},"Added properties on Message to read EventTime and PublishTime as DateTime"),(0,a.kt)("li",{parentName:"ul"},"Added methods on the IMessageBuilder to set EventTime and DeliverAt using DateTime"),(0,a.kt)("li",{parentName:"ul"},"Added properties on MessageMetadata to set EventTime and DeliverAtTime using DateTime"),(0,a.kt)("li",{parentName:"ul"},"Added seeking by MessageId on the Reader"),(0,a.kt)("li",{parentName:"ul"},"Added seeking by message publish time on the Consumer and Reader"),(0,a.kt)("li",{parentName:"ul"},"Added GetLastMessageId on the Reader")),(0,a.kt)("h2",{id:"changed"},"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The protobuf-net dependency is upgraded from 2.4.6 to 3.0.73 to get support for ReadOnlySequence\\<byte",">")),(0,a.kt)("h2",{id:"fixed"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reconnection issues when seeking")))}p.isMDXComponent=!0}}]);