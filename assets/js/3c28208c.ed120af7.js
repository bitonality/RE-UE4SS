"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3114],{8479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(4848),i=n(8453);const s={},c="StaticFindObject",a={id:"lua-api/global-functions/staticfindobject",title:"StaticFindObject",description:"The StaticFindObject function is used to find any object that inherits from UObject that currently exists in memory.",source:"@site/docs/lua-api/global-functions/staticfindobject.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/staticfindobject",permalink:"/RE-UE4SS/dev/lua-api/global-functions/staticfindobject",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/lua-api/global-functions/staticfindobject.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"StaticConstructObject",permalink:"/RE-UE4SS/dev/lua-api/global-functions/staticconstructobject"},next:{title:"UnregisterHook",permalink:"/RE-UE4SS/dev/lua-api/global-functions/unregisterhook"}},o={},d=[{value:"Parameters (overload #1)",id:"parameters-overload-1",level:2},{value:"Parameters (overload #2)",id:"parameters-overload-2",level:2},{value:"Return Value (overload #1 &amp; #2)",id:"return-value-overload-1--2",level:2},{value:"Example (overload #1)",id:"example-overload-1",level:2}];function l(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"staticfindobject",children:"StaticFindObject"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"StaticFindObject"})," function is used to find any object that inherits from ",(0,r.jsx)(t.code,{children:"UObject"})," that currently exists in memory."]}),"\n",(0,r.jsx)(t.p,{children:"This function is the recommended way of retrieving non-instance objects such as objects of type UClass or UFunction."}),"\n",(0,r.jsx)(t.h2,{id:"parameters-overload-1",children:"Parameters (overload #1)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Information"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Full name of the object to find, without the type prefix"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"parameters-overload-2",children:"Parameters (overload #2)"}),"\n",(0,r.jsxs)(t.p,{children:["The parameters for this overload mimics the ",(0,r.jsx)(t.code,{children:"StaticFindObject"})," function from UE4.",(0,r.jsx)(t.br,{}),"\n","For more information see: ",(0,r.jsx)(t.a,{href:"https://docs.unrealengine.com/4.27/en-US/API/Runtime/CoreUObject/UObject/StaticFindObject/",children:"Unreal Engine API -> StaticFindObject"})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Information"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"UClass"}),(0,r.jsx)(t.td,{children:"The class of the object to find, can be nil."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"UObject"}),(0,r.jsx)(t.td,{children:"The outer to look inside. All packages are searched if nil."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Name of the object to find"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Whether to require an exact match with the UClass parameter"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"return-value-overload-1--2",children:"Return Value (overload #1 & #2)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Information"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"UObject, UClass, or AActor"}),(0,r.jsx)(t.td,{children:"Object is only valid if an instance was found"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"example-overload-1",children:"Example (overload #1)"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:'local CharacterInstance = StaticFindObject("/Script/Engine.Character")\r\nif not CharacterInstance:IsValid() then\r\n    print("No instance of class \'Character\' was found.")\r\nend\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);