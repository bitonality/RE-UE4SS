"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1214],{1578:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=r(4848),t=r(8453);const i={},l="Dumpers",d={id:"feature-overview/dumpers",title:"Dumpers",description:"C++ Header Generator",source:"@site/docs/feature-overview/dumpers.md",sourceDirName:"feature-overview",slug:"/feature-overview/dumpers",permalink:"/RE-UE4SS/dev/feature-overview/dumpers",draft:!1,unlisted:!1,editUrl:"https://github.com/UE4SS-RE/RE-UE4SS/edit/main/docs/feature-overview/dumpers.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Live Viewer",permalink:"/RE-UE4SS/dev/feature-overview/live-view"},next:{title:"Lua API",permalink:"/RE-UE4SS/dev/lua-api"}},c={},o=[{value:"C++ Header Generator",id:"c-header-generator",level:2},{value:"Configurations",id:"configurations",level:3},{value:"Unreal Header Tool (UHT) Dumper",id:"unreal-header-tool-uht-dumper",level:2},{value:"Configurations",id:"configurations-1",level:3},{value:"Object Dumper",id:"object-dumper",level:2},{value:"Configurations",id:"configurations-2",level:3},{value:".usmap Dumper",id:"usmap-dumper",level:2},{value:".umap Recreation Dumper",id:"umap-recreation-dumper",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"dumpers",children:"Dumpers"}),"\n",(0,s.jsx)(n.h2,{id:"c-header-generator",children:"C++ Header Generator"}),"\n",(0,s.jsx)(n.p,{children:"The C++ dumper is a tool that generates C++ headers from UE4 classes and blueprints."}),"\n",(0,s.jsxs)(n.p,{children:["The keybind to generate headers is by default ",(0,s.jsx)(n.code,{children:"CTRL"})," + ",(0,s.jsx)(n.code,{children:"H"}),", and it can be changed in ",(0,s.jsx)(n.code,{children:"Mods/Keybinds/Scripts/main.lua"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["It generates a ",(0,s.jsx)(n.code,{children:".hpp"})," file for each blueprint (including animation blueprint and widget blueprint), and then all of the base classes inside of ",(0,s.jsx)(n.code,{children:"<ProjectName>.hpp"})," or ",(0,s.jsx)(n.code,{children:"<EngineModule>.hpp"}),". All classes are at the top of the files, followed by all structs. Enums are seperated into files named the same as their class, but with ",(0,s.jsx)(n.code,{children:"_enums"})," appended to the end."]}),"\n",(0,s.jsx)(n.h3,{id:"configurations",children:"Configurations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"DumpOffsetsAndSizes"})," (bool)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Whether to property offsets and sizes"}),"\n",(0,s.jsx)(n.li,{children:"Default: 1"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"KeepMemoryLayout"})," (bool)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Whether memory layouts of classes and structs should be accurate"}),"\n",(0,s.jsx)(n.li,{children:"This must be set to 1, if you want to use the generated headers in an actual C++ project"}),"\n",(0,s.jsx)(n.li,{children:"When set to 0, padding member variables will not be generated"}),"\n",(0,s.jsx)(n.li,{children:"Default: 0"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Warning: A value of 1 has no purpose yet as memory value is not accurate either way!"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"LoadAllAssetsBeforeGeneratingCXXHeaders"})," (bool)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Whether to force all assets to be loaded before generating headers"}),"\n",(0,s.jsx)(n.li,{children:"Default: 0"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Warning: Can require multiple gigabytes of extra memory, is not stable & will crash the game if you load past the main menu after dumping"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"unreal-header-tool-uht-dumper",children:"Unreal Header Tool (UHT) Dumper"}),"\n",(0,s.jsxs)(n.p,{children:["Generates Unreal Header Tool compatible C++ headers for creating a mirror ",(0,s.jsx)(n.code,{children:".uproject"})," for your game. The guide for using these headers can be found ",(0,s.jsx)(n.a,{href:"/RE-UE4SS/dev/guides/generating-uht-compatible-headers",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The keybind to generate headers is by default ",(0,s.jsx)(n.code,{children:"CTRL"})," + ",(0,s.jsx)(n.code,{children:"Numpad 9"}),", and it can be changed in ",(0,s.jsx)(n.code,{children:"Mods/Keybinds/Scripts/main.lua"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"configurations-1",children:"Configurations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"IgnoreAllCoreEngineModules"})," (bool)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Whether to skip generating packages that belong to the engine, particularly useful for any games that make alterations to the engine"}),"\n",(0,s.jsx)(n.li,{children:"Default: 0"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"IgnoreEngineAndCoreUObject"})," (bool)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Whether to skip generating the ",(0,s.jsx)(n.code,{children:"Engine"})," and ",(0,s.jsx)(n.code,{children:"CoreUObject"})," packages"]}),"\n",(0,s.jsx)(n.li,{children:"Default: 1"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"MakeAllFunctionsBlueprintCallable"})," (bool)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Whether to force all UFUNCTION macros to have ",(0,s.jsx)(n.code,{children:"BlueprintCallable"})]}),"\n",(0,s.jsx)(n.li,{children:"Default: 1"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Warning: This will cause some errors in the generated headers that you will need to manually fix"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"MakeAllPropertyBlueprintsReadWrite"})," (bool)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Whether to force all UPROPERTY macros to have ",(0,s.jsx)(n.code,{children:"BlueprintReadWrite"})]}),"\n",(0,s.jsxs)(n.li,{children:["Also forces all UPROPERTY macros to have ",(0,s.jsx)(n.code,{children:"meta=(AllowPrivateAccess=true)"})]}),"\n",(0,s.jsx)(n.li,{children:"Default: 1"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"MakeEnumClassesBlueprintType"})," (bool)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Whether to force UENUM macros on enums to have ",(0,s.jsx)(n.code,{children:"BlueprintType"})," if the underlying type was implicit or uint8"]}),"\n",(0,s.jsx)(n.li,{children:"Default: 1"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Warning: This also forces the underlying type to be uint8 where the type would otherwise be implicit"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"MakeAllConfigsEngineConfig"})," (bool)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Whether to force ",(0,s.jsx)(n.code,{children:"Config = Engine"})," on all UCLASS macros that use either one of: ",(0,s.jsx)(n.code,{children:"DefaultConfig"}),", ",(0,s.jsx)(n.code,{children:"GlobalUserConfig"})," or ",(0,s.jsx)(n.code,{children:"ProjectUserConfig"})]}),"\n",(0,s.jsx)(n.li,{children:"Default: 1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"object-dumper",children:"Object Dumper"}),"\n",(0,s.jsxs)(n.p,{children:["Dumps all loaded objects to the file ",(0,s.jsx)(n.code,{children:"UE4SS_ObjectDump.txt"})," (you can turn on force loading for all assets)."]}),"\n",(0,s.jsxs)(n.p,{children:["The keybind to dump objects is by default ",(0,s.jsx)(n.code,{children:"CTRL"})," + ",(0,s.jsx)(n.code,{children:"J"}),", and can be changed in ",(0,s.jsx)(n.code,{children:"Mods/Keybinds/Scripts/main.lua"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[000002A70F57E5C0] Function /Game/UI/Art/WidgetParts/Basic_ButtonScalable2.Basic_ButtonScalable2_C:BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature [n: 5343AA] [c: 000002A727993A00] [or: 000002A708466980]\r\n[000002A70F57E4E0] Function /Game/UI/Art/WidgetParts/Basic_ButtonScalable2.Basic_ButtonScalable2_C:PreConstruct [n: 4057B] [c: 000002A727993A00] [or: 000002A708466980]\r\n[000002A70F876600] BoolProperty /Game/UI/Art/WidgetParts/Basic_ButtonScalable2.Basic_ButtonScalable2_C:PreConstruct:IsDesignTime [o: 0] [n: 4D63DB] [c: 00007FF683722CC0] [owr: 000002A70F57E4E0]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["There are multiple sets of opening & closing square brackets and each set has a different meaning and the letters in this table explains what they mean.",(0,s.jsx)(n.br,{}),"\n","Within the first set of brackets is the location in memory where the object or property is stored."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Letters"}),(0,s.jsx)(n.th,{children:"Meaning"}),(0,s.jsx)(n.th,{children:"UE Member Variable"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"n"}),(0,s.jsx)(n.td,{children:"Name of an object/property"}),(0,s.jsx)(n.td,{children:"NamePrivate"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"c"}),(0,s.jsx)(n.td,{children:"Class of the object/property/enum value"}),(0,s.jsx)(n.td,{children:"ClassPrivate"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"or"}),(0,s.jsx)(n.td,{children:"Outer of the object"}),(0,s.jsx)(n.td,{children:"OuterPrivate"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"o"}),(0,s.jsx)(n.td,{children:"Offset of a property value in an object"}),(0,s.jsx)(n.td,{children:"Offset_Internal"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"owr"}),(0,s.jsx)(n.td,{children:"Owner of an FField, 4.25+ only"}),(0,s.jsx)(n.td,{children:"Owner"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kp"}),(0,s.jsx)(n.td,{children:"Key property of an FMapProperty"}),(0,s.jsx)(n.td,{children:"KeyProp"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vp"}),(0,s.jsx)(n.td,{children:"Value property of an FMapProperty"}),(0,s.jsx)(n.td,{children:"ValueProp"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mc"}),(0,s.jsx)(n.td,{children:"Class that this FClassProperty refers to"}),(0,s.jsx)(n.td,{children:"MetaClass"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"df"}),(0,s.jsx)(n.td,{children:"Function that this FDelegateProperty refers to"}),(0,s.jsx)(n.td,{children:"FunctionSignature"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pc"}),(0,s.jsx)(n.td,{children:"Class that this FObjectProperty/FFieldPathProperty refers to"}),(0,s.jsx)(n.td,{children:"PropertyClass"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ic"}),(0,s.jsx)(n.td,{children:"Class that this FInterfaceProperty refers to"}),(0,s.jsx)(n.td,{children:"InterfaceClass"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ss"}),(0,s.jsx)(n.td,{children:"Struct that this FStructProperty refers to"}),(0,s.jsx)(n.td,{children:"Struct"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"em"}),(0,s.jsx)(n.td,{children:"Enum that this FEnumProperty refers to"}),(0,s.jsx)(n.td,{children:"Enum"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fm"}),(0,s.jsx)(n.td,{children:"Field mask that this FBoolProperty refers to"}),(0,s.jsx)(n.td,{children:"FieldMask"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bm"}),(0,s.jsx)(n.td,{children:"Byte mask that this FBoolProperty refers to"}),(0,s.jsx)(n.td,{children:"ByteMask"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v"}),(0,s.jsx)(n.td,{children:"Value corresponding to this enum key"}),(0,s.jsx)(n.td,{children:"N/A"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sps"}),(0,s.jsx)(n.td,{children:"SuperStruct of this UClass"}),(0,s.jsx)(n.td,{children:"SuperStruct"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ai"}),(0,s.jsx)(n.td,{children:"Property that this FArrayProperty stores"}),(0,s.jsx)(n.td,{children:"Inner"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"configurations-2",children:"Configurations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LoadAllAssetsBeforeDumpingObjects"})," (bool)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Whether to force all assets to be loaded before dumping objects"}),"\n",(0,s.jsx)(n.li,{children:"Default: 0"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Warning: Can require multiple gigabytes of extra memory, is not stable & will crash the game if you load past the main menu after dumping"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usmap-dumper",children:".usmap Dumper"}),"\n",(0,s.jsxs)(n.p,{children:["Generate ",(0,s.jsx)(n.code,{children:".usmap"})," mapping files for unversioned properties."]}),"\n",(0,s.jsxs)(n.p,{children:["The keybind to dump mappings is by default ",(0,s.jsx)(n.code,{children:"Ctrl"})," + ",(0,s.jsx)(n.code,{children:"Numpad 6"}),", and can be changed in ",(0,s.jsx)(n.code,{children:"Mods/Keybinds/Scripts/main.lua"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Thanks to ",(0,s.jsx)(n.a,{href:"https://github.com/OutTheShade/UnrealMappingsDumper",children:"OutTheShade"})," for the original implementation."]}),"\n",(0,s.jsx)(n.h2,{id:"umap-recreation-dumper",children:".umap Recreation Dumper"}),"\n",(0,s.jsxs)(n.p,{children:["Dump all loaded actors to the file ",(0,s.jsx)(n.code,{children:"ue4ss_static_mesh_data.csv"})," to generate ",(0,s.jsx)(n.code,{children:".umaps"})," in-editor."]}),"\n",(0,s.jsxs)(n.p,{children:["Two prerequisites are required to load the dumped actors in-editor to reconstruct the ",(0,s.jsx)(n.code,{children:".umap"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"All dumped actors (static meshes, their materials/textures) must be reconstructed in the editor"}),"\n",(0,s.jsxs)(n.li,{children:["Download ",(0,s.jsx)(n.code,{children:"zMapGenBP.zip"})," from the Releases page and follow the instructions in the Readme file inside of it"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The keybind to dump mappings is by default ",(0,s.jsx)(n.code,{children:"Ctrl"})," + ",(0,s.jsx)(n.code,{children:"Numpad 7"}),", and can be changed in ",(0,s.jsx)(n.code,{children:"Mods/Keybinds/Scripts/main.lua"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var s=r(6540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);