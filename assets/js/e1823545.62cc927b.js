"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2986],{3940:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var i=t(4848),s=t(8453);const r={},l="FindFirstOf",a={id:"lua-api/global-functions/findfirstof",title:"FindFirstOf",description:"The FindFirstOf function will find the first non-default instance of the supplied class name.",source:"@site/versioned_docs/version-3.0.0/lua-api/global-functions/findfirstof.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/findfirstof",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/findfirstof",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/lua-api/global-functions/findfirstof.md",tags:[],version:"3.0.0",frontMatter:{},sidebar:"docs",previous:{title:"FindAllOf",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/findallof"},next:{title:"FindObject",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/findobject"}},d={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function c(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"findfirstof",children:"FindFirstOf"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"FindFirstOf"})," function will find the first non-default instance of the supplied class name."]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"This function cannot be used to find non-instances or default instances."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"#"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Information"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"string"}),(0,i.jsx)(e.td,{children:"Short name of the class to find an instance of"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"#"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Information"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"UObject, UClass, or AActor"}),(0,i.jsx)(e.td,{children:"Object is only valid if an instance was found"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lua",children:'local CharacterInstance = FindFirstOf("Character")\r\nif not CharacterInstance:IsValid() then\r\n    print("No instance of class \'Character\' was found.")\r\nend\n'})})]})}function f(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function l(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);