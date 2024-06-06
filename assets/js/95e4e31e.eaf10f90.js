"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76],{7284:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=a(4848),n=a(8453);const r={},i="RegisterInitGameStatePostHook",o={id:"lua-api/global-functions/registerinitgamestateposthook",title:"RegisterInitGameStatePostHook",description:"This registers a callback that will get called after AGameModeBase::InitGameState is called.",source:"@site/versioned_docs/version-3.0.1/lua-api/global-functions/registerinitgamestateposthook.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/registerinitgamestateposthook",permalink:"/RE-UE4SS/lua-api/global-functions/registerinitgamestateposthook",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/lua-api/global-functions/registerinitgamestateposthook.md",tags:[],version:"3.0.1",frontMatter:{},sidebar:"docs",previous:{title:"RegisterHook",permalink:"/RE-UE4SS/lua-api/global-functions/registerhook"},next:{title:"RegisterInitGameStatePreHook",permalink:"/RE-UE4SS/lua-api/global-functions/registerinitgamestateprehook"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Callback Parameters",id:"callback-parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"registerinitgamestateposthook",children:"RegisterInitGameStatePostHook"}),"\n",(0,s.jsxs)(t.p,{children:["This registers a callback that will get called after ",(0,s.jsx)(t.code,{children:"AGameModeBase::InitGameState"})," is called."]}),"\n",(0,s.jsxs)(t.p,{children:["Parameters (except strings & bools & ",(0,s.jsx)(t.code,{children:"FOutputDevice"}),") must be retrieved via ",(0,s.jsx)(t.code,{children:"Param:Get()"})," and set via ",(0,s.jsx)(t.code,{children:"Param:Set()"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Information"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{children:"The callback to register"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"callback-parameters",children:"Callback Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"#"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Information"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"AGameStateBase"}),(0,s.jsx)(t.td,{children:"The game state context"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:'RegisterInitGameStatePostHook(function(GameState)\r\n    print("InitGameStatePostHook")\r\nend)\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var s=a(6540);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);