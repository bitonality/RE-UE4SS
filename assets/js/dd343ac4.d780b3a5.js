"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7267],{8654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(4848),s=n(8453);const i={},o="RegisterHook",l={id:"lua-api/global-functions/registerhook",title:"RegisterHook",description:"The RegisterHook registers a callback for a UFunction",source:"@site/versioned_docs/version-3.0.0/lua-api/global-functions/registerhook.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/registerhook",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/registerhook",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/lua-api/global-functions/registerhook.md",tags:[],version:"3.0.0",frontMatter:{},sidebar:"docs",previous:{title:"RegisterCustomProperty",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/registercustomproperty"},next:{title:"RegisterInitGameStatePostHook",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/registerinitgamestateposthook"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Example",id:"example",level:2}];function a(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"registerhook",children:"RegisterHook"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"RegisterHook"})," registers a callback for a ",(0,r.jsx)(t.code,{children:"UFunction"})]}),"\n",(0,r.jsxs)(t.p,{children:["Callbacks are triggered when a ",(0,r.jsx)(t.code,{children:"UFunction"})," is executed."]}),"\n",(0,r.jsxs)(t.p,{children:["The callback params are: ",(0,r.jsx)(t.code,{children:"UObject self"}),", ",(0,r.jsx)(t.code,{children:"UFunctionParams.."}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Returns two ids, both of which must be passed to ",(0,r.jsx)(t.code,{children:"UnregisterHook"})," if you want to unregister the hook."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Any ",(0,r.jsx)(t.code,{children:"UFunction"})," that you attempt to register with ",(0,r.jsx)(t.code,{children:"RegisterHook"})," must already exist in memory when you register it."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Information"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Full name of the UFunction to hook. Type prefix has no effect."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"function"}),(0,r.jsx)(t.td,{children:"Callback to execute when the UFunction is executed"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Information"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"The PreId of the hook"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{children:"The PostId of the hook"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:'RegisterHook("/Script/Engine.PlayerController:ClientRestart", function()\r\n    print("PlayerController restarted\\n")\r\nend)\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);