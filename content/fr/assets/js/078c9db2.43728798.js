"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[22557],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||n;return r?o.createElement(g,i(i({ref:t},p),{},{components:r})):o.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<n;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88912:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),i=["components"],s={id:"tiered-storage-overview",title:"Overview of tiered storage",sidebar_label:"Overview",original_id:"tiered-storage-overview"},l=void 0,d={unversionedId:"tiered-storage-overview",id:"version-2.10.0/tiered-storage-overview",title:"Overview of tiered storage",description:"Pulsar's Tiered Storage feature allows older backlog data to be moved from BookKeeper to long term and cheaper storage, while still allowing clients to access the backlog as if nothing has changed.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-2.10.0/tiered-storage-overview.md",sourceDirName:".",slug:"/tiered-storage-overview",permalink:"/fr/docs/tiered-storage-overview",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/tiered-storage-overview.md",tags:[],version:"2.10.0",frontMatter:{id:"tiered-storage-overview",title:"Overview of tiered storage",sidebar_label:"Overview",original_id:"tiered-storage-overview"},sidebar:"version-2.10.0/docsSidebar",previous:{title:"REST APIs",permalink:"/fr/docs/sql-rest-api"},next:{title:"AWS S3 offloader",permalink:"/fr/docs/tiered-storage-aws"}},p={},c=[{value:"When to use tiered storage?",id:"when-to-use-tiered-storage",level:2},{value:"How does tiered storage work?",id:"how-does-tiered-storage-work",level:2}],u={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pulsar's ",(0,n.kt)("strong",{parentName:"p"},"Tiered Storage")," feature allows older backlog data to be moved from BookKeeper to long term and cheaper storage, while still allowing clients to access the backlog as if nothing has changed."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tiered storage uses ",(0,n.kt)("a",{parentName:"p",href:"https://jclouds.apache.org"},"Apache jclouds")," to support ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3")," and ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/"},"GCS (Google Cloud Storage)")," for long term storage."),(0,n.kt)("p",{parentName:"li"},"With jclouds, it is easy to add support for more ",(0,n.kt)("a",{parentName:"p",href:"https://jclouds.apache.org/reference/providers/#blobstore-providers"},"cloud storage providers")," in the future."),(0,n.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For more information about how to use the AWS S3 offloader with Pulsar, see ",(0,n.kt)("a",{parentName:"p",href:"tiered-storage-aws"},"here"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For more information about how to use the GCS offloader with Pulsar, see ",(0,n.kt)("a",{parentName:"p",href:"tiered-storage-gcs"},"here"),".")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tiered storage uses ",(0,n.kt)("a",{parentName:"p",href:"http://hadoop.apache.org/"},"Apache Hadoop")," to support filesystems for long term storage."),(0,n.kt)("p",{parentName:"li"},"With Hadoop, it is easy to add support for more filesystems in the future."),(0,n.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"For more information about how to use the filesystem offloader with Pulsar, see ",(0,n.kt)("a",{parentName:"p",href:"tiered-storage-filesystem"},"here"),"."))))),(0,n.kt)("h2",{id:"when-to-use-tiered-storage"},"When to use tiered storage?"),(0,n.kt)("p",null,"Tiered storage should be used when you have a topic for which you want to keep a very long backlog for a long time."),(0,n.kt)("p",null,"For example, if you have a topic containing user actions which you use to train your recommendation systems, you may want to keep that data for a long time, so that if you change your recommendation algorithm, you can rerun it against your full user history."),(0,n.kt)("h2",{id:"how-does-tiered-storage-work"},"How does tiered storage work?"),(0,n.kt)("p",null,"A topic in Pulsar is backed by a ",(0,n.kt)("strong",{parentName:"p"},"log"),", known as a ",(0,n.kt)("strong",{parentName:"p"},"managed ledger"),". This log is composed of an ordered list of segments. Pulsar only writes to the final segment of the log. All previous segments are sealed. The data within the segment is immutable. This is known as a ",(0,n.kt)("strong",{parentName:"p"},"segment oriented architecture"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Tiered storage",src:r(84567).Z,title:"Tiered Storage",width:"1110",height:"697"})),(0,n.kt)("p",null,"The tiered storage offloading mechanism takes advantage of segment oriented architecture. When offloading is requested, the segments of the log are copied one-by-one to tiered storage. All segments of the log (apart from the current segment) written to tiered storage can be offloaded."),(0,n.kt)("p",null,"Data written to BookKeeper is replicated to 3 physical machines by default. However, once a segment is sealed in BookKeeper, it becomes immutable and can be copied to long term storage. Long term storage can achieve cost savings by using mechanisms such as ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction"},"Reed-Solomon error correction")," to require fewer physical copies of data."),(0,n.kt)("p",null,"Before offloading ledgers to long term storage, you need to configure buckets, credentials, and other properties for the cloud storage service. Additionally, Pulsar uses multi-part objects to upload the segment data and brokers may crash while uploading the data. It is recommended that you add a life cycle rule for your bucket to expire incomplete multi-part upload after a day or two days to avoid getting charged for incomplete uploads. Moreover, you can trigger the offloading operation manually (via REST API or CLI) or automatically (via CLI)."),(0,n.kt)("p",null,"After offloading ledgers to long term storage, you can still query data in the offloaded ledgers with Pulsar SQL."),(0,n.kt)("p",null,"For more information about tiered storage for Pulsar topics, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-17:-Tiered-storage-for-Pulsar-topics"},"here"),"."))}m.isMDXComponent=!0},84567:function(e,t,r){t.Z=r.p+"assets/images/pulsar-tiered-storage-72d8b53762992cfeaa58ae3b48dd2522.png"}}]);