"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6091],{1782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=t(4848),l=t(8453);const o={},c="NotifyOnNewObject",i={id:"lua-api/global-functions/notifyonnewobject",title:"NotifyOnNewObject",description:"The NotifyOnNewObject function executes a callback whenever an instance of the supplied class is constructed via StaticConstructObject_Internal by UE4.",source:"@site/versioned_docs/version-3.0.1/lua-api/global-functions/notifyonnewobject.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/notifyonnewobject",permalink:"/lua-api/global-functions/notifyonnewobject",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/lua-api/global-functions/notifyonnewobject.md",tags:[],version:"3.0.1",frontMatter:{},sidebar:"docs",previous:{title:"LoopAsync",permalink:"/lua-api/global-functions/loopasync"},next:{title:"print",permalink:"/lua-api/global-functions/print"}},s={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example",id:"example",level:2},{value:"What NOT to do",id:"what-not-to-do",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"notifyonnewobject",children:"NotifyOnNewObject"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"NotifyOnNewObject"})," function executes a callback whenever an instance of the supplied class is constructed via ",(0,r.jsx)(n.code,{children:"StaticConstructObject_Internal"})," by UE4."]}),"\n",(0,r.jsxs)(n.p,{children:["Inheritance is taken into account, so if you provide ",(0,r.jsx)(n.code,{children:'"/Script/Engine.Actor"'})," as the class then it will execute the callback when any object is constructed that's either an ",(0,r.jsx)(n.code,{children:"AActor"})," or is derived from ",(0,r.jsx)(n.code,{children:"AActor"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The provided class must exist before this calling this function."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"#"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Information"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Full name of the class to get instance construction notifications for, without the type prefix"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"function"}),(0,r.jsx)(n.td,{children:"The callback to execute when an instance of the supplied class is constructed"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"#"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Information"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"UObject"}),(0,r.jsx)(n.td,{children:"The constructed object"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'NotifyOnNewObject("/Script/Engine.Actor", function(ConstructedObject)\r\n    print(string.format("Constructed: %s\\n", ConstructedObject:GetFullName()))\r\nend)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"what-not-to-do",children:"What NOT to do"}),"\n",(0,r.jsxs)(n.p,{children:["Please don't duplicate the ",(0,r.jsx)(n.code,{children:"NotifyOnNewObject"})," call for the same class multiple times, as it could cause performance issues if multiple mods are doing it (which has been seen in the wild)."]}),"\n",(0,r.jsx)(n.p,{children:"For example, this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'NotifyOnNewObject("/Script/Engine.PlayerController", function(PlayerController)\r\n    PlayerController.bShowMouseCursor = true\r\nend)\r\nNotifyOnNewObject("/Script/Engine.PlayerController", function(PlayerController)\r\n    PlayerController.bForceFeedbackEnabled = false\r\nend)\r\nNotifyOnNewObject("/Script/Engine.PlayerController", function(PlayerController)\r\n    PlayerController.InputYawScale = 2.5\r\nend)\r\nNotifyOnNewObject("/Script/Engine.PlayerController", function(PlayerController)\r\n    PlayerController.InputPitchScale = -2.5\r\nend)\r\nNotifyOnNewObject("/Script/Engine.PlayerController", function(PlayerController)\r\n    PlayerController.InputRollScale = 1.0\r\nend)\n'})}),"\n",(0,r.jsx)(n.p,{children:"should just be this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'NotifyOnNewObject("/Script/Engine.PlayerController", function(PlayerController)\r\n    PlayerController.bShowMouseCursor = true\r\n    PlayerController.bForceFeedbackEnabled = false\r\n    PlayerController.InputYawScale = 2.5\r\n    PlayerController.InputPitchScale = -2.5\r\n    PlayerController.InputRollScale = 1.0\r\nend)\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(6540);const l={},o=r.createContext(l);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);