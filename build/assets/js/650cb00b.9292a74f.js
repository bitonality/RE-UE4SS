"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5279],{3633:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=s(4848),t=s(8453);const i={},a="Using Custom Lua Bindings",d={id:"guides/using-custom-lua-bindings",title:"Using Custom Lua Bindings",description:"To make development of Lua mods easier, we've added the ability to dump custom Lua bindings from your game. We also have a shared types file that contains default UE types and the API functions/classes/objects that are available to you.",source:"@site/versioned_docs/version-3.0.1/guides/using-custom-lua-bindings.md",sourceDirName:"guides",slug:"/guides/using-custom-lua-bindings",permalink:"/guides/using-custom-lua-bindings",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/guides/using-custom-lua-bindings.md",tags:[],version:"3.0.1",frontMatter:{},sidebar:"docs",previous:{title:"Creating a Lua mod",permalink:"/guides/creating-a-lua-mod"},next:{title:"C++ API",permalink:"/cpp-api"}},u={},l=[{value:"Dumping Custom Lua Bindings",id:"dumping-custom-lua-bindings",level:2},{value:"To Use Bindings",id:"to-use-bindings",level:2},{value:"Example",id:"example",level:2}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"using-custom-lua-bindings",children:"Using Custom Lua Bindings"}),"\n",(0,o.jsx)(n.p,{children:"To make development of Lua mods easier, we've added the ability to dump custom Lua bindings from your game. We also have a shared types file that contains default UE types and the API functions/classes/objects that are available to you."}),"\n",(0,o.jsx)(n.h2,{id:"dumping-custom-lua-bindings",children:"Dumping Custom Lua Bindings"}),"\n",(0,o.jsx)(n.p,{children:'Simply open the Dumpers tab in the GUI console window and hit the "Dump Lua Bindings" button.'}),"\n",(0,o.jsxs)(n.p,{children:["The generator will place the files into the ",(0,o.jsx)(n.code,{children:"Mods/shared/types"})," folder."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Warning: Do not include any of the generated files in your Lua scripts. If they are included, any globals set by UE4SS will be overridden and things will break."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"to-use-bindings",children:"To Use Bindings"}),"\n",(0,o.jsx)(n.p,{children:'I recommend using Visual Studio Code to do your Lua development. You can install the extension just called "Lua" by sumneko.'}),"\n",(0,o.jsxs)(n.p,{children:["Open the ",(0,o.jsx)(n.code,{children:"Mods"})," folder as a workspace. You can also save this workspace so you don't have to do this every time you open VS Code."]}),"\n",(0,o.jsx)(n.p,{children:"When developing your Lua mods, the language server should automatically parse all the types files and give you intellisense."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Warning: For many games the number of types is so large that the language server will fail to parse everything. In this case, you can add a file called ",(0,o.jsx)(n.code,{children:".luarc.json"})," into the root of your workspace and add the following:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\r\n    "$schema": "https://raw.githubusercontent.com/sumneko/vscode-lua/master/setting/schema.json",\r\n    "workspace.maxPreload": 50000,\r\n    "workspace.preloadFileSize": 5000\r\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["To get context sensitive information about the custom game types, you need to ",(0,o.jsx)(n.a,{href:"https://emmylua.github.io/annotation.html",children:"annotate your code"}),". This is done by adding a comment above the function/class/object that you want to annotate."]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'---@class ITM_MisSel_Biome_C\r\nlocal biome = FindFirstOf("ITM_MisSel_Biome_C")\r\n\r\n---@type int\r\nlocal numMissions = biome.NumMissions\r\n\r\n---@type FVector\r\nlocal soundCoords = { 420.5, 69.0, 3.1 }\r\nbiome:SetSoundCoordinate(soundCoords)\n'})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var o=s(6540);const t={},i=o.createContext(t);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);