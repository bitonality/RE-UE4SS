"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2054],{5223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=r(4848),n=r(8453);const o={},i="RegisterCustomProperty",a={id:"lua-api/global-functions/registercustomproperty",title:"RegisterCustomProperty",description:"The RegisterCustomProperty function is used to register custom properties for use just as if it were a reflected native or BP property.",source:"@site/versioned_docs/version-3.0.0/lua-api/global-functions/registercustomproperty.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/registercustomproperty",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/registercustomproperty",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.0/lua-api/global-functions/registercustomproperty.md",tags:[],version:"3.0.0",frontMatter:{},sidebar:"docs",previous:{title:"RegisterCustomEvent",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/registercustomevent"},next:{title:"RegisterHook",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/registerhook"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"registercustomproperty",children:"RegisterCustomProperty"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"RegisterCustomProperty"})," function is used to register custom properties for use just as if it were a reflected native or BP property."]}),"\n",(0,s.jsxs)(t.p,{children:["This is an advanced function that's used to add support for non-reflected properties in the ",(0,s.jsx)(t.code,{children:"__index"})," metamethod in multiple metatables."]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Sub Type"}),(0,s.jsx)(t.th,{children:"Information"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"table"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/UE4SS/UE4SS/wiki/Table%3A-CustomPropertyInfo",children:"CustomPropertyInfo"})}),(0,s.jsx)(t.td,{children:"A table containing all of the required information for registering a custom property"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["Registers a custom property with the name ",(0,s.jsx)(t.code,{children:"MySimpleCustomProperty"})," that accesses whatever data is at offset ",(0,s.jsx)(t.code,{children:"0xF40"})," in any instance of class ",(0,s.jsx)(t.code,{children:"Character"})," as if it was an ",(0,s.jsx)(t.code,{children:"IntProperty"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["It then grabs that value of the first instance of the class ",(0,s.jsx)(t.code,{children:"Character"})," as an example of how the system works."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:'RegisterCustomProperty({\r\n    ["Name"] = "MySimpleCustomProperty",\r\n    ["Type"] = PropertyTypes.IntProperty,\r\n    ["BelongsToClass"] = "/Script/Engine.Character"\r\n    ["OffsetInternal"] = 0xF40\r\n})\r\n\r\nlocal CharacterInstance = FindFirstOf("Character")\r\nif CharacterInstance:IsValid() then\r\n    local MySimplePropertyValue = CharacterInstance.MySimpleCustomProperty\r\nend\n'})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var s=r(6540);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);