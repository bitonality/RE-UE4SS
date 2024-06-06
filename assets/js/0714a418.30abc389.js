"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[467],{1439:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=r(4848),s=r(8453);const i={},o="RegisterHook",c={id:"lua-api/global-functions/registerhook",title:"RegisterHook",description:"The RegisterHook registers a callback for a UFunction",source:"@site/docs/lua-api/global-functions/registerhook.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/registerhook",permalink:"/RE-UE4SS/dev/lua-api/global-functions/registerhook",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/lua-api/global-functions/registerhook.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"RegisterCustomProperty",permalink:"/RE-UE4SS/dev/lua-api/global-functions/registercustomproperty"},next:{title:"RegisterInitGameStatePostHook",permalink:"/RE-UE4SS/dev/lua-api/global-functions/registerinitgamestateposthook"}},l={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"registerhook",children:"RegisterHook"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"RegisterHook"})," registers a callback for a ",(0,n.jsx)(t.code,{children:"UFunction"})]}),"\n",(0,n.jsxs)(t.p,{children:["Callbacks are triggered when a ",(0,n.jsx)(t.code,{children:"UFunction"})," is executed."]}),"\n",(0,n.jsxs)(t.p,{children:["The callback params are: ",(0,n.jsx)(t.code,{children:"UObject self"}),", ",(0,n.jsx)(t.code,{children:"UFunctionParams.."}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Returns two ids, both of which must be passed to ",(0,n.jsx)(t.code,{children:"UnregisterHook"})," if you want to unregister the hook."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Any ",(0,n.jsx)(t.code,{children:"UFunction"})," that you attempt to register with ",(0,n.jsx)(t.code,{children:"RegisterHook"})," must already exist in memory when you register it."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Information"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Full name of the UFunction to hook. Type prefix has no effect."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"function"}),(0,n.jsxs)(t.td,{children:["If UFunction path starts with ",(0,n.jsx)(t.code,{children:"/Script/"}),": Callback to execute before the UFunction is executed.",(0,n.jsx)("br",{}),"Otherwise: Callback to execute after the UFunction is executed."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"function"}),(0,n.jsxs)(t.td,{children:["(optional)",(0,n.jsx)("br",{}),"If UFunction path starts with ",(0,n.jsx)(t.code,{children:"/Script/"}),": Callback to execute after the UFunction is executed",(0,n.jsx)("br",{}),"Otherwise: Param does nothing."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Information"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"The PreId of the hook"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:"The PostId of the hook"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'RegisterHook("/Script/Engine.PlayerController:ClientRestart", function()\r\n    print("PlayerController restarted\\n")\r\nend)\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(6540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);