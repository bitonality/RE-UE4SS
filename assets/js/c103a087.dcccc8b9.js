"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3772],{365:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var t=r(4848),l=r(8453);const a={},o="RegisterConsoleCommandGlobalHandler",s={id:"lua-api/global-functions/registerconsolecommandglobalhandler",title:"RegisterConsoleCommandGlobalHandler",description:"The RegisterConsoleCommandGlobalHandler function executes the provided Lua function whenever the supplied custom command is entered into the UE console.",source:"@site/docs/lua-api/global-functions/registerconsolecommandglobalhandler.md",sourceDirName:"lua-api/global-functions",slug:"/lua-api/global-functions/registerconsolecommandglobalhandler",permalink:"/RE-UE4SS/dev/lua-api/global-functions/registerconsolecommandglobalhandler",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/lua-api/global-functions/registerconsolecommandglobalhandler.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"RegisterCallFunctionByNameWithArgumentsPreHook",permalink:"/RE-UE4SS/dev/lua-api/global-functions/registercallfunctionbynamewithargumentsprehook"},next:{title:"RegisterConsoleCommandHandler",permalink:"/RE-UE4SS/dev/lua-api/global-functions/registerconsolecommandhandler"}},d={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Callback Parameters",id:"callback-parameters",level:2},{value:"Callback Return Value",id:"callback-return-value",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"registerconsolecommandglobalhandler",children:"RegisterConsoleCommandGlobalHandler"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"RegisterConsoleCommandGlobalHandler"})," function executes the provided Lua function whenever the supplied custom command is entered into the UE console."]}),"\n",(0,t.jsxs)(n.p,{children:["Unlike ",(0,t.jsx)(n.code,{children:"RegisterConsoleCommandHandler"}),", this global variant runs the callback for all contexts."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"#"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Information"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"The name of the custom command"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"function"}),(0,t.jsx)(n.td,{children:"The callback to execute when the custom command is entered into the UE console"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"callback-parameters",children:"Callback Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"#"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Information"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"The name of the custom command"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"table"}),(0,t.jsx)(n.td,{children:"Table containing all parameters"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"FOutputDevice"}),(0,t.jsx)(n.td,{children:"The output device to write to"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"callback-return-value",children:"Callback Return Value"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"#"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Information"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:"Whether to prevent other handlers from handling this command"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"RegisterConsoleCommandGlobalHandler(\"CommandExample\", function(FullCommand, Parameters, OutputDevice)\r\n    print(\"Custom command callback for 'CommandExample' command executed.\\n\")\r\n    print(string.format(\"Full command: %s\\n\", FullCommand))\r\n    print(string.format(\"Number of parameters: %i\\n\", #Parameters))\r\n    \r\n    for ParameterNumber, Parameter in pairs(Parameters) do\r\n        print(string.format(\"Parameter #%i -> '%s'\\n\", ParameterNumber, Parameter))\r\n    end\r\n\r\n    return true\r\nend)\r\n\r\n-- Entered into console: CommandExample 1 2 3\r\n-- Output\r\n--[[\r\nCustom command callback for 'CommandExample' command executed.\r\nFull command: CommandExample 1 2 3\r\nNumber of parameters: 3\r\nParameter #1 -> '1'\r\nParameter #2 -> '2'\r\nParameter #3 -> '3'\r\nParameter #0 -> 'CommandExample'\r\n--]]\n"})})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var t=r(6540);const l={},a=t.createContext(l);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);