"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8893],{3126:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var t=s(4848),n=s(8453);const l={},o="RegisterProcessConsoleExecPreHook",c={id:"lua-api/global-functions/registerprocessconsoleexecprehook",title:"RegisterProcessConsoleExecPreHook",description:"This registers a callback that will get called before UObject::ProcessConsoleExec is called.",source:"@site/versioned_docs/version-3.0.0/lua-api/global-functions/registerprocessconsoleexecprehook.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/registerprocessconsoleexecprehook",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/registerprocessconsoleexecprehook",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/lua-api/global-functions/registerprocessconsoleexecprehook.md",tags:[],version:"3.0.0",frontMatter:{},sidebar:"docs",previous:{title:"RegisterProcessConsoleExecPostHook",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/registerprocessconsoleexecposthook"},next:{title:"RegisterULocalPlayerExecPostHook",permalink:"/RE-UE4SS/3.0.0/lua-api/global-functions/registerulocalplayerexecposthook"}},i={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Callback Parameters",id:"callback-parameters",level:2},{value:"Callback Return Value",id:"callback-return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"registerprocessconsoleexecprehook",children:"RegisterProcessConsoleExecPreHook"}),"\n",(0,t.jsxs)(r.p,{children:["This registers a callback that will get called before ",(0,t.jsx)(r.code,{children:"UObject::ProcessConsoleExec"})," is called."]}),"\n",(0,t.jsxs)(r.p,{children:["Parameters (except strings & bools & ",(0,t.jsx)(r.code,{children:"FOutputDevice"}),") must be retrieved via ",(0,t.jsx)(r.code,{children:"Param:Get()"})," and set via ",(0,t.jsx)(r.code,{children:"Param:Set()"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["If the callback returns nothing (or nil), the original return value of ",(0,t.jsx)(r.code,{children:"ProcessConsoleExec"})," will be used."]}),"\n",(0,t.jsxs)(r.p,{children:["If the callback returns true or false, the supplied value will override the original return value of ",(0,t.jsx)(r.code,{children:"ProcessConsoleExec"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Information"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1"}),(0,t.jsx)(r.td,{children:"function"}),(0,t.jsx)(r.td,{children:"The callback to register"})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"callback-parameters",children:"Callback Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Information"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1"}),(0,t.jsx)(r.td,{children:"UObject"}),(0,t.jsx)(r.td,{children:"The object context"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"2"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"The command"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"The rest of the command"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4"}),(0,t.jsx)(r.td,{children:"FOutputDevice"}),(0,t.jsx)(r.td,{children:"The AR"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5"}),(0,t.jsx)(r.td,{children:"UObject"}),(0,t.jsx)(r.td,{children:"The executor"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"callback-return-value",children:"Callback Return Value"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Information"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1"}),(0,t.jsx)(r.td,{children:"bool"}),(0,t.jsxs)(r.td,{children:["Whether to override the original return value of ",(0,t.jsx)(r.code,{children:"ProcessConsoleExec"})]})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lua",children:"local function MyCallback(Context, Command, CommandParts, Ar, Executor)\r\n    -- Do something with the parameters\r\n    -- Return nil to use the original return value of ProcessConsoleExec\r\n    -- Return true or false to override the original return value of ProcessConsoleExec\r\n\r\n    return nil\r\nend\r\n\r\nRegisterProcessConsoleExecPreHook(MyCallback)\n"})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>c});var t=s(6540);const n={},l=t.createContext(n);function o(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);