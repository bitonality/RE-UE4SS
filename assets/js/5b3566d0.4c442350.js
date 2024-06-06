"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1482],{5794:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var l=s(4848),r=s(8453);const t={},i="UObject",c={id:"lua-api/classes/uobject",title:"UObject",description:"The UObject class is the base class that most other Unreal Engine game objects inherit from.",source:"@site/docs/lua-api/classes/uobject.md",sourceDirName:"lua-api/classes",slug:"/lua-api/classes/uobject",permalink:"/RE-UE4SS/dev/lua-api/classes/uobject",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/lua-api/classes/uobject.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"UnrealVersion",permalink:"/RE-UE4SS/dev/lua-api/classes/unrealversion"},next:{title:"UObjectReflection",permalink:"/RE-UE4SS/dev/lua-api/classes/uobjectreflection"}},a={},d=[{value:"Inheritance",id:"inheritance",level:2},{value:"Metamethods",id:"metamethods",level:2},{value:"__index",id:"__index",level:3},{value:"__newindex",id:"__newindex",level:3},{value:"Methods",id:"methods",level:2},{value:"GetFullName()",id:"getfullname",level:3},{value:"GetFName()",id:"getfname",level:3},{value:"GetAddress()",id:"getaddress",level:3},{value:"GetClass()",id:"getclass",level:3},{value:"GetOuter()",id:"getouter",level:3},{value:"IsAnyClass()",id:"isanyclass",level:3},{value:"Reflection()",id:"reflection",level:3},{value:"GetPropertyValue(string MemberVariableName)",id:"getpropertyvaluestring-membervariablename",level:3},{value:"SetPropertyValue(string MemberVariableName, auto NewValue)",id:"setpropertyvaluestring-membervariablename-auto-newvalue",level:3},{value:"IsClass()",id:"isclass",level:3},{value:"GetWorld()",id:"getworld",level:3},{value:"IsA(UClass Class)",id:"isauclass-class",level:3},{value:"IsA(string FullClassName)",id:"isastring-fullclassname",level:3},{value:"HasAllFlags(EObjectFlags FlagsToCheck)",id:"hasallflagseobjectflags-flagstocheck",level:3},{value:"HasAnyFlags(EObjectFlags FlagsToCheck)",id:"hasanyflagseobjectflags-flagstocheck",level:3},{value:"HasAnyInternalFlags(EInternalObjectFlags InternalFlagsToCheck)",id:"hasanyinternalflagseinternalobjectflags-internalflagstocheck",level:3},{value:"CallFunction(UFunction Function, auto Params...)",id:"callfunctionufunction-function-auto-params",level:3},{value:"ProcessConsoleExec(string Cmd, nil Reserved, UObject Executor)",id:"processconsoleexecstring-cmd-nil-reserved-uobject-executor",level:3},{value:"type()",id:"type",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"uobject",children:"UObject"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"UObject"})," class is the base class that most other Unreal Engine game objects inherit from."]}),"\n",(0,l.jsx)(n.h2,{id:"inheritance",children:"Inheritance"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/RE-UE4SS/dev/lua-api/classes/remoteobject",children:"RemoteObject"})}),"\n",(0,l.jsx)(n.h2,{id:"metamethods",children:"Metamethods"}),"\n",(0,l.jsx)(n.h3,{id:"__index",children:"__index"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Usage:"})," ",(0,l.jsx)(n.code,{children:'UObject["ObjectMemberName"]'})," or ",(0,l.jsx)(n.code,{children:"UObject.ObjectMemberName"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Returns either a member variable (reflected property or custom property) or a UFunction."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["This method can return any type, and you can use the UObject-specific ",(0,l.jsx)(n.code,{children:"type()"})," function on the returned value to figure out the type if the type is non-trivial."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["If the type is trivial, use the regular ",(0,l.jsx)(n.code,{children:"type()"})," Lua function."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Return Value:"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"#"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Information"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"UObject or UFunction"}),(0,l.jsxs)(n.td,{children:["If the type is ",(0,l.jsx)(n.code,{children:"UObject"}),", then the actual type may be any class that inherits from ",(0,l.jsx)(n.code,{children:"UObject"}),"."]})]})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'local Character = FindFirstOf("Character")\r\n\r\n-- Retrieve a non-trivial type\r\nlocal MovementComponent = Character.CharacterMovement\r\n\r\n-- Retrieve a trivial type\r\nlocal JumpMaxCount = Character.JumpMaxCount\r\n\r\n-- Call a UFunction member on the object\r\n-- Remember to use a colon (:) for calls\r\nlocal CanCharacterJump = Character:CanJump()\r\n\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"__newindex",children:"__newindex"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Usage:"})," ",(0,l.jsx)(n.code,{children:'UObject["ObjectMemberName"] = NewValue'})," or ",(0,l.jsx)(n.code,{children:"UObject.ObjectMemberName = NewValue"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Sets the value of a member variable to ",(0,l.jsx)(n.code,{children:"NewValue"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Example:"}),"\r\nSets the value of ",(0,l.jsx)(n.code,{children:"MaxParticleResize"})," in the first instance of class ",(0,l.jsx)(n.code,{children:"UEngine"})," in memory."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'local Engine = FindFirstOf("Engine")\r\nEngine.MaxParticleResize = 4\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(n.h3,{id:"getfullname",children:"GetFullName()"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Returns:"})," the full name & path info for a ",(0,l.jsx)(n.code,{children:"UObject"})," & its derivatives"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Return Value:"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"#"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Information"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{children:"Full name and path of the UObject"})]})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'local Engine = FindFirstOf("Engine")\r\nprint(string.format("Engine Name: %s", Engine:GetFullName()))\r\n\r\n-- Output\r\n-- Engine Name: FGGameEngine /Engine/Transient.FGGameEngine_2147482618\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"getfname",children:"GetFName()"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Returns:"})," the FName of the UObject. This is equivalent to ",(0,l.jsx)(n.code,{children:"Object->NamePrivate"})," in Unreal."]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["Warning: All FNames returned by ",(0,l.jsx)(n.code,{children:"__index"})," are returned by reference."]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Return Value:"})}),"\n"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"#"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Information"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"FName"}),(0,l.jsx)(n.td,{children:"FName of the UObject"})]})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'local Character = FindFirstOf("Character")\r\nif Character:IsValid() then\r\n    local CharacterName = Character:GetFName()\r\n    print(string.format("ComparisonIndex: 0x%X\\n", CharacterName:GetComparisonIndex()))\r\nend\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"getaddress",children:"GetAddress()"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Returns:"})," where in memory the UObject is located."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Return Value:"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"#"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Information"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"integer"}),(0,l.jsx)(n.td,{children:"64-bit integer, address of the UObject"})]})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'local Character = FindFirstOf("Character")\r\nif Character:IsValid() then\r\n    print(string.format("Character: 0x%X\\n", Character:GetAddress()))\r\nend\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"getclass",children:"GetClass()"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Returns:"})," the class of this object. This is equivalent to ",(0,l.jsx)(n.code,{children:"UObject->ClassPrivate"})," in Unreal."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Return Value:"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"#"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Information"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"UClass"}),(0,l.jsx)(n.td,{children:"The class of the UObject"})]})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'local Character = FindFirstOf("Character")\r\nif Character:IsValid() then\r\n    print(string.format("Character Class: 0x%X\\n", Character:GetClass():GetAddress()))\r\nend\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"getouter",children:"GetOuter()"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Returns:"})," the outer of the UObject. This is equivalent to ",(0,l.jsx)(n.code,{children:"Object->OuterPrivate"})," in Unreal."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Return Value:"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"#"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Information"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"UObject"}),(0,l.jsx)(n.td,{children:"The outer UObject of this UObject"})]})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'local Character = FindFirstOf("Character")\r\nif Character:IsValid() then\r\n    print(string.format("Character Outer: 0x%X\\n", Character:GetOuter():GetAddress()))\r\nend\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"isanyclass",children:"IsAnyClass()"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Return type:"})," ",(0,l.jsx)(n.code,{children:"bool"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Returns:"})," true if this ",(0,l.jsx)(n.code,{children:"UObject"})," is a ",(0,l.jsx)(n.code,{children:"UClass"})," or a derivative of ",(0,l.jsx)(n.code,{children:"UClass"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"reflection",children:"Reflection()"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Return type:"})," ",(0,l.jsx)(n.code,{children:"UObjectReflection"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Returns:"})," a reflection object"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"getpropertyvaluestring-membervariablename",children:"GetPropertyValue(string MemberVariableName)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Return type:"})," ",(0,l.jsx)(n.code,{children:"auto"})]}),"\n",(0,l.jsxs)(n.li,{children:["Identical to ",(0,l.jsx)(n.code,{children:"__index"})," metamethod (doing ",(0,l.jsx)(n.code,{children:'UObject["ObjectMemberName"]'}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"setpropertyvaluestring-membervariablename-auto-newvalue",children:"SetPropertyValue(string MemberVariableName, auto NewValue)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Identical to ",(0,l.jsx)(n.code,{children:"__newindex"})," metamethod (doing ",(0,l.jsx)(n.code,{children:'UObject["ObjectMemberName"] = NewValue'}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"isclass",children:"IsClass()"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Return type:"})," ",(0,l.jsx)(n.code,{children:"bool"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Returns:"})," whether this object is a ",(0,l.jsx)(n.code,{children:"UClass"})," or ",(0,l.jsx)(n.code,{children:"UClass"})," derivative"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"getworld",children:"GetWorld()"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Return type:"})," ",(0,l.jsx)(n.code,{children:"UWorld"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Returns:"})," the ",(0,l.jsx)(n.code,{children:"UWorld"})," that this ",(0,l.jsx)(n.code,{children:"UObject"})," is contained within."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"isauclass-class",children:"IsA(UClass Class)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Return type:"})," ",(0,l.jsx)(n.code,{children:"bool"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Returns:"})," whether this object is of the specified ",(0,l.jsx)(n.code,{children:"UClass"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"isastring-fullclassname",children:"IsA(string FullClassName)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Return type:"})," ",(0,l.jsx)(n.code,{children:"bool"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Returns:"})," whether this object is of the specified class name."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hasallflagseobjectflags-flagstocheck",children:"HasAllFlags(EObjectFlags FlagsToCheck)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Return type:"})," ",(0,l.jsx)(n.code,{children:"bool"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Returns:"})," whether the object has all of the specified flags."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hasanyflagseobjectflags-flagstocheck",children:"HasAnyFlags(EObjectFlags FlagsToCheck)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Return type:"})," ",(0,l.jsx)(n.code,{children:"bool"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Returns:"})," whether the object has any of the specified flags."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hasanyinternalflagseinternalobjectflags-internalflagstocheck",children:"HasAnyInternalFlags(EInternalObjectFlags InternalFlagsToCheck)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Return type:"})," ",(0,l.jsx)(n.code,{children:"bool"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Returns:"})," whether the object has any of the specified internal flags."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"callfunctionufunction-function-auto-params",children:"CallFunction(UFunction Function, auto Params...)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Calls the supplied ",(0,l.jsx)(n.code,{children:"UFunction"})," on this ",(0,l.jsx)(n.code,{children:"UObject"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"processconsoleexecstring-cmd-nil-reserved-uobject-executor",children:"ProcessConsoleExec(string Cmd, nil Reserved, UObject Executor)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Calls ",(0,l.jsx)(n.code,{children:"UObject::ProcessConsoleExec"})," with the supplied params."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"type",children:"type()"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Return type:"})," ",(0,l.jsx)(n.code,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Returns:"})," the type of this object as known by UE4SS"]}),"\n",(0,l.jsx)(n.li,{children:"This does not return the type as known by Unreal"}),"\n",(0,l.jsxs)(n.li,{children:["Not equivalent to doing ",(0,l.jsx)(n.code,{children:"type(UObject)"}),", which returns the type as known by Lua (a 'userdata')"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var l=s(6540);const r={},t=l.createContext(r);function i(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);