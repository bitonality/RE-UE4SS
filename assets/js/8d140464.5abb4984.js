"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[766],{9715:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(4848),r=i(8453);const a={},s="IterateGameDirectories",l={id:"lua-api/global-functions/iterategamedirectories",title:"IterateGameDirectories",description:"Returns a table of all game directories.",source:"@site/versioned_docs/version-3.0.0/lua-api/global-functions/iterategamedirectories.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/iterategamedirectories",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/iterategamedirectories",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/lua-api/global-functions/iterategamedirectories.md",tags:[],version:"3.0.0",frontMatter:{},sidebar:"docs",previous:{title:"IsKeyBindRegistered",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/iskeybindregistered"},next:{title:"LoadAsset",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/loadasset"}},o={},c=[{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"iterategamedirectories",children:"IterateGameDirectories"}),"\n",(0,n.jsx)(t.p,{children:"Returns a table of all game directories."}),"\n",(0,n.jsxs)(t.p,{children:["An example of an absolute path to ",(0,n.jsx)(t.code,{children:"Win64"}),": ",(0,n.jsx)(t.code,{children:"Q:\\SteamLibrary\\steamapps\\common\\Deep Rock Galactic\\FSD\\Binaries\\Win64"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["To get to the same directory, do ",(0,n.jsx)(t.code,{children:"IterateGameDirectories().<Game Name>.Binaries.Win64"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["You can use ",(0,n.jsx)(t.code,{children:".__name"})," and ",(0,n.jsx)(t.code,{children:".__absolute_path"})," to retrieve values."]}),"\n",(0,n.jsxs)(t.li,{children:["You can use ",(0,n.jsx)(t.code,{children:".__files"})," to retrieve a table containing all files in this directory."]}),"\n",(0,n.jsxs)(t.li,{children:["You also use ",(0,n.jsx)(t.code,{children:".__name"})," and ",(0,n.jsx)(t.code,{children:".__absolute_path"})," for files."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Information"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"table"}),(0,n.jsx)(t.td,{children:"The game directories table"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"for _, GameDirectory in pairs(IterateGameDirectories()) do\r\n    print(GameDirectory.__name)\r\n    print(GameDirectory.__absolute_path)\r\nend\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>l});var n=i(6540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);