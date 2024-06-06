"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9545],{4779:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=s(4848),r=s(8453);const i={},l="UE4SS",c={id:"lua-api/classes/ue4ss",title:"UE4SS",description:"The UE4SS class is for interacting with UE4SS metadata.",source:"@site/versioned_docs/version-3.0.0/lua-api/classes/ue4ss.md",sourceDirName:"lua-api/classes",slug:"/lua-api/classes/ue4ss",permalink:"/RE-UE4SS/3.0.0/lua-api/classes/ue4ss",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/lua-api/classes/ue4ss.md",tags:[],version:"3.0.0",frontMatter:{},sidebar:"docs",previous:{title:"UClass",permalink:"/RE-UE4SS/3.0.0/lua-api/classes/uclass"},next:{title:"UEnum",permalink:"/RE-UE4SS/3.0.0/lua-api/classes/uenum"}},d={},o=[{value:"Inheritance",id:"inheritance",level:2},{value:"Methods",id:"methods",level:2},{value:"GetVersion()",id:"getversion",level:3}];function a(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"ue4ss",children:"UE4SS"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"UE4SS"})," class is for interacting with UE4SS metadata."]}),"\n",(0,t.jsx)(n.h2,{id:"inheritance",children:"Inheritance"}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"getversion",children:"GetVersion()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"})," the current version of UE4SS that is being used.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Return Value:"})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"#"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Information"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Major version"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Minor version"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Hotfix version"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example #1"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Warning: This only works in UE4SS 1.1+. See example #2 for UE4SS <=1.0."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local Major, Minor, Hotfix = UE4SS.GetVersion()\r\nprint(string.format("UE4SS v%d.%d.%d\\n", Major, Minor, Hotfix))\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example #2"})}),"\n",(0,t.jsxs)(n.p,{children:["This example shows how to distinguish between UE4SS <=1.0, which didn't have the ",(0,t.jsx)(n.code,{children:"UE4SS"})," class, and UE4SS >=1.1."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'if UE4SS == nil then\r\n    print("Running UE4SS <=1.0\\n")\r\nend\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var t=s(6540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);