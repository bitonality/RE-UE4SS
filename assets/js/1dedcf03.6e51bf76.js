"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2227],{9941:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=n(4848),r=n(8453);const i={},l="UScriptStruct",c={id:"lua-api/classes/uscriptstruct",title:"UScriptStruct",description:"Inheritance",source:"@site/versioned_docs/version-3.0.1/lua-api/classes/uscriptstruct.md",sourceDirName:"lua-api/classes",slug:"/lua-api/classes/uscriptstruct",permalink:"/RE-UE4SS/lua-api/classes/uscriptstruct",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/lua-api/classes/uscriptstruct.md",tags:[],version:"3.0.1",frontMatter:{},sidebar:"docs",previous:{title:"UObjectReflection",permalink:"/RE-UE4SS/lua-api/classes/uobjectreflection"},next:{title:"UStruct",permalink:"/RE-UE4SS/lua-api/classes/ustruct"}},d={},h=[{value:"Inheritance",id:"inheritance",level:2},{value:"Metamethods",id:"metamethods",level:2},{value:"__index",id:"__index",level:3},{value:"__newindex",id:"__newindex",level:3},{value:"Methods",id:"methods",level:2},{value:"GetBaseAddress()",id:"getbaseaddress",level:3},{value:"GetStructAddress()",id:"getstructaddress",level:3},{value:"GetPropertyAddress()",id:"getpropertyaddress",level:3},{value:"IsValid()",id:"isvalid",level:3},{value:"IsMappedToObject()",id:"ismappedtoobject",level:3},{value:"IsMappedToProperty()",id:"ismappedtoproperty",level:3},{value:"type()",id:"type",level:3}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"uscriptstruct",children:"UScriptStruct"}),"\n",(0,t.jsx)(s.h2,{id:"inheritance",children:"Inheritance"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/RE-UE4SS/lua-api/classes/localobject",children:"LocalObject"})}),"\n",(0,t.jsx)(s.h2,{id:"metamethods",children:"Metamethods"}),"\n",(0,t.jsx)(s.h3,{id:"__index",children:"__index"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Usage:"})," ",(0,t.jsx)(s.code,{children:'UScriptStruct["StructMemberName"]'})," or ",(0,t.jsx)(s.code,{children:"UScriptStruct.StructMemberName"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Return type:"})," ",(0,t.jsx)(s.code,{children:"auto"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Returns the value for the supplied member name."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Can return any type, you can use the ",(0,t.jsx)(s.code,{children:"type()"})," function on the returned value to figure out what Lua class it's using (if non-trivial type)."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Example:"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lua",children:"local scriptStruct = FindFirstOf('_UI_Items_C')\r\n\r\n-- Either of the following can be used:\r\nlocal item = scriptStruct['Item']\r\nlocal item = scriptStruct.Item\n"})}),"\n",(0,t.jsx)(s.h3,{id:"__newindex",children:"__newindex"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Usage:"})," ",(0,t.jsx)(s.code,{children:'UScriptStruct["StructMemberName"] = NewValue'})," or ",(0,t.jsx)(s.code,{children:"UScriptStruct.StructMemberName = NewValue"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Attempts to set the value for the supplied member name to ",(0,t.jsx)(s.code,{children:"NewValue"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Example:"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lua",children:"local scriptStruct = FindFirstOf('_UI_Items_C')\r\n\r\n-- Either of the following can be used:\r\nscriptStruct['Item'] = 5\r\nscriptStruct.Item = 5\n"})}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(s.h3,{id:"getbaseaddress",children:"GetBaseAddress()"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Return type:"})," ",(0,t.jsx)(s.code,{children:"integer"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Returns:"})," the address in memory where the ",(0,t.jsx)(s.code,{children:"UObject"})," that this ",(0,t.jsx)(s.code,{children:"UScriptStruct"})," belongs to is located"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"getstructaddress",children:"GetStructAddress()"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Return type:"})," ",(0,t.jsx)(s.code,{children:"integer"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Returns:"})," the address in memory where this ",(0,t.jsx)(s.code,{children:"UScriptStruct"})," is located"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"getpropertyaddress",children:"GetPropertyAddress()"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Return type:"})," ",(0,t.jsx)(s.code,{children:"integer"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Returns:"})," the address in memory where the corresponding ",(0,t.jsx)(s.code,{children:"UProperty"}),"/",(0,t.jsx)(s.code,{children:"FProperty"})," is located"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"isvalid",children:"IsValid()"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Return type:"})," ",(0,t.jsx)(s.code,{children:"bool"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Returns:"})," whether the struct is valid"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"ismappedtoobject",children:"IsMappedToObject()"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Return type:"})," ",(0,t.jsx)(s.code,{children:"bool"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Returns:"})," whether the base object is valid"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"ismappedtoproperty",children:"IsMappedToProperty()"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Return type:"})," ",(0,t.jsx)(s.code,{children:"bool"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Returns:"}),"  whether the property is valid"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"type",children:"type()"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Return type:"})," ",(0,t.jsx)(s.code,{children:"string"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Returns:"}),' "UScriptStruct"']}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>c});var t=n(6540);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);