"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1851],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>k});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},h=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,h=n(e,["components","mdxType","originalType","parentName"]),s=u(a),m=l,k=s["".concat(o,".").concat(m)]||s[m]||c[m]||i;return a?r.createElement(k,p(p({ref:t},h),{},{components:a})):r.createElement(k,p({ref:t},h))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,p=new Array(i);p[0]=m;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n[s]="string"==typeof e?e:l,p[1]=n;for(var u=2;u<i;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},20275:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>n,toc:()=>u});var r=a(87462),l=(a(67294),a(3905));const i={id:"pulsar-2.9.3",title:"Apache Pulsar 2.9.3",sidebar_label:"Apache Pulsar 2.9.3"},p=void 0,n={unversionedId:"versioned/pulsar-2.9.3",id:"versioned/pulsar-2.9.3",title:"Apache Pulsar 2.9.3",description:"2022-07-19",source:"@site/release-notes/versioned/pulsar-2.9.3.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.9.3",permalink:"/release-notes/versioned/pulsar-2.9.3",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-2.9.3",title:"Apache Pulsar 2.9.3",sidebar_label:"Apache Pulsar 2.9.3"}},o={},u=[{value:"2022-07-19",id:"2022-07-19",level:4},{value:"Important notice",id:"important-notice",level:3},{value:"Broker",id:"broker",level:4},{value:"Transaction",id:"transaction",level:4},{value:"Security",id:"security",level:4},{value:"Admin",id:"admin",level:4},{value:"Proxy",id:"proxy",level:4},{value:"Pulsar SQL",id:"pulsar-sql",level:4},{value:"Function",id:"function",level:4},{value:"Connector",id:"connector",level:4},{value:"Tiered Storage",id:"tiered-storage",level:4},{value:"Dependencies",id:"dependencies",level:4}],h={toc:u};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"2022-07-19"},"2022-07-19"),(0,l.kt)("h3",{id:"important-notice"},"Important notice"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[PIP-146]"," ManagedCursorInfo compression ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14542"},"#14542")),(0,l.kt)("li",{parentName:"ul"},"[PIP-153]"," Optimize metadataPositions in MLPendingAckStore ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15137"},"#15137")),(0,l.kt)("li",{parentName:"ul"},"[PIP-163]"," Add lowWaterMark check before appending entry to TB ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15424"},"#15424"))),(0,l.kt)("h4",{id:"broker"},"Broker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[cleanup][broker]"," Cleanup already deleted namespace topics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12597"},"#12597")),(0,l.kt)("li",{parentName:"ul"},"[cleanup][broker]"," Override close method to avoid caching exception ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15529"},"#15529")),(0,l.kt)("li",{parentName:"ul"},"[cleanup][broker]"," Remove useless code to avoid confusion in OpReadEntry#checkReadCompletion ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15104"},"#15104")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Avoid heartbeat topic to offload ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15008"},"#15008")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Cancel ",(0,l.kt)("inlineCode",{parentName:"li"},"fencedTopicMonitoringTask")," when topic closed normally ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15202"},"#15202")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Check for blank advertised listener name ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14306"},"#14306")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Close publishLimiter when disable it ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15520"},"#15520")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fast return if ack cumulative illegal ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15695"},"#15695")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix MessageDeduplication#inactiveProducers may not be persistence correctly ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15206"},"#15206")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix MultiRolesTokenAuthorizationProvider ",(0,l.kt)("inlineCode",{parentName:"li"},"authorize")," issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15454"},"#15454")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE in MessageDeduplication ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15820"},"#15820")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when ledger id not found in ",(0,l.kt)("inlineCode",{parentName:"li"},"OpReadEntry")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15837"},"#15837")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when put value to ",(0,l.kt)("inlineCode",{parentName:"li"},"RangeCache")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15707"},"#15707")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when set ",(0,l.kt)("inlineCode",{parentName:"li"},"AutoTopicCreationOverride")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15653"},"#15653")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when subscription is already removed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14363"},"#14363")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix REST produce msg redirect issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15551"},"#15551")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix call sync method in onPoliciesUpdate method ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13885"},"#13885")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix call sync method in onPoliciesUpdate method ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15227"},"#15227")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix cannot delete namespace with system topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14730"},"#14730")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix creating producer failure when set backlog quota ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15663"},"#15663")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix creating system namespace topic failure ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14949"},"#14949")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix deadlock in broker after race condition in topic creation failure ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15570"},"#15570")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix getPendingAckInternalStats redirect issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14876"},"#14876")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix inconsistent prompt message when schema version is empty using AVRO ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14626"},"#14626")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix incorrect entryId in warning logs when reading an entry from tiered storage ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14685"},"#14685")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix metadata store deadlock when checking BacklogQuota ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14634"},"#14634")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix no value present ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14891"},"#14891")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix normal topic named ends with ",(0,l.kt)("inlineCode",{parentName:"li"},"healthcheck"),"  becomes system topic issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14671"},"#14671")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix parameter saslJaasBrokerSectionName in broker.conf ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15110"},"#15110")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix potential to add duplicated consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15051"},"#15051")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix precision issue and initial value for Consumer#avgMessagesPerEntry ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14666"},"#14666")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix problem at RateLimiter#tryAcquire ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15306"},"#15306")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix producerFuture not completed in ServerCnx#handleProducer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14467"},"#14467")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix race condition between timeout and completion  in ",(0,l.kt)("inlineCode",{parentName:"li"},"OpAddEntry")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15233"},"#15233")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix race condition in updating lastMarkDeleteEntry field ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15031"},"#15031")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix rewind failed when ",(0,l.kt)("inlineCode",{parentName:"li"},"redeliverUnacknowledgedMessages")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15046"},"#15046")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix topic policy reader close bug ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14897"},"#14897")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix typo in enum name and handle closing of the channel properly since writeAndFlush is asynchronous ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15384"},"#15384")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix when nextValidLedger is null caused NPE ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13975"},"#13975")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix wrong prompt exception when getting the non-persistent topic list without GET_BUDNLE permission ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14638"},"#14638")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix wrong state for non-durable cursor ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14869"},"#14869")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix wrong unit of NIC speed on Linux ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15770"},"#15770")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix 404 error msg not being returned correctly using http lookup ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14677"},"#14677")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Follow up on race condition fixes in ManagedCursorImpl ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15067"},"#15067")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Remove the loadbalance/bundle-data node ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13164"},"#13164")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Return if reset in progress ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14978"},"#14978")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Use dispatchRateLimiterLock to update dispatchRateLimiter ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15601"},"#15601")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," When skipping updating mark delete position, execute callback with executor to prevent deadlock ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15971"},"#15971")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Expose configurationMetadataStore and localMetadataStore ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15661"},"#15661")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Filter the virtual NIC with relative path ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14829"},"#14829")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix MetadataStoreException$NotFoundException while doing topic lookup ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15633"},"#15633")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix calculation in getNumberOfEntriesInStorage ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15627"},"#15627")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix error log miss stack trace when create tenant fail ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14366"},"#14366")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix resource group does not report usage ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15292"},"#15292")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix duplicated delayed messages when all consumers disconnect ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14740"},"#14740")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix the pid occupied check when using pulsar-daemon start or stop process ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14701"},"#14701")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix potential NPE in Replicator ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15003"},"#15003")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Add log when updating namespace policies with error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14850"},"#14850")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Add publishRateLimitedTimes to topic metrics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15739"},"#15739")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Avoid using blocking calls for the async method ",(0,l.kt)("inlineCode",{parentName:"li"},"checkTopicOwnership")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15023"},"#15023")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Cancel offload tasks when managed ledger closed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14545"},"#14545")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Close connection if a ping or pong message cannot be sent ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15382"},"#15382")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Configure DLog Bookie, Pulsar, and Admin clients via pass-through config ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15818"},"#15818")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Full-support SSL provider, ciphers, and protocols for broker service and proxy service ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14569"},"#14569")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Ignore the print the log that the topic does not exist ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13535"},"#13535")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Optimize RawReader#create when using Compactor ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14447"},"#14447")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Optimize find nics process ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14340"},"#14340")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Optimize memory usage: support to  shrink for pendingAcks map ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14515"},"#14515")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Provide an accurate error message when set ",(0,l.kt)("inlineCode",{parentName:"li"},"autoTopicCreation ")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14684"},"#14684")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Reduce unnecessary expansions for ConcurrentLong map and set ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14562"},"#14562")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Set splitNamespaceBundle with ",(0,l.kt)("inlineCode",{parentName:"li"},"readonly=false")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14680"},"#14680")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Skip unnecessary DNS resolution when creating AuthenticationDataHttp instance ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15221"},"#15221")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Support advertised listeners for HTTP and HTTPS services ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14839"},"#14839")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Support shrink for ConcurrentSortedLongPairSet ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15354"},"#15354")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Support shrink for map or set ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14663"},"#14663")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Support shrink in ConcurrentLongHashMap ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14497"},"#14497")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Switch to rely on Netty for Hostname Verification ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15824"},"#15824")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Use shrink map for message redelivery ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15342"},"#15342")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Use tlsCertRefreshCheckDurationSec instead of 0 for refresh value ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15075"},"#15075")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Add metrics for pulsar web service thread pool ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15741"},"#15741")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Allow pulsar_tool_env.sh PULSAR_MEM to be Overridden ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15868"},"#15868")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Ignore case when obfuscating passwords in configuration scripts ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15077"},"#15077"))),(0,l.kt)("h4",{id:"transaction"},"Transaction"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Close the transaction buffer when deleting topics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14895"},"#14895")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix potentially unfinishable future. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15208"},"#15208")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix potentially unfinished CompletableFuture ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14973"},"#14973")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction PendingAck lowWaterMark ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15530"},"#15530")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction REST API redirect issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15017"},"#15017")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction admin redirect get 500 due to getCause ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14965"},"#14965")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction pendingAckStore asyncMarkDelete ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14974"},"#14974")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Make transaction stats consistent at end txn ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15472"},"#15472")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Properly close transaction-buffer-sub non durable cursor ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14900"},"#14900")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Topic transaction buffer recover don't close reader when throw RuntimeException ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15361"},"#15361")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," TransactionMetadataService don't connect again if store exist ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15114"},"#15114")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Avoid too many ServiceUnitNotReadyException for transaction buffer handler ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14894"},"#14894")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix NPE of TransactionMetaStoreHandler ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15840"},"#15840")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix cannot enable transaction when is allow auto update schema enabled=fasle ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14809"},"#14809")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix pending ack is recovering throw CursorAlreadyClosedxception ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14781"},"#14781")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix some exception handle in transaction buffer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14808"},"#14808")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction buffer no snapshot close recover reader ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14830"},"#14830")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction buffer recover BrokerMetadataException close topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14709"},"#14709")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction buffer recover reader and writer fail ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14801"},"#14801")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction buffer recover throw cursor already close ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14807"},"#14807")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction log recover throw cursor already close ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14810"},"#14810")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction pending ack store managed ledger WriteFail state ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14738"},"#14738")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction producer stuck problem ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15061"},"#15061")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction component recover fillQueue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15418"},"#15418")),(0,l.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transasction ack batch message ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15875"},"#15875")),(0,l.kt)("li",{parentName:"ul"},"[improve][txn]"," Avoid creating multiple future and exception handlers ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15089"},"#15089")),(0,l.kt)("li",{parentName:"ul"},"[improve][txn]"," Improve transaction perf logs ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14816"},"#14816")),(0,l.kt)("li",{parentName:"ul"},"[improve][txn]"," Optimize topic lookup when TC end tx ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14991"},"#14991")),(0,l.kt)("li",{parentName:"ul"},"[improve][txn]"," Optimize transaction lowWaterMark to clean useless data faster ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15592"},"#15592")),(0,l.kt)("li",{parentName:"ul"},"[improve][txn]"," Support configurable ",(0,l.kt)("inlineCode",{parentName:"li"},"transactionBufferClientOperationTimeoutInMills")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15011"},"#15011"))),(0,l.kt)("h4",{id:"security"},"Security"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][auth]"," Add timeout of sync methods and  avoid call sync method for AuthoriationService ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15694"},"#15694")),(0,l.kt)("li",{parentName:"ul"},"[fix][auth]"," Fix debug log authenticate role error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14784"},"#14784")),(0,l.kt)("li",{parentName:"ul"},"[fix][auth]"," Fix grant all permissions but can't list topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15501"},"#15501")),(0,l.kt)("li",{parentName:"ul"},"[fix][auth]"," Fix handling single role and non-jwt-token in MultiRolesTokenAuthorizationProvider ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14857"},"#14857")),(0,l.kt)("li",{parentName:"ul"},"[fix][auth]"," Generate correct well-known OpenID configuration URL ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15928"},"#15928")),(0,l.kt)("li",{parentName:"ul"},"[fix][auth]"," Role with namespace produce authz can also get topics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15740"},"#15740")),(0,l.kt)("li",{parentName:"ul"},"[improve][auth]"," Add KeyStore support in WebSocket, Function Worker HTTPS Servers  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15084"},"#15084")),(0,l.kt)("li",{parentName:"ul"},"[improve][auth]"," Allow to config web server's cipher and protocols ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13354"},"#13354")),(0,l.kt)("li",{parentName:"ul"},"[improve][auth]"," Full-support set SSL provider, ciphers, and protocols ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13740"},"#13740")),(0,l.kt)("li",{parentName:"ul"},"[improve][auth]"," Improve skipping of DNS resolution when creating AuthenticationDataHttp instance ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15228"},"#15228")),(0,l.kt)("li",{parentName:"ul"},"[improve][auth]"," Optimize the logic of allowing namespace operation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15731"},"#15731")),(0,l.kt)("li",{parentName:"ul"},"[improve][auth]"," Remove sensitive msg from consumer/producer stats log ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15483"},"#15483"))),(0,l.kt)("h4",{id:"admin"},"Admin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix NPE in PulsarAdminBuilder when the service is not set ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14769"},"#14769")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix pulsar-admin not prompting message when there is a 500 error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14856"},"#14856")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix reach max tenants error if the tenant already exists ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15932"},"#15932")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix typo in validation message ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16021"},"#16021")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Remove the trust certs check ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14764"},"#14764"))),(0,l.kt)("h4",{id:"proxy"},"Proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Fix proxy connection leak when inbound connection closes while connecting is in progress ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15366"},"#15366")),(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Log warning when opening connection to broker fails ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14710"},"#14710")),(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Remove unnecessary blocking DNS lookup in LookupProxyHandler ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15415"},"#15415")),(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Fix DNS server denial-of-service issue when DNS entry expires ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15403"},"#15403")),(0,l.kt)("li",{parentName:"ul"},"[improve][proxy]"," Configure Netty DNS resolver to match JDK DNS caching setting, share DNS resolver instance in Proxy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15219"},"#15219")),(0,l.kt)("li",{parentName:"ul"},"[improve][proxy]"," Refactor Proxy code and fix connection stalling by switching to auto read mode ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14713"},"#14713"))),(0,l.kt)("h4",{id:"pulsar-sql"},"Pulsar SQL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][sql]"," Fix the decimal type error convert in json schema ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15687"},"#15687")),(0,l.kt)("li",{parentName:"ul"},"[improve][sql]"," Add Java version trim agent for presto 332 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15236"},"#15236")),(0,l.kt)("li",{parentName:"ul"},"[improve][sql]"," Pulsar SQL support for Decimal data type ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15153"},"#15153"))),(0,l.kt)("h4",{id:"function"},"Function"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][function]"," Pass configured metricsPort to k8s runtime ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14502"},"#14502")),(0,l.kt)("li",{parentName:"ul"},"[fix][function]"," Check executor null when close the FileSource ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15247"},"#15247")),(0,l.kt)("li",{parentName:"ul"},"[fix][function]"," Fix pulsar-managed runtimes failed start function with package URL from package management service ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14814"},"#14814")),(0,l.kt)("li",{parentName:"ul"},"[fix][function]"," Fix some IOExceptions when create functions from package URL ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14553"},"#14553")),(0,l.kt)("li",{parentName:"ul"},"[fix][function]"," Handle NPE when ",(0,l.kt)("inlineCode",{parentName:"li"},"getLeader")," returns null ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15058"},"#15058")),(0,l.kt)("li",{parentName:"ul"},"[fix][function]"," Provide default error handler for function log appender ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15728"},"#15728")),(0,l.kt)("li",{parentName:"ul"},"[fix][function]"," Refine file io connector ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15250"},"#15250"))),(0,l.kt)("h4",{id:"connector"},"Connector"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][connector]"," Pass client builder if no service URL is provided to Debezium connector ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12145"},"#12145")),(0,l.kt)("li",{parentName:"ul"},"[fix][connector]"," Throw exceptions when Kafka offset backing store failed to start  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14491"},"#14491"))),(0,l.kt)("h4",{id:"tiered-storage"},"Tiered Storage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][tiered-storage]"," Fix NoClassDefFoundError: com/google/inject/AbstractModule in pulsar-io/batch-data-generator and Jcloud offloader ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14150"},"#14150")),(0,l.kt)("li",{parentName:"ul"},"[improve][tiered-storage]"," Add debug information  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14907"},"#14907")),(0,l.kt)("li",{parentName:"ul"},"[improve][tiered-storage]"," Add pure S3 provider for the offloader ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15710"},"#15710")),(0,l.kt)("li",{parentName:"ul"},"[improve][tiered-storage]"," Reduce CPU usage when offloading the ledger ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15063"},"#15063")),(0,l.kt)("li",{parentName:"ul"},"[improve][tiered-storage]"," Upgrade JClouds to 2.5.0 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15649"},"#15649"))),(0,l.kt)("h4",{id:"dependencies"},"Dependencies"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add suppression for Kotlin stdlib CVE-2022-24329 - part 2  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14715"},"#14715")),(0,l.kt)("li",{parentName:"ul"},"Add suppression for Kotlin stdlib CVE-2022-24329 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14629"},"#14629")),(0,l.kt)("li",{parentName:"ul"},"Bump pyyaml from 5.3.1 to 5.4.1 to solve CVE-2020-14343 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15989"},"#15989")),(0,l.kt)("li",{parentName:"ul"},"Fix false positive google-http-client-gson-1.41.0.jar ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15651"},"#15651")),(0,l.kt)("li",{parentName:"ul"},"Java version trim agent presto332 branch2.9 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15326"},"#15326")),(0,l.kt)("li",{parentName:"ul"},"Remove --illegal-access errors resulting from Google Guice (upgrade to 5.0.1 and JClouds to 2.4.0) ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13810"},"#13810")),(0,l.kt)("li",{parentName:"ul"},"Remove --illegal-access errors resulting from Google Guice - Pulsar IO, Offloaders and Pulsar SQL - Bump Guice to 5.1.0  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14300"},"#14300")),(0,l.kt)("li",{parentName:"ul"},"Upgrade BookKeeper to 4.14.5 (2.8, 2.9, 2.10 branches) ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15581"},"#15581")),(0,l.kt)("li",{parentName:"ul"},"Upgrade Hadoop to 3.3.3 to get rid of CVE-2022-26612 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15660"},"#15660")),(0,l.kt)("li",{parentName:"ul"},"Upgrade Netty Reactive Streams to 2.0.6 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15990"},"#15990")),(0,l.kt)("li",{parentName:"ul"},"Upgrade Netty to 4.1.76.Final, Netty Tcnative, grpc and protobuf ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15212"},"#15212")),(0,l.kt)("li",{parentName:"ul"},"Upgrade Netty to 4.1.77.Final and netty-tcnative to 2.0.52.Final ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15646"},"#15646")),(0,l.kt)("li",{parentName:"ul"},"Upgrade jackson and jackson-databind (2.13.2.1) to get rid of CVE-2020-36518 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14871"},"#14871")),(0,l.kt)("li",{parentName:"ul"},"Use grpc-bom to align grpc library versions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15234"},"#15234")),(0,l.kt)("li",{parentName:"ul"},"Remove log4j for CVE-2022-23307 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15109"},"#15109"))))}s.isMDXComponent=!0}}]);