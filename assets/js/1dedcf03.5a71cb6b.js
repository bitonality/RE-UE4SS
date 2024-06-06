"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2227],{9941:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(4848),t=n(8453);const i={},c="UScriptStruct",l={id:"lua-api/classes/uscriptstruct",title:"UScriptStruct",description:"Inheritance",source:"@site/versioned_docs/version-3.0.1/lua-api/classes/uscriptstruct.md",sourceDirName:"lua-api/classes",slug:"/lua-api/classes/uscriptstruct",permalink:"/RE-UE4SS/lua-api/classes/uscriptstruct",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/lua-api/classes/uscriptstruct.md",tags:[],version:"3.0.1",frontMatter:{},sidebar:"docs",previous:{title:"UObjectReflection",permalink:"/RE-UE4SS/lua-api/classes/uobjectreflection"},next:{title:"UStruct",permalink:"/RE-UE4SS/lua-api/classes/ustruct"}},d={},o=[{value:"Inheritance",id:"inheritance",level:2},{value:"Metamethods",id:"metamethods",level:2},{value:"__index",id:"__index",level:3},{value:"__newindex",id:"__newindex",level:3},{value:"Methods",id:"methods",level:2},{value:"GetBaseAddress()",id:"getbaseaddress",level:3},{value:"GetStructAddress()",id:"getstructaddress",level:3},{value:"GetPropertyAddress()",id:"getpropertyaddress",level:3},{value:"IsValid()",id:"isvalid",level:3},{value:"IsMappedToObject()",id:"ismappedtoobject",level:3},{value:"IsMappedToProperty()",id:"ismappedtoproperty",level:3},{value:"type()",id:"type",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"uscriptstruct",children:"UScriptStruct"}),"\n",(0,r.jsx)(s.h2,{id:"inheritance",children:"Inheritance"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/RE-UE4SS/lua-api/classes/localobject",children:"LocalObject"})}),"\n",(0,r.jsx)(s.h2,{id:"metamethods",children:"Metamethods"}),"\n",(0,r.jsx)(s.h3,{id:"__index",children:"__index"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Usage:"})," ",(0,r.jsx)(s.code,{children:'UScriptStruct["StructMemberName"]'})," or ",(0,r.jsx)(s.code,{children:"UScriptStruct.StructMemberName"})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Return type:"})," ",(0,r.jsx)(s.code,{children:"auto"})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Returns the value for the supplied member name."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Can return any type, you can use the ",(0,r.jsx)(s.code,{children:"type()"})," function on the returned value to figure out what Lua class it's using (if non-trivial type)."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example:"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lua",children:"local scriptStruct = FindFirstOf('_UI_Items_C')\r\n\r\n-- Either of the following can be used:\r\nlocal item = scriptStruct['Item']\r\nlocal item = scriptStruct.Item\n"})}),"\n",(0,r.jsx)(s.h3,{id:"__newindex",children:"__newindex"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Usage:"})," ",(0,r.jsx)(s.code,{children:'UScriptStruct["StructMemberName"] = NewValue'})," or ",(0,r.jsx)(s.code,{children:"UScriptStruct.StructMemberName = NewValue"})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Attempts to set the value for the supplied member name to ",(0,r.jsx)(s.code,{children:"NewValue"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example:"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lua",children:"local scriptStruct = FindFirstOf('_UI_Items_C')\r\n\r\n-- Either of the following can be used:\r\nscriptStruct['Item'] = 5\r\nscriptStruct.Item = 5\n"})}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"getbaseaddress",children:"GetBaseAddress()"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Return type:"})," ",(0,r.jsx)(s.code,{children:"integer"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Returns:"})," the address in memory where the ",(0,r.jsx)(s.code,{children:"UObject"})," that this ",(0,r.jsx)(s.code,{children:"UScriptStruct"})," belongs to is located"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"getstructaddress",children:"GetStructAddress()"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Return type:"})," ",(0,r.jsx)(s.code,{children:"integer"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Returns:"})," the address in memory where this ",(0,r.jsx)(s.code,{children:"UScriptStruct"})," is located"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"getpropertyaddress",children:"GetPropertyAddress()"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Return type:"})," ",(0,r.jsx)(s.code,{children:"integer"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Returns:"})," the address in memory where the corresponding ",(0,r.jsx)(s.code,{children:"UProperty"}),"/",(0,r.jsx)(s.code,{children:"FProperty"})," is located"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"isvalid",children:"IsValid()"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Return type:"})," ",(0,r.jsx)(s.code,{children:"bool"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Returns:"})," whether the struct is valid"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"ismappedtoobject",children:"IsMappedToObject()"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Return type:"})," ",(0,r.jsx)(s.code,{children:"bool"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Returns:"})," whether the base object is valid"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"ismappedtoproperty",children:"IsMappedToProperty()"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Return type:"})," ",(0,r.jsx)(s.code,{children:"bool"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Returns:"}),"  whether the property is valid"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"type",children:"type()"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Return type:"})," ",(0,r.jsx)(s.code,{children:"string"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Returns:"}),' "UScriptStruct"']}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>l});var r=n(6540);const t={},i=r.createContext(t);function c(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);