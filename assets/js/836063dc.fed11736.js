"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6208],{4320:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(4848),s=r(8453);const a={},l="RegisterBeginPlayPostHook",i={id:"lua-api/global-functions/registerbeginplayposthook",title:"RegisterBeginPlayPostHook",description:"This registers a callback that will get called after AActor::BeginPlay is called.",source:"@site/docs/lua-api/global-functions/registerbeginplayposthook.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/registerbeginplayposthook",permalink:"/RE-UE4SS/dev/lua-api/global-functions/registerbeginplayposthook",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/lua-api/global-functions/registerbeginplayposthook.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"print",permalink:"/RE-UE4SS/dev/lua-api/global-functions/print"},next:{title:"RegisterBeginPlayPreHook",permalink:"/RE-UE4SS/dev/lua-api/global-functions/registerbeginplayprehook"}},o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Callback Parameters",id:"callback-parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"registerbeginplayposthook",children:"RegisterBeginPlayPostHook"}),"\n",(0,n.jsxs)(t.p,{children:["This registers a callback that will get called after ",(0,n.jsx)(t.code,{children:"AActor::BeginPlay"})," is called."]}),"\n",(0,n.jsxs)(t.p,{children:["Parameters (except strings & bools & ",(0,n.jsx)(t.code,{children:"FOutputDevice"}),") must be retrieved via ",(0,n.jsx)(t.code,{children:"Param:Get()"})," and set via ",(0,n.jsx)(t.code,{children:"Param:Set()"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Information"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"function"}),(0,n.jsx)(t.td,{children:"The callback to register"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"callback-parameters",children:"Callback Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"#"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Information"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"AActor"}),(0,n.jsx)(t.td,{children:"The actor context"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'RegisterBeginPlayPostHook(function(Actor)\r\n    print("BeginPlayPostHook")\r\nend)\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(6540);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);