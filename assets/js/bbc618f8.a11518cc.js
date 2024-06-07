"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4401],{4939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(4848),o=t(8453);const s={},r="Installation Guide",l={id:"installation-guide",title:"Installation Guide",description:"Core structure concept",source:"@site/versioned_docs/version-3.0.0/installation-guide.md",sourceDirName:".",slug:"/installation-guide",permalink:"/RE-UE4SS/3.0.0/installation-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/installation-guide.md",tags:[],version:"3.0.0",frontMatter:{},sidebar:"docs",previous:{title:"Experimental",permalink:"/RE-UE4SS/3.0.0/feature-overview/experimental"},next:{title:"Custom Game Configs",permalink:"/RE-UE4SS/3.0.0/custom-game-configs"}},a={},c=[{value:"Core structure concept",id:"core-structure-concept",level:2},{value:"Choosing an installation directory",id:"choosing-an-installation-directory",level:2},{value:"Method #1 - Automatic Injection (Preferred)",id:"method-1---automatic-injection-preferred",level:3},{value:"Method #2 - Manual Injection",id:"method-2---manual-injection",level:3},{value:"Method #3 - Central Install Location",id:"method-3---central-install-location",level:3},{value:"Last but not least...",id:"last-but-not-least",level:2},{value:"How to verify that UE4SS is running successfully?",id:"how-to-verify-that-ue4ss-is-running-successfully",level:2}];function d(e){const n={blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation-guide",children:"Installation Guide"}),"\n",(0,i.jsx)(n.h2,{id:"core-structure-concept",children:"Core structure concept"}),"\n",(0,i.jsx)(n.p,{children:"There are four concepts you need to know about."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"root directory"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This directory contains the ue4ss dll file."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"working directory"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This directory contains configuration and mod files and is located inside the ",(0,i.jsx)(n.code,{children:"root directory"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"game directory"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This directory usually contains a small executable with the name of your game and a folder with the same name."}),"\n",(0,i.jsxs)(n.li,{children:["This executable is ",(0,i.jsx)(n.em,{children:"not"})," your actual game but instead it's just a small wrapper that starts any 3rd party launcher such as Steam or if there is none then it launches the real executable."]}),"\n",(0,i.jsxs)(n.li,{children:["Example of a ",(0,i.jsx)(n.code,{children:"game directory"}),": ",(0,i.jsx)(n.code,{children:"D:\\Games\\Epic Games\\SatisfactoryEarlyAccess\\"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"game executable directory"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This directory contains the real executable file for your game and is not part of the UE4SS directory structure."}),"\n",(0,i.jsx)(n.li,{children:"You can also recognize it as the game executable located there is usually the largest (much larger than the wrapper above) and is the one running as the child process of the wrapper when the game is running."}),"\n",(0,i.jsxs)(n.li,{children:["Example of a ",(0,i.jsx)(n.code,{children:"game executable directory"}),":\r\n",(0,i.jsx)(n.code,{children:"D:\\Games\\Epic Games\\SatisfactoryEarlyAccess\\FactoryGame\\Binaries\\Win64\\"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"choosing-an-installation-directory",children:"Choosing an installation directory"}),"\n",(0,i.jsx)(n.p,{children:"You can install UE4SS in a couple of different ways."}),"\n",(0,i.jsxs)(n.p,{children:["The goal is to have the *.DLL of UE4SS to be loaded by the target game one way or another, and have the configuration files and ",(0,i.jsx)(n.code,{children:"\\Mods\\"})," directory in the correct place for UE4SS to find them."]}),"\n",(0,i.jsx)(n.h3,{id:"method-1---automatic-injection-preferred",children:"Method #1 - Automatic Injection (Preferred)"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Using method #1 will mean that the ",(0,i.jsx)(n.code,{children:"root directory"})," and ",(0,i.jsx)(n.code,{children:"working directory"})," are treated as one single directory that happens to also be the same directory as your ",(0,i.jsx)(n.code,{children:"game executable directory"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The preferred and most straightforward way to install UE4SS is to choose the ",(0,i.jsx)(n.code,{children:"ue4ss_xinput"})," download and then just drag & drop all the necessary files into the ",(0,i.jsx)(n.code,{children:"game executable directory"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Now all you need to do is start your game and UE4SS will automatically be injected."}),"\n",(0,i.jsx)(n.h3,{id:"method-2---manual-injection",children:"Method #2 - Manual Injection"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Using method #2 will mean that the ",(0,i.jsx)(n.code,{children:"root directory"})," and ",(0,i.jsx)(n.code,{children:"working directory"})," are treated as one single directory that happens to also be the same directory as your ",(0,i.jsx)(n.code,{children:"game executable directory"}),",",(0,i.jsx)(n.br,{}),"\n","but any directory may be used."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Following the download of ",(0,i.jsx)(n.code,{children:"ue4ss_xinput"}),", delete ",(0,i.jsx)(n.code,{children:"xinput1_3.dll"}),".  Afterwards, launch the game and manually inject ",(0,i.jsx)(n.code,{children:"ue4ss.dll"})," using your injector of choice."]}),"\n",(0,i.jsx)(n.h3,{id:"method-3---central-install-location",children:"Method #3 - Central Install Location"}),"\n",(0,i.jsxs)(n.p,{children:["This method is a way to install UE4SS in one place for all your games. Simply extract the zip file in any directory ",(0,i.jsx)(n.em,{children:"outside"})," the ",(0,i.jsx)(n.code,{children:"game directory"}),", this is what's known as the ",(0,i.jsx)(n.code,{children:"root directory"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You will then create a folder inside with the name of your game and drag ",(0,i.jsx)(n.code,{children:"UE4SS-settings.ini"})," in to it, this is what's known as the ",(0,i.jsx)(n.code,{children:"working directory"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"If the path to your game executable is"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"D:\\Games\\Epic Games\\SatisfactoryEarlyAccess\\FactoryGame\\Binaries\\Win64\\FactoryGame-Win64-Shipping.exe\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then the name of your ",(0,i.jsx)(n.code,{children:"working directory"})," should be ",(0,i.jsx)(n.code,{children:"SatisfactoryEarlyAccess"}),".",(0,i.jsx)(n.br,{}),"\n","This directory will be automatically found and used by UE4SS if it exists."]}),"\n",(0,i.jsxs)(n.p,{children:["As of UE4SS 2.6, the following files & folders exist inside the ",(0,i.jsx)(n.code,{children:"working directory"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mods","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Mod folders"}),"\n",(0,i.jsx)(n.li,{children:"mods.txt"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"UE4SS-settings.ini"}),"\n",(0,i.jsx)(n.li,{children:"UE4SS.log"}),"\n",(0,i.jsx)(n.li,{children:"ue4ss.dll"}),"\n",(0,i.jsx)(n.li,{children:"xinput1_3.dll (Optional proxy dll when using Method #1. Can have a name of any DLL that is loaded by the game engine or by its dependencies)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Now all you need to do is start your game and point your injector of choice to ",(0,i.jsx)(n.code,{children:"<root directory>/ue4ss.dll"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"last-but-not-least",children:"Last but not least..."}),"\n",(0,i.jsxs)(n.p,{children:["If you use method #3, if you keep a copy of ",(0,i.jsx)(n.code,{children:"UE4SS-settings.ini"})," inside the ",(0,i.jsx)(n.code,{children:"root directory"})," then this file will act as a default for all the games that don't have a ",(0,i.jsx)(n.code,{children:"working directory"}),(0,i.jsx)(n.br,{}),"\n","as long as you still point your injector to the ",(0,i.jsx)(n.code,{children:"root directory"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This way you can use method #3 for most of your games and at the same time you can use method #2 for other games if method #3 is problematic for you."}),"\n",(0,i.jsx)(n.h2,{id:"how-to-verify-that-ue4ss-is-running-successfully",children:"How to verify that UE4SS is running successfully?"}),"\n",(0,i.jsx)(n.p,{children:"Try any of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Press any of the default keyboard shortcuts, such as ",(0,i.jsx)(n.code,{children:"@"})," or ",(0,i.jsx)(n.code,{children:"F10"})," that open the in-game console (using built-in ",(0,i.jsx)(n.code,{children:"ConsoleEnablerMod"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Check that the log file ",(0,i.jsx)(n.code,{children:"UE4SS.log"})," is created in the same folder as the UE4SS main DLL, and that the log file contains fresh timestamps and no errors."]}),"\n",(0,i.jsxs)(n.li,{children:["Enable the GUI console in ",(0,i.jsx)(n.code,{children:"UE4SS-settings.ini"})," and check that it appears as a separate window (rendered with OpenGL by default)."]}),"\n",(0,i.jsx)(n.li,{children:"(For developers, if the game is confirmed to be safely debuggable) Check that the UE4SS library is being loaded in a debugger and has its threads spawned in the target game's process and in a reasonable state."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);