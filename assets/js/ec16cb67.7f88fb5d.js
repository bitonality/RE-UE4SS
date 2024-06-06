"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2128],{7518:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(4848),a=n(8453);const s={},i="TArray",l={id:"lua-api/classes/tarray",title:"TArray",description:"Inheritance",source:"@site/versioned_docs/version-3.0.0/lua-api/classes/tarray.md",sourceDirName:"lua-api/classes",slug:"/lua-api/classes/tarray",permalink:"/RE-UE4SS/3.0.0/lua-api/classes/tarray",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/lua-api/classes/tarray.md",tags:[],version:"3.0.0",frontMatter:{},sidebar:"docs",previous:{title:"StructProperty",permalink:"/RE-UE4SS/3.0.0/lua-api/classes/structproperty"},next:{title:"UClass",permalink:"/RE-UE4SS/3.0.0/lua-api/classes/uclass"}},d={},c=[{value:"Inheritance",id:"inheritance",level:2},{value:"Methods",id:"methods",level:2},{value:"__index(integer ArrayIndex)",id:"__indexinteger-arrayindex",level:3},{value:"__newindex(integer ArrayIndex, auto NewValue)",id:"__newindexinteger-arrayindex-auto-newvalue",level:3},{value:"GetArrayAddress()",id:"getarrayaddress",level:3},{value:"GetArrayNum()",id:"getarraynum",level:3},{value:"GetArrayMax()",id:"getarraymax",level:3},{value:"GetArrayDataAddress()",id:"getarraydataaddress",level:3},{value:"Empty()",id:"empty",level:3},{value:"ForEach(function Callback)",id:"foreachfunction-callback",level:3}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"tarray",children:"TArray"}),"\n",(0,t.jsx)(r.h2,{id:"inheritance",children:"Inheritance"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/RE-UE4SS/3.0.0/lua-api/classes/remoteobject",children:"RemoteObject"})}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(r.h3,{id:"__indexinteger-arrayindex",children:"__index(integer ArrayIndex)"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Attempts to retrieve the value at the specified offset in the array."}),"\n",(0,t.jsxs)(r.li,{children:["Can return any type, you can use the ",(0,t.jsx)(r.code,{children:"type()"})," function on the returned value to figure out what Lua class it's using (if non-trivial type)."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"__newindexinteger-arrayindex-auto-newvalue",children:"__newindex(integer ArrayIndex, auto NewValue)"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Attempts to set the value at the specified offset in the array."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"getarrayaddress",children:"GetArrayAddress()"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Return type:"})," ",(0,t.jsx)(r.code,{children:"integer"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Returns:"})," the address in memory where the ",(0,t.jsx)(r.code,{children:"TArray"})," struct is located."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"getarraynum",children:"GetArrayNum()"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Return type:"})," ",(0,t.jsx)(r.code,{children:"integer"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Returns:"})," the number of current elements in the array."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"getarraymax",children:"GetArrayMax()"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Return type:"})," ",(0,t.jsx)(r.code,{children:"integer"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Returns:"})," the maximum number of elements allowed in this array (aka capacity)."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"getarraydataaddress",children:"GetArrayDataAddress()"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Return type:"})," ",(0,t.jsx)(r.code,{children:"integer"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Returns:"})," the address in memory where the data for this array is stored."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"empty",children:"Empty()"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Clears the array."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"foreachfunction-callback",children:"ForEach(function Callback)"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Iterates the entire ",(0,t.jsx)(r.code,{children:"TArray"})," and calls the callback function for each element in the array."]}),"\n",(0,t.jsxs)(r.li,{children:["The callback params are: ",(0,t.jsx)(r.code,{children:"integer index"}),", ",(0,t.jsx)(r.code,{children:"RemoteUnrealParam elem"})," | ",(0,t.jsx)(r.code,{children:"LocalUnrealParam elem"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Use ",(0,t.jsx)(r.code,{children:"elem:get()"})," and ",(0,t.jsx)(r.code,{children:"elem:set()"})," to access/mutate an array element."]}),"\n"]})]})}function o(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var t=n(6540);const a={},s=t.createContext(a);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);