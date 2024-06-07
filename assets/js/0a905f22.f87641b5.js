"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6992],{3085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(4848),o=n(8453);const i={},s="UnregisterHook",l={id:"lua-api/global-functions/unregisterhook",title:"UnregisterHook",description:"The UnregisterHook unregisters a callback for a UFunction.",source:"@site/versioned_docs/version-3.0.0/lua-api/global-functions/unregisterhook.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/unregisterhook",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/unregisterhook",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/lua-api/global-functions/unregisterhook.md",tags:[],version:"3.0.0",frontMatter:{},sidebar:"docs",previous:{title:"StaticFindObject",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/staticfindobject"},next:{title:"Examples",permalink:"/RE-UE4SS/3.0.0/lua-api/examples"}},a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"unregisterhook",children:"UnregisterHook"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"UnregisterHook"})," unregisters a callback for a ",(0,r.jsx)(t.code,{children:"UFunction"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Information"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Full name of the UFunction to hook. Type prefix has no effect."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"The PreId of the hook"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"The PostId of the hook"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:'local preId, postId = RegisterHook("/Script/Engine.PlayerController:ClientRestart", function()\r\n    print("PlayerController restarted\\n")\r\nend)\r\n\r\nUnregisterHook("/Script/Engine.PlayerController:ClientRestart", preId, postId)\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);