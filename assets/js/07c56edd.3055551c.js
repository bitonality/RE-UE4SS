"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9363],{4106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(4848),i=n(8453);const r={},o="RemoteObject",c={id:"lua-api/classes/remoteobject",title:"RemoteObject",description:"The RemoteObject class is the first of two base objects that all other objects inherits from, the other one being LocalObject.",source:"@site/versioned_docs/version-3.0.0/lua-api/classes/remoteobject.md",sourceDirName:"lua-api/classes",slug:"/lua-api/classes/remoteobject",permalink:"/RE-UE4SS/3.0.0/lua-api/classes/remoteobject",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/lua-api/classes/remoteobject.md",tags:[],version:"3.0.0",frontMatter:{},sidebar:"docs",previous:{title:"Property",permalink:"/RE-UE4SS/3.0.0/lua-api/classes/property"},next:{title:"RemoteUnrealParam",permalink:"/RE-UE4SS/3.0.0/lua-api/classes/remoteunrealparam"}},a={},l=[{value:"Inheritance",id:"inheritance",level:2},{value:"Methods",id:"methods",level:2},{value:"IsValid()",id:"isvalid",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"remoteobject",children:"RemoteObject"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"RemoteObject"})," class is the first of two base objects that all other objects inherits from, the other one being ",(0,s.jsx)(t.a,{href:"/RE-UE4SS/3.0.0/lua-api/classes/localobject",children:"LocalObject"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"It contains a pointer to a C++ object that is typically owned by the game."}),"\n",(0,s.jsx)(t.h2,{id:"inheritance",children:"Inheritance"}),"\n",(0,s.jsx)(t.p,{children:"None"}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.h3,{id:"isvalid",children:"IsValid()"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Return type:"})," ",(0,s.jsx)(t.code,{children:"bool"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Returns:"})," whether this object is valid or not"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:'-- \'StaticFindObject\' returns a UObject which inherits from RemoteObject.\r\nlocal Object = StaticFindObject("/Script/CoreUObject.Object")\r\nif Object:IsValid() then\r\n    print("Object is valid\\n")\r\nelse\r\n    print("Object is NOT valid\\n")\r\nend\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);