"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8978],{9762:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var l=t(4848),s=t(8453);const i={},r="FindAllOf",a={id:"lua-api/global-functions/findallof",title:"FindAllOf",description:"The FindAllOf function will find all non-default instances of the supplied class name.",source:"@site/docs/lua-api/global-functions/findallof.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/findallof",permalink:"/dev/lua-api/global-functions/findallof",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/lua-api/global-functions/findallof.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ExecuteWithDelay",permalink:"/dev/lua-api/global-functions/executewithdelay"},next:{title:"FindFirstOf",permalink:"/dev/lua-api/global-functions/findfirstof"}},o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"findallof",children:"FindAllOf"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"FindAllOf"})," function will find all non-default instances of the supplied class name."]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"This function cannot be used to find non-instances or default instances."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"#"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Information"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{children:"Short name of the class to find instances of"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"#"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Sub Type"}),(0,l.jsx)(n.th,{children:"Information"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"nil or table"}),(0,l.jsx)(n.td,{children:"UObject, UClass, or AActor"}),(0,l.jsx)(n.td,{children:"nil if no instances were found, otherwise a numerically indexed table of all instances"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.p,{children:["Outputs the name of all objects that inherit from the ",(0,l.jsx)(n.code,{children:"Actor"})," class."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'local ActorInstances = FindAllOf("Actor")\r\nif not ActorInstances then\r\n    print("No instances of \'Actor\' were found\\n")\r\nelse\r\n    for Index, ActorInstance in pairs(ActorInstances) do\r\n        print(string.format("[%d] %s\\n", Index, ActorInstance:GetFullName()))\r\n    end\r\nend\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var l=t(6540);const s={},i=l.createContext(s);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);