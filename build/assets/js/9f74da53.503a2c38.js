"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7978],{8489:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=r(4848),i=r(8453);const o={},t="Creating a C++ mod",d={id:"guides/creating-a-c++-mod",title:"Creating a C++ mod",description:"This guide will help you create a C++ mod using UE4SS.",source:"@site/docs/guides/creating-a-c++-mod.md",sourceDirName:"guides",slug:"/guides/creating-a-c++-mod",permalink:"/dev/guides/creating-a-c++-mod",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/creating-a-c++-mod.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"C++ Examples",permalink:"/dev/cpp-api/cpp-examples"},next:{title:"Installing a C++ Mod",permalink:"/dev/guides/installing-a-c++-mod"}},l={},c=[{value:"Part 1",id:"part-1",level:2},{value:"Part #2",id:"part-2",level:2},{value:"Part #3",id:"part-3",level:2},{value:"Part #4",id:"part-4",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"creating-a-c-mod",children:"Creating a C++ mod"}),"\n",(0,s.jsxs)(n.p,{children:["This guide will help you create a C++ mod using UE4SS.",(0,s.jsx)(n.br,{}),"\n","It's split up into four parts.",(0,s.jsx)(n.br,{}),"\n","Part one goes over the prerequisites.",(0,s.jsx)(n.br,{}),"\n","Part two goes over creating the most basic C++ mod possible.",(0,s.jsx)(n.br,{}),"\n","Part three will show you how to interact with UE4SS and UE itself (via UE4SS).",(0,s.jsx)(n.br,{}),"\n","Part four will cover installation of the mod."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The guide requires having a working C++ development environment with ",(0,s.jsx)(n.code,{children:"xmake"})," and ",(0,s.jsx)(n.code,{children:"git"}),", preferably similar to the one required to build UE4SS itself from sources."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"part-1",children:"Part 1"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Make sure you have downloaded all the ",(0,s.jsx)(n.a,{href:"https://docs.ue4ss.com/#build-requirements",children:"build requirements mentioned in the README"})," before following these steps!"]})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Make an Epic account and link it to your GitHub account"}),"\n",(0,s.jsx)(n.li,{children:"Check your email and accept the invitation to the @EpicGames GitHub organization for Unreal source access."}),"\n",(0,s.jsx)(n.li,{children:"Setup SSH keys on your GitHub account which will let git access the Unreal source you got access for in 2 and 3."}),"\n",(0,s.jsxs)(n.li,{children:["Make a directory somewhere on your computer, the name doesn't matter but I named mine ",(0,s.jsx)(n.code,{children:"MyMods"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Clone the RE-UE4SS repo so that you end up with ",(0,s.jsx)(n.code,{children:"MyMods/RE-UE4SS"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Open CMD and cd into ",(0,s.jsx)(n.code,{children:"RE-UE4SS"})," and execute: ",(0,s.jsx)(n.code,{children:"git submodule update --init --recursive"})]}),"\n",(0,s.jsxs)(n.li,{children:["Go back to the ",(0,s.jsx)(n.code,{children:"MyMods"})," directory and create a new directory, this directory will contain your mod source files.\r\nI named mine ",(0,s.jsx)(n.code,{children:"MyAwesomeMod"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Create a file called ",(0,s.jsx)(n.code,{children:"xmake.lua"})," inside ",(0,s.jsx)(n.code,{children:"MyMods"})," and put this inside it:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'includes("RE-UE4SS")\r\nincludes("MyAwesomeMod")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"part-2",children:"Part #2"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a file called ",(0,s.jsx)(n.code,{children:"xmake.lua"})," inside ",(0,s.jsx)(n.code,{children:"MyMods/MyAwesomeMod"})," and put this inside it:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local projectName = "MyAwesomeMod"\r\n\r\ntarget(projectName)\r\n    add_rules("ue4ss.mod")\r\n    add_includedirs(".")\r\n    add_files("dllmain.cpp")\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Make a file called ",(0,s.jsx)(n.code,{children:"dllmain.cpp"})," in ",(0,s.jsx)(n.code,{children:"MyMods/MyAwesomeMod"})," and put this inside it:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c++",children:'#include <stdio.h>\r\n#include <Mod/CppUserModBase.hpp>\r\n\r\nclass MyAwesomeMod : public RC::CppUserModBase\r\n{\r\npublic:\r\n    MyAwesomeMod() : CppUserModBase()\r\n    {\r\n        ModName = STR("MyAwesomeMod");\r\n        ModVersion = STR("1.0");\r\n        ModDescription = STR("This is my awesome mod");\r\n        ModAuthors = STR("UE4SS Team");\r\n        // Do not change this unless you want to target a UE4SS version\r\n        // other than the one you\'re currently building with somehow.\r\n        //ModIntendedSDKVersion = STR("2.6");\r\n        \r\n        printf("MyAwesomeMod says hello\\n");\r\n    }\r\n\r\n    ~MyAwesomeMod() override\r\n    {\r\n    }\r\n\r\n    auto on_update() -> void override\r\n    {\r\n    }\r\n};\r\n\r\n#define MY_AWESOME_MOD_API __declspec(dllexport)\r\nextern "C"\r\n{\r\n    MY_AWESOME_MOD_API RC::CppUserModBase* start_mod()\r\n    {\r\n        return new MyAwesomeMod();\r\n    }\r\n\r\n    MY_AWESOME_MOD_API void uninstall_mod(RC::CppUserModBase* mod)\r\n    {\r\n        delete mod;\r\n    }\r\n}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["In the command prompt, in the ",(0,s.jsx)(n.code,{children:"MyMods"})," directory, execute either:\r\nA."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'xmake f -m "Game__Shipping__Win64"\r\nxmake\n'})}),"\n",(0,s.jsx)(n.p,{children:"or B."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"xmake project -k vsxmake2022\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you chose option ",(0,s.jsx)(n.code,{children:"B"}),", the VS solution will be in the ",(0,s.jsx)(n.code,{children:"vsxmake2022"})," directory."]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Open ",(0,s.jsx)(n.code,{children:"MyMods/vsxmake2022/MyMods.sln"})]}),"\n",(0,s.jsxs)(n.li,{children:["Make sure that you're set to the ",(0,s.jsx)(n.code,{children:"Game___Shipping__Win64"})," configuration unless you want to debug."]}),"\n",(0,s.jsxs)(n.li,{children:["Find your project (in my case: MyAwesomeMod) in the solution explorer and right click it and hit ",(0,s.jsx)(n.code,{children:"Build"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"part-3",children:"Part #3"}),"\n",(0,s.jsx)(n.p,{children:"In this part, we're going to learn how to log to file, and both consoles, as well as find a UObject by name, and log that name."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"#include <DynamicOutput/DynamicOutput.hpp>"})," under ",(0,s.jsx)(n.code,{children:"#include <Mod/CppUserModBase.hpp>"}),".",(0,s.jsx)(n.br,{}),"\n","You can now also remove ",(0,s.jsx)(n.code,{children:"#include <stdio.h>"})," because we'll be removing the use of ",(0,s.jsx)(n.code,{children:"printf"})," which was the only thing that required it."]}),"\n",(0,s.jsx)(n.li,{children:"To save some time and annoyance and make the code look a bit better, add this line below all the includes:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c++",children:"using namespace RC;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Replace the call to printf in the body of the ",(0,s.jsx)(n.code,{children:"MyAwesomeMod"})," constructor with:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c++",children:'Output::send<LogLevel::Verbose>(STR("MyAwesomeMod says hello\\n"));\n'})}),"\n",(0,s.jsxs)(n.p,{children:["It's longer than a call to ",(0,s.jsx)(n.code,{children:"printf"}),", but in return the message gets propagated to the log file and both the regular console and the GUI console.",(0,s.jsx)(n.br,{}),"\n","We also get some support for colors via the ",(0,s.jsx)(n.code,{children:"LogLevel"})," enum."]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Add this below the DynamicOutput include:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c++",children:"#include <Unreal/UObjectGlobals.hpp>\r\n#include <Unreal/UObject.hpp>\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["Let's again utilize the ",(0,s.jsx)(n.code,{children:"using namespace"})," shortcut by adding this below the first one: ",(0,s.jsx)(n.code,{children:"using namespace RC::Unreal;"})]}),"\n",(0,s.jsx)(n.li,{children:"Add this function in your mod class:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c++",children:'auto on_unreal_init() -> void override\r\n{\r\n    // You are allowed to use the \'Unreal\' namespace in this function and anywhere else after this function has fired.\r\n    auto Object = UObjectGlobals::StaticFindObject<UObject*>(nullptr, nullptr, STR("/Script/CoreUObject.Object"));\r\n    Output::send<LogLevel::Verbose>(STR("Object Name: {}\\n"), Object->GetFullName());\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Note that ",(0,s.jsx)(n.code,{children:"Output::send"})," doesn't require a ",(0,s.jsx)(n.code,{children:"LogLevel"})," and that we're using ",(0,s.jsx)(n.code,{children:"{}"})," in the format string instead of ",(0,s.jsx)(n.code,{children:"%s"}),".",(0,s.jsx)(n.br,{}),"\n","The ",(0,s.jsx)(n.code,{children:"Output::send"})," function uses ",(0,s.jsx)(n.code,{children:"std::format"})," in the back-end so you should do some research around std::format or libfmt if you want to know more about it."]}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:["Right click your project and hit ",(0,s.jsx)(n.code,{children:"Build"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"part-4",children:"Part #4"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/dev/guides/installing-a-c++-mod",children:"Click to go to guide for installing a C++ Mod"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>d});var s=r(6540);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);