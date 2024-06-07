"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[234],{6903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(4848),o=n(8453);const a={},s="Creating GUI tabs with a C++ mod",i={id:"guides/creating-gui-tabs-with-c++-mod",title:"Creating GUI tabs with a C++ mod",description:"UE4SS already includes the ImGui library to render its console GUI, built from the UE4SS-RE/imgui repo. Refer to ImGui documentation in that repo on how to use ImGui-specific classes and methods for rendering actual buttons and textboxes and other window objects.",source:"@site/docs/guides/creating-gui-tabs-with-c++-mod.md",sourceDirName:"guides",slug:"/guides/creating-gui-tabs-with-c++-mod",permalink:"/RE-UE4SS/dev/guides/creating-gui-tabs-with-c++-mod",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/guides/creating-gui-tabs-with-c++-mod.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Installing a C++ Mod",permalink:"/RE-UE4SS/dev/guides/installing-a-c++-mod"},next:{title:"Fixing missing AOBs",permalink:"/RE-UE4SS/dev/guides/fixing-compatibility-problems"}},d={},c=[];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"creating-gui-tabs-with-a-c-mod",children:"Creating GUI tabs with a C++ mod"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["UE4SS already includes the ImGui library to render its console GUI, built from the ",(0,r.jsx)(t.a,{href:"https://github.com/UE4SS-RE/imgui",children:"UE4SS-RE/imgui"})," repo. Refer to ",(0,r.jsx)(t.a,{href:"https://github.com/UE4SS-RE/imgui/tree/master/docs",children:"ImGui documentation in that repo"})," on how to use ImGui-specific classes and methods for rendering actual buttons and textboxes and other window objects."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This guide will show how you create custom tabs for the GUI with a C++ mod, and the guide will take the form of comments in the code example below:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c++",children:"#include <Mod/CppUserModBase.hpp>\r\n#include <UE4SSProgram.hpp>\r\n\r\nclass MyAwesomeMod : public RC::CppUserModBase\r\n{\r\nprivate:\r\n    int m_private_number{33};\r\n    std::shared_ptr<GUI::GUITab> m_less_safe_tab{};\r\n\r\npublic:\r\n    MyAwesomeMod() : CppUserModBase()\r\n    {\r\n        ModName = STR(\"MyAwesomeMod\");\r\n        ModVersion = STR(\"1.0\");\r\n        ModDescription = STR(\"This is my awesome mod\");\r\n        ModAuthors = STR(\"UE4SS Team\");\r\n        \r\n        // The 'register_tab' function will tell UE4SS to render a tab.\r\n        // Tabs registered this way will be automatically cleaned up when this C++ mod is destructed.\r\n        // The first param is the display name of your tab.\r\n        // The second param is a callback that UE4SS will use to render the contents of the tab.\r\n        // The param to the callback is a pointer to your mod.\r\n        register_tab(STR(\"My Test Tab\"), [](CppUserModBase* instance) {\r\n            // In this callback, you can start rendering the contents of your tab with ImGui. \r\n            ImGui::Text(\"This is the contents of the tab\");\r\n            \r\n            // You can access members of your mod class with the 'instance' param.\r\n            auto mod = dynamic_cast<MyAwesomeMod*>(instance);\r\n            if (!mod)\r\n            {\r\n                // Something went wrong that caused the 'instance' to not be correctly set.\r\n                // Let's abort the rest of the function so that you don't access an invalid pointer.\r\n                return;\r\n            }\r\n            \r\n            // You can access both public and private members.\r\n            mod->render_some_stuff(mod->m_private_number);\r\n        });\r\n        \r\n        // The 'UE4SSProgram::add_gui_tab' function is another way to tell UE4SS to render a tab.\r\n        // This way of registering a tab will make you responsible for cleaning up the tab when your mod destructs.\r\n        // Failure to clean up the tab on mod destruction will result in a crash.\r\n        // It's recommended that you use 'register_tab' instead of this function.\r\n        m_less_safe_tab = std::make_shared<GUI::GUITab>(STR(\"My Less Safe Tab\"), [](CppUserModBase* instance) {\r\n            // This callback is identical to the one used with 'register_tab' except 'instance' is always nullptr.\r\n            ImGui::Text(\"This is the contents of the less safe tab\");\r\n        });\r\n        UE4SSProgram::get_program().add_gui_tab(m_less_safe_tab);\r\n    }\r\n\r\n    ~MyAwesomeMod() override\r\n    {\r\n        // Because you created a tab with 'UE4SSProgram::add_gui_tab', you must manually remove it.\r\n        // Failure to remove the tab will result in a crash.\r\n        UE4SSProgram::get_program().remove_gui_tab(m_less_safe_tab);\r\n    }\r\n    \r\n    auto on_ui_init() -> void override\r\n    {\r\n        // It's critical that you enable ImGui if you intend to use ImGui within the context of UE4SS.\r\n        // If you don't do this, a crash will occur as soon as ImGui tries to render anything, for example in your tab.\r\n        UE4SS_ENABLE_IMGUI()\r\n    }\r\n    \r\n    auto render_some_stuff(int Number) -> void\r\n    {\r\n        auto calculated_value = Number + 1;\r\n        ImGui::Text(std::format(\"calculated_value: {}\", calculated_value).c_str());\r\n    }\r\n};\r\n\r\n#define MY_AWESOME_MOD_API __declspec(dllexport)\r\nextern \"C\"\r\n{\r\n    MY_AWESOME_MOD_API RC::CppUserModBase* start_mod()\r\n    {\r\n        return new MyAwesomeMod();\r\n    }\r\n\r\n    MY_AWESOME_MOD_API void uninstall_mod(RC::CppUserModBase* mod)\r\n    {\r\n        delete mod;\r\n    }\r\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(6540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);