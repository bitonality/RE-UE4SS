"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[991],{6061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(4848),l=n(8453);const i={},a="RegisterCallFunctionByNameWithArgumentsPreHook",s={id:"lua-api/global-functions/registercallfunctionbynamewithargumentsprehook",title:"RegisterCallFunctionByNameWithArgumentsPreHook",description:"This registers a callback that will get called before UObject::CallFunctionByNameWithArguments is called.",source:"@site/versioned_docs/version-3.0.0/lua-api/global-functions/registercallfunctionbynamewithargumentsprehook.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/registercallfunctionbynamewithargumentsprehook",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/registercallfunctionbynamewithargumentsprehook",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.0/lua-api/global-functions/registercallfunctionbynamewithargumentsprehook.md",tags:[],version:"3.0.0",frontMatter:{},sidebar:"docs",previous:{title:"RegisterCallFunctionByNameWithArgumentsPostHook",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/registercallfunctionbynamewithargumentsposthook"},next:{title:"RegisterConsoleCommandGlobalHandler",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/registerconsolecommandglobalhandler"}},c={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Callback Parameters",id:"callback-parameters",level:2},{value:"Callback Return Value",id:"callback-return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"registercallfunctionbynamewithargumentsprehook",children:"RegisterCallFunctionByNameWithArgumentsPreHook"}),"\n",(0,r.jsxs)(t.p,{children:["This registers a callback that will get called before ",(0,r.jsx)(t.code,{children:"UObject::CallFunctionByNameWithArguments"})," is called."]}),"\n",(0,r.jsxs)(t.p,{children:["Parameters (except strings & bools & ",(0,r.jsx)(t.code,{children:"FOutputDevice"}),") must be retrieved via ",(0,r.jsx)(t.code,{children:"Param:Get()"})," and set via ",(0,r.jsx)(t.code,{children:"Param:Set()"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If the callback returns nothing (or nil), the original return value of ",(0,r.jsx)(t.code,{children:"CallFunctionByNameWithArguments"})," will be used."]}),"\n",(0,r.jsxs)(t.p,{children:["If the callback returns true or false, the supplied value will override the original return value of ",(0,r.jsx)(t.code,{children:"CallFunctionByNameWithArguments"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Information"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"function"}),(0,r.jsx)(t.td,{children:"The callback to register"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"callback-parameters",children:"Callback Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Information"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"UObject"}),(0,r.jsx)(t.td,{children:"The object context"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"The string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:"FOutputDevice"}),(0,r.jsx)(t.td,{children:"The AR"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4"}),(0,r.jsx)(t.td,{children:"UObject"}),(0,r.jsx)(t.td,{children:"The executor"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"The bForceCallWithNonExec value"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"callback-return-value",children:"Callback Return Value"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"#"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Information"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsxs)(t.td,{children:["Whether to override the original return value of ",(0,r.jsx)(t.code,{children:"CallFunctionByNameWithArguments"})]})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:"local function MyCallback(Context, Str, Ar, Executor, bForceCallWithNonExec)\r\n    -- Do something with the parameters\r\n    -- Return nil to use the original return value of CallFunctionByNameWithArguments\r\n    -- Return true or false to override the original return value of CallFunctionByNameWithArguments\r\n\r\n    return nil\r\nend\r\n\r\nRegisterCallFunctionByNameWithArgumentsPreHook(MyCallback)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(6540);const l={},i=r.createContext(l);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);