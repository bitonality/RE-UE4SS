"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3929],{7599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(4848),i=n(8453);const s={},l="RegisterBeginPlayPostHook",a={id:"lua-api/global-functions/registerbeginplayposthook",title:"RegisterBeginPlayPostHook",description:"This registers a callback that will get called after AActor::BeginPlay is called.",source:"@site/versioned_docs/version-3.0.0/lua-api/global-functions/registerbeginplayposthook.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/registerbeginplayposthook",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/registerbeginplayposthook",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/lua-api/global-functions/registerbeginplayposthook.md",tags:[],version:"3.0.0",frontMatter:{},sidebar:"docs",previous:{title:"print",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/print"},next:{title:"RegisterBeginPlayPreHook",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/registerbeginplayprehook"}},o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Callback Parameters",id:"callback-parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"registerbeginplayposthook",children:"RegisterBeginPlayPostHook"}),"\n",(0,r.jsxs)(t.p,{children:["This registers a callback that will get called after ",(0,r.jsx)(t.code,{children:"AActor::BeginPlay"})," is called."]}),"\n",(0,r.jsxs)(t.p,{children:["Parameters (except strings & bools & ",(0,r.jsx)(t.code,{children:"FOutputDevice"}),") must be retrieved via ",(0,r.jsx)(t.code,{children:"Param:Get()"})," and set via ",(0,r.jsx)(t.code,{children:"Param:Set()"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Information"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"function"}),(0,r.jsx)(t.td,{children:"The callback to register"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"callback-parameters",children:"Callback Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Information"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"AActor"}),(0,r.jsx)(t.td,{children:"The actor context"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:'RegisterBeginPlayPostHook(function(Actor)\r\n    print("BeginPlayPostHook")\r\nend)\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);