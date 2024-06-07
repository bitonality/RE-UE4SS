"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[959],{816:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var i=r(4848),s=r(8453);const t={},o="Creating a C++ mod",d={id:"guides/creating-a-c++-mod",title:"Creating a C++ mod",description:"This guide will help you create a C++ mod using UE4SS.",source:"@site/versioned_docs/version-3.0.0/guides/creating-a-c++-mod.md",sourceDirName:"guides",slug:"/guides/creating-a-c++-mod",permalink:"/RE-UE4SS/3.0.0/guides/creating-a-c++-mod",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/guides/creating-a-c++-mod.md",tags:[],version:"3.0.0",frontMatter:{},sidebar:"docs",previous:{title:"C++ Examples",permalink:"/RE-UE4SS/3.0.0/cpp-api/cpp-examples"},next:{title:"installing-a-c++-mod",permalink:"/RE-UE4SS/3.0.0/guides/installing-a-c++-mod"}},l={},c=[{value:"Part 1",id:"part-1",level:2},{value:"Part #2",id:"part-2",level:2},{value:"Part #3",id:"part-3",level:2},{value:"Part #4",id:"part-4",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"creating-a-c-mod",children:"Creating a C++ mod"}),"\n",(0,i.jsxs)(n.p,{children:["This guide will help you create a C++ mod using UE4SS.",(0,i.jsx)(n.br,{}),"\n","It's split up into four parts.",(0,i.jsx)(n.br,{}),"\n","Part one goes over the prerequisites.",(0,i.jsx)(n.br,{}),"\n","Part two goes over creating the most basic C++ mod possible.",(0,i.jsx)(n.br,{}),"\n","Part three will show you how to interact with UE4SS and UE itself (via UE4SS).",(0,i.jsx)(n.br,{}),"\n","Part four will cover installation of the mod."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The guide requires having a working C++ development environment with ",(0,i.jsx)(n.code,{children:"cmake"})," and ",(0,i.jsx)(n.code,{children:"git"}),", preferably similar to the one required to build UE4SS itself from sources."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"part-1",children:"Part 1"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Make an Epic account and link it to your GitHub account."}),"\n",(0,i.jsxs)(n.li,{children:["Make a directory somewhere on your computer, the name doesn't matter but I named mine ",(0,i.jsx)(n.code,{children:"MyMods"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Clone the RE-UE4SS repo so that you end up with ",(0,i.jsx)(n.code,{children:"MyMods/RE-UE4SS"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Open CMD and cd into ",(0,i.jsx)(n.code,{children:"RE-UE4SS"})," and execute: ",(0,i.jsx)(n.code,{children:"git submodule update --init --recursive"})]}),"\n",(0,i.jsxs)(n.li,{children:["Go back to the ",(0,i.jsx)(n.code,{children:"MyMods"})," directory and create a new directory, this directory will contain your mod source files.\r\nI named mine ",(0,i.jsx)(n.code,{children:"MyAwesomeMod"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Create a file called ",(0,i.jsx)(n.code,{children:"CMakeLists.txt"})," inside ",(0,i.jsx)(n.code,{children:"MyMods"})," and put this inside it:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmake",children:"cmake_minimum_required(VERSION 3.18)\r\n\r\nproject(MyMods)\r\n\r\nadd_subdirectory(RE-UE4SS)\r\nadd_subdirectory(MyAwesomeMod)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"part-2",children:"Part #2"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a file called ",(0,i.jsx)(n.code,{children:"CMakeLists.txt"})," inside ",(0,i.jsx)(n.code,{children:"MyMods/MyAwesomeMod"})," and put this inside it:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmake",children:'cmake_minimum_required(VERSION 3.18)\r\n\r\nset(TARGET MyAwesomeMod)\r\nproject(${TARGET})\r\n\r\nadd_library(${TARGET} SHARED "dllmain.cpp")\r\ntarget_include_directories(${TARGET} PRIVATE .)\r\ntarget_link_libraries(${TARGET} PUBLIC UE4SS)\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Make a file called ",(0,i.jsx)(n.code,{children:"dllmain.cpp"})," in ",(0,i.jsx)(n.code,{children:"MyMods/MyAwesomeMod"})," and put this inside it:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:'#include <stdio.h>\r\n#include <Mod/CppUserModBase.hpp>\r\n\r\nclass MyAwesomeMod : public RC::CppUserModBase\r\n{\r\npublic:\r\n    MyAwesomeMod() : CppUserModBase()\r\n    {\r\n        ModName = STR("MyAwesomeMod");\r\n        ModVersion = STR("1.0");\r\n        ModDescription = STR("This is my awesome mod");\r\n        ModAuthors = STR("UE4SS Team");\r\n        // Do not change this unless you want to target a UE4SS version\r\n        // other than the one you\'re currently building with somehow.\r\n        //ModIntendedSDKVersion = STR("2.6");\r\n        \r\n        printf("MyAwesomeMod says hello\\n");\r\n    }\r\n\r\n    ~MyAwesomeMod() override\r\n    {\r\n    }\r\n\r\n    auto on_update() -> void override\r\n    {\r\n    }\r\n};\r\n\r\n#define MY_AWESOME_MOD_API __declspec(dllexport)\r\nextern "C"\r\n{\r\n    MY_AWESOME_MOD_API RC::CppUserModBase* start_mod()\r\n    {\r\n        return new MyAwesomeMod();\r\n    }\r\n\r\n    MY_AWESOME_MOD_API void uninstall_mod(RC::CppUserModBase* mod)\r\n    {\r\n        delete mod;\r\n    }\r\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["In the command prompt, in the ",(0,i.jsx)(n.code,{children:"MyMods"})," directory, execute: ",(0,i.jsx)(n.code,{children:"cmake -S . -B Output"})]}),"\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.code,{children:"MyMods/Output/MyMods.sln"})]}),"\n",(0,i.jsxs)(n.li,{children:["Make sure that you're set to the ",(0,i.jsx)(n.code,{children:"Release"})," configuration unless you want to debug."]}),"\n",(0,i.jsxs)(n.li,{children:["Find your project (in my case: MyAwesomeMod) in the solution explorer and right click it and hit ",(0,i.jsx)(n.code,{children:"Build"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"part-3",children:"Part #3"}),"\n",(0,i.jsx)(n.p,{children:"In this part, we're going to learn how to log to file, and both consoles, as well as find a UObject by name, and log that name."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"#include <DynamicOutput/DynamicOutput.hpp>"})," under ",(0,i.jsx)(n.code,{children:"#include <Mod/CppUserModBase.hpp>"}),".",(0,i.jsx)(n.br,{}),"\n","You can now also remove ",(0,i.jsx)(n.code,{children:"#include <stdio.h>"})," because we'll be removing the use of ",(0,i.jsx)(n.code,{children:"printf"})," which was the only thing that required it."]}),"\n",(0,i.jsx)(n.li,{children:"To save some time and annoyance and make the code look a bit better, add this line below all the includes:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:"using namespace RC;\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Replace the call to printf in the body of the ",(0,i.jsx)(n.code,{children:"MyAwesomeMod"})," constructor with:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:'Output::send<LogLevel::Verbose>(STR("MyAwesomeMod says hello\\n"));\n'})}),"\n",(0,i.jsxs)(n.p,{children:["It's longer than a call to ",(0,i.jsx)(n.code,{children:"printf"}),", but in return the message gets propagated to the log file and both the regular console and the GUI console.",(0,i.jsx)(n.br,{}),"\n","We also get some support for colors via the ",(0,i.jsx)(n.code,{children:"LogLevel"})," enum."]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Add this below the DynamicOutput include:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:"#include <Unreal/UObjectGlobals.hpp>\r\n#include <Unreal/UObject.hpp>\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["Let's again utilize the ",(0,i.jsx)(n.code,{children:"using namespace"})," shortcut by adding this below the first one: ",(0,i.jsx)(n.code,{children:"using namespace RC::Unreal;"})]}),"\n",(0,i.jsx)(n.li,{children:"Add this function in your mod class:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:'auto on_unreal_init() -> void override\r\n{\r\n    // You are allowed to use the \'Unreal\' namespace in this function and anywhere else after this function has fired.\r\n    auto Object = UObjectGlobals::StaticFindObject<UObject*>(nullptr, nullptr, STR("/Script/CoreUObject.Object"));\r\n    Output::send<LogLevel::Verbose>(STR("Object Name: {}\\n"), Object->GetFullName());\r\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Note that ",(0,i.jsx)(n.code,{children:"Output::send"})," doesn't require a ",(0,i.jsx)(n.code,{children:"LogLevel"})," and that we're using ",(0,i.jsx)(n.code,{children:"{}"})," in the format string instead of ",(0,i.jsx)(n.code,{children:"%s"}),".",(0,i.jsx)(n.br,{}),"\n","The ",(0,i.jsx)(n.code,{children:"Output::send"})," function uses ",(0,i.jsx)(n.code,{children:"std::format"})," in the back-end so you should do some research around std::format or libfmt if you want to know more about it."]}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsxs)(n.li,{children:["Right click your project and hit ",(0,i.jsx)(n.code,{children:"Build"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"part-4",children:"Part #4"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/RE-UE4SS/3.0.0/guides/installing-a-c++-mod",children:"Click to go to guide for installing a C++ Mod"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var i=r(6540);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);