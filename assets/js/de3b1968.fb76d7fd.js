"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[551],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},i="[tutorial-template-1] Learn how to add",l={unversionedId:"tutorial-basics/tutorial-template-1",id:"tutorial-basics/tutorial-template-1",title:"[tutorial-template-1] Learn how to add",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",source:"@site/docs/tutorial-basics/tutorial-template-1.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/tutorial-template-1",permalink:"/TutorialSample/docs/tutorial-basics/tutorial-template-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/tutorial-template-1.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basics",permalink:"/TutorialSample/docs/category/tutorial---basics"},next:{title:"[tutorial-template-2]",permalink:"/TutorialSample/docs/tutorial-basics/tutorial-template-2"}},s={},c=[{value:"ATutorialSampleCharacter::BeginPlay",id:"atutorialsamplecharacterbeginplay",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tutorial-template-1-learn-how-to-add"},"[tutorial-template-1]"," Learn how to add"),(0,n.kt)("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),(0,n.kt)("h3",{id:"atutorialsamplecharacterbeginplay"},"[ATutorialSampleCharacter::BeginPlay]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"{4} showLineNumbers","{4}":!0,showLineNumbers:!0},"void ATutorialSampleCharacter::BeginPlay() {\n  // add comment\n  // Call the base class\n  Super::BeginPlay();\n}\n")))}p.isMDXComponent=!0}}]);