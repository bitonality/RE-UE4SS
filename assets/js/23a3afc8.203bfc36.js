"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4542],{8429:(e,r,l)=>{l.r(r),l.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var t=l(4848),n=l(8453);const s={},i="RegisterULocalPlayerExecPostHook",c={id:"lua-api/global-functions/registerulocalplayerexecposthook",title:"RegisterULocalPlayerExecPostHook",description:"This registers a callback that will get called after ULocalPlayer::Exec is called.",source:"@site/versioned_docs/version-3.0.1/lua-api/global-functions/registerulocalplayerexecposthook.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/registerulocalplayerexecposthook",permalink:"/RE-UE4SS/lua-api/global-functions/registerulocalplayerexecposthook",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/lua-api/global-functions/registerulocalplayerexecposthook.md",tags:[],version:"3.0.1",frontMatter:{},sidebar:"docs",previous:{title:"RegisterProcessConsoleExecPreHook",permalink:"/RE-UE4SS/lua-api/global-functions/registerprocessconsoleexecprehook"},next:{title:"RegisterULocalPlayerExecPreHook",permalink:"/RE-UE4SS/lua-api/global-functions/registerulocalplayerexecprehook"}},a={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Callback Parameters",id:"callback-parameters",level:2},{value:"Callback Return Values",id:"callback-return-values",level:2},{value:"Example",id:"example",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"registerulocalplayerexecposthook",children:"RegisterULocalPlayerExecPostHook"}),"\n",(0,t.jsxs)(r.p,{children:["This registers a callback that will get called after ",(0,t.jsx)(r.code,{children:"ULocalPlayer::Exec"})," is called."]}),"\n",(0,t.jsxs)(r.p,{children:["Parameters (except strings & bools & ",(0,t.jsx)(r.code,{children:"FOutputDevice"}),") must be retrieved via ",(0,t.jsx)(r.code,{children:"Param:Get()"})," and set via ",(0,t.jsx)(r.code,{children:"Param:Set()"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"The callback can have two return values."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"If the first return value is nothing (or nil), the original return value of Exec will be used."}),"\n",(0,t.jsx)(r.li,{children:"If the first return value is true or false, the supplied value will override the original return value of Exec."}),"\n",(0,t.jsx)(r.li,{children:"The second return value controls whether the original Exec will execute."}),"\n",(0,t.jsx)(r.li,{children:"If the second return value is nil or true, the orginal Exec will execute."}),"\n",(0,t.jsx)(r.li,{children:"If the second return value is false, the original Exec will not execute."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Information"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1"}),(0,t.jsx)(r.td,{children:"function"}),(0,t.jsx)(r.td,{children:"The callback to register"})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"callback-parameters",children:"Callback Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Information"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1"}),(0,t.jsx)(r.td,{children:"ULocalPlayer"}),(0,t.jsx)(r.td,{children:"The local player context"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"2"}),(0,t.jsx)(r.td,{children:"UWorld"}),(0,t.jsx)(r.td,{children:"The world"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"The command"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4"}),(0,t.jsx)(r.td,{children:"FOutputDevice"}),(0,t.jsx)(r.td,{children:"The AR"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"callback-return-values",children:"Callback Return Values"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"#"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Information"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1"}),(0,t.jsx)(r.td,{children:"bool"}),(0,t.jsx)(r.td,{children:"Whether to override the original return value of Exec"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"2"}),(0,t.jsx)(r.td,{children:"bool"}),(0,t.jsx)(r.td,{children:"Whether to execute the original Exec"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lua",children:"local function MyCallback(Context, InWorld, Command, Ar)\r\n    -- Do something with the parameters\r\n    -- Return true or false to override the original return value of Exec\r\n    -- Return false to prevent the original Exec from executing\r\n\r\n    return nil, true\r\nend\r\n\r\nRegisterULocalPlayerExecPostHook(MyCallback)\n"})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,l)=>{l.d(r,{R:()=>i,x:()=>c});var t=l(6540);const n={},s=t.createContext(n);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);