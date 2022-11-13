"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[89356],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},42679:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={id:"preview",title:"Content Preview Guide",sidebar_label:"Content Preview Guide"},l=void 0,o={unversionedId:"documentation/preview",id:"documentation/preview",title:"Content Preview Guide",description:"This guide explains why and how to preview Pulsar content locally with detailed steps and various examples.",source:"@site/contribute/documentation/preview.md",sourceDirName:"documentation",slug:"/documentation/preview",permalink:"/contribute/documentation/preview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/contribute/documentation/preview.md",tags:[],version:"current",lastUpdatedBy:"Pulsar Site Updater",lastUpdatedAt:1668340922,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{id:"preview",title:"Content Preview Guide",sidebar_label:"Content Preview Guide"},sidebar:"sidebar",previous:{title:"Naming Convention Guide",permalink:"/contribute/documentation/naming"},next:{title:"Writing Syntax Guide",permalink:"/contribute/documentation/syntax"}},p={},s=[{value:"Why preview changes locally?",id:"why-preview-changes-locally",level:2},{value:"How to preview changes locally?",id:"how-to-preview-changes-locally",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Preview doc (markdown) changes",id:"preview-doc-markdown-changes",level:3},{value:"Preview doc (Java API) changes",id:"preview-doc-java-api-changes",level:3},{value:"Preview website changes",id:"preview-website-changes",level:3},{value:"Stop preview",id:"stop-preview",level:3},{value:"Maintenance info",id:"maintenance-info",level:3}],c={toc:s};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains why and how to preview Pulsar content locally with detailed steps and various examples."),(0,r.kt)("h2",{id:"why-preview-changes-locally"},"Why preview changes locally?"),(0,r.kt)("p",null,"It is ",(0,r.kt)("strong",{parentName:"p"},"required")," to preview your changes locally and attach the preview screenshots in your PR description. It brings many benefits, including but not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can test your writings"),(0,r.kt)("p",{parentName:"li"},"  It\u2019s a way to check whether you use the correct ",(0,r.kt)("a",{parentName:"p",href:"/contribute/documentation/syntax"},"Pulsar Documentation Writing Syntax")," and debug issues. You ",(0,r.kt)("strong",{parentName:"p"},"must ensure")," docs can be compiled and published correctly.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can get your PR merged more quickly."),(0,r.kt)("p",{parentName:"li"},"  Reviewers know your changes clearly and can speed up the review process."))),(0,r.kt)("h2",{id:"how-to-preview-changes-locally"},"How to preview changes locally?"),(0,r.kt)("p",null,"Pulsar documentation is built using Docusaurus. To preview your changes as you edit the files, you can run a local development server that serves your website and reflect the latest changes."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To verify docs are built correctly before submitting a contribution, you should set up your local environment to build and display the docs locally."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Node >= 16.14")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Yarn >= 1.5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Although you can use Linux, macOS, or Windows to build locally the Pulsar documentation, macOS is the preferred build environment as it offers the most complete support for documentation building."))),(0,r.kt)("h3",{id:"preview-doc-markdown-changes"},"Preview doc (markdown) changes"),(0,r.kt)("p",null,"Follow these steps to build the doc (markdown) preview on your local machine."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the correct repo."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd pulsar/site2/website\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to preview changes."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Preview ",(0,r.kt)("strong",{parentName:"p"},"master")," changes"),(0,r.kt)("p",{parentName:"li"},"If you update master docs, use the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh start.sh\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Preview ",(0,r.kt)("strong",{parentName:"p"},"historical")," changes"),(0,r.kt)("p",{parentName:"li"},"  If you update versioned docs, use the following command."),(0,r.kt)("p",{parentName:"li"},"  It may take a few more minutes to complete the process."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh start.sh <version-number> <version-number>\n")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"alt_text",src:a(50079).Z,width:"936",height:"568"})))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"By default, a browser window will open at http://localhost:3000 to show the changes."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"alt_text",src:a(79223).Z,width:"936",height:"678"})))),(0,r.kt)("h3",{id:"preview-doc-java-api-changes"},"Preview doc (Java API) changes"),(0,r.kt)("p",null,"Follow these steps to build the doc (Java API) preview on your local machine on the ",(0,r.kt)("strong",{parentName:"p"},"master")," branch."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the correct repo."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd pulsar/site2/tools\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to generate the ",(0,r.kt)("inlineCode",{parentName:"p"},".html")," files."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh javadoc-gen.sh\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the target ",(0,r.kt)("inlineCode",{parentName:"p"},".html")," file to preview the updates."),(0,r.kt)("p",{parentName:"li"},"For example, if you change the ",(0,r.kt)("a",{parentName:"p",href:"http://pulsar-client-api/src/main/java/org/apache/pulsar/client/api/ConsumerBuilder.java"},"ConsumerBuilder.java")," for ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/2.11.0/org/apache/pulsar/client/api/ConsumerBuilder.html"},"Pulsar Java docs"),", you can navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"generated-site/api/client/{version}/org/apache/pulsar/client/api/")," directory and open the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConsumerBuilder.html")," file to preview the updates."))),(0,r.kt)("h3",{id:"preview-website-changes"},"Preview website changes"),(0,r.kt)("p",null,"Pulsar website changes refer to all the changes made to the Pulsar website, including but not limited to the following pages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/release-notes/"},"Release Notes page")," \u2705"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/ecosystem"},"Ecosystem page")," \u2705"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/case-studies"},"Case studies page")," \u2705"),(0,r.kt)("li",{parentName:"ul"},"\u2026"),(0,r.kt)("li",{parentName:"ul"},"(except docs \u274c)")),(0,r.kt)("p",null,"Follow these steps to build the website preview on your local machine."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the correct repo."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd pulsar-site/site2/website-next\n")))),(0,r.kt)("p",null,"2\ufe0f. Run the following command to preview changes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Preview ",(0,r.kt)("strong",{parentName:"p"},"master")," changes"),(0,r.kt)("p",{parentName:"li"}," If you submit changes to master, use the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./preview.sh\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Preview ",(0,r.kt)("strong",{parentName:"p"},"historical")," changes"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./preview.sh <version-number> <version-number> \u2026\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u2757\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use a space between ",(0,r.kt)("inlineCode",{parentName:"p"},"<version-number> <version-number>"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you want to preview multiple version changes, append ",(0,r.kt)("inlineCode",{parentName:"p"},"<version-number>")," with blanks."))),(0,r.kt)("p",{parentName:"blockquote"},"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"./preview.sh 2.9.1 2.9.2 2.9.3"),".")))),(0,r.kt)("h3",{id:"stop-preview"},"Stop preview"),(0,r.kt)("p",null,"If you want to stop the preview, use one of the following methods."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Method 1: Switch to your command-line interface and press ",(0,r.kt)("strong",{parentName:"li"},"Control+C"),"."),(0,r.kt)("li",{parentName:"ul"},"Method 2: Switch to your browser and close the preview page.")),(0,r.kt)("h3",{id:"maintenance-info"},"Maintenance info"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the old Pulsar website, using ",(0,r.kt)("inlineCode",{parentName:"li"}," yarn start")," can preview all (master + historical) changes. However, to speed up the build process, for the new Pulsar website, using ",(0,r.kt)("inlineCode",{parentName:"li"},"./preview.sh "),"only preview master changes.")))}u.isMDXComponent=!0},50079:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/preview-1-578827ee345dec728e78e598e498a9de.png"},79223:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/preview-2-3e284d8b7c2292bcb606955218a65a23.png"}}]);