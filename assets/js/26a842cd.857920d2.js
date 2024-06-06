"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1127],{3751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var r=t(4848),i=t(8453);const d={},s="FName",a={id:"lua-api/global-functions/fname",title:"FName",description:"The FName function is used to get an FName representation of a string or integer.",source:"@site/versioned_docs/version-3.0.0/lua-api/global-functions/fname.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/fname",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/fname",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.0/lua-api/global-functions/fname.md",tags:[],version:"3.0.0",frontMatter:{},sidebar:"docs",previous:{title:"FindObjects",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/findobjects"},next:{title:"ForEachUObject",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/foreachuobject"}},o={},l=[{value:"Parameters (overload #1)",id:"parameters-overload-1",level:2},{value:"Parameters (overload #2)",id:"parameters-overload-2",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"fname",children:"FName"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"FName"})," function is used to get an ",(0,r.jsx)(n.code,{children:"FName"})," representation of a ",(0,r.jsx)(n.code,{children:"string"})," or ",(0,r.jsx)(n.code,{children:"integer"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"parameters-overload-1",children:"Parameters (overload #1)"}),"\n",(0,r.jsxs)(n.p,{children:["This overload mimics ",(0,r.jsx)(n.a,{href:"https://docs.unrealengine.com/4.27/en-US/API/Runtime/Core/UObject/FName/__ctor/7/",children:"FName::FName"})," with the ",(0,r.jsx)(n.code,{children:"FindType"})," param set to ",(0,r.jsx)(n.code,{children:"EFindName::FName_Add"}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"#"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Information"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"String that you'd like to get an FName representation of"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"EFindName"}),(0,r.jsxs)(n.td,{children:["Finding or adding name type. It can be either ",(0,r.jsx)(n.code,{children:"FNAME_Find"})," or ",(0,r.jsx)(n.code,{children:"FNAME_Add"}),". Default is ",(0,r.jsx)(n.code,{children:"FNAME_Add"})," if not explicitly supplied"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"parameters-overload-2",children:"Parameters (overload #2)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"#"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Information"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsxs)(n.td,{children:["64-bit integer representing the ",(0,r.jsx)(n.code,{children:"ComparisonIndex"})," part that you'd like to get an FName representation of"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"EFindName"}),(0,r.jsxs)(n.td,{children:["Finding or adding name type. It can be either ",(0,r.jsx)(n.code,{children:"FNAME_Find"})," or ",(0,r.jsx)(n.code,{children:"FNAME_Add"}),". Default is ",(0,r.jsx)(n.code,{children:"FNAME_Add"})," if not explicitly supplied"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"#"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Information"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"FName"}),(0,r.jsxs)(n.td,{children:["FName corresponding to the string or ",(0,r.jsx)(n.code,{children:"ComparisonIndex"}),', if one exists, or the "None" FName if one doesn\'t exist. If ',(0,r.jsx)(n.code,{children:"FNAME_Add"})," is supplied then it adds the name if it doesn't exist"]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'local name = FName("MyName")\r\n\r\nprint(name) -- MyName\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const i={},d=r.createContext(i);function s(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);