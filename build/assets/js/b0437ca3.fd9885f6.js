"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5920],{407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(4848),r=n(8453);const i={title:"DataTables in UE4SS",description:"Devlogging the challenges faced when initially implementing DataTables.",slug:"datatables-in-ue4ss",authors:[{name:"bitonality"}]},o="DataTables in UE4SS",s={permalink:"/blog/datatables-in-ue4ss",source:"@site/blog/2024-02-04-datatables-in-ue4ss.md",title:"DataTables in UE4SS",description:"Devlogging the challenges faced when initially implementing DataTables.",date:"2024-02-04T00:00:00.000Z",tags:[],readingTime:8.75,hasTruncateMarker:!1,authors:[{name:"bitonality"}],frontMatter:{title:"DataTables in UE4SS",description:"Devlogging the challenges faced when initially implementing DataTables.",slug:"datatables-in-ue4ss",authors:[{name:"bitonality"}]},unlisted:!1},l={authorsImageUrls:[void 0]},c=[{value:"Background",id:"background",level:2},{value:"Why not just create a blueprint mod that replaces a DataTable?",id:"why-not-just-create-a-blueprint-mod-that-replaces-a-datatable",level:2},{value:"What is the structure of a DataTable?",id:"what-is-the-structure-of-a-datatable",level:2},{value:"So what needs to be done?",id:"so-what-needs-to-be-done",level:2},{value:"Solution 1 (TMap implementation)",id:"solution-1-tmap-implementation",level:3},{value:"Solution 2 (Kismet DataTable Helper Library)",id:"solution-2-kismet-datatable-helper-library",level:3},{value:"One final wrench in the machine...",id:"one-final-wrench-in-the-machine",level:3},{value:"Disclaimer",id:"disclaimer",level:2},{value:"Got any ideas?",id:"got-any-ideas",level:2},{value:"Other Resources",id:"other-resources",level:2},{value:"Credits",id:"credits",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://docs.unrealengine.com/4.27/en-US/API/Runtime/Engine/Engine/UDataTable/",children:"DataTables"})," are a data structure in Unreal Engine that allows for hashed key-value pairs to be loaded at runtime. Common use cases include storing loot tables, experience point requirements for leveling up, base health/armor for actors, etc..."]}),"\n",(0,a.jsxs)(t.p,{children:["DataTables are intended to be populating as part of game compilation and aren't ",(0,a.jsx)(t.em,{children:"technically"})," supposed to be modified at runtime. The documentation from Unreal sometimes contradicts this statement, so it's a bit hard to parse what's ",(0,a.jsx)(t.em,{children:"intended"})," versus what's ",(0,a.jsx)(t.em,{children:"possible"}),". My goal is to allow for full read/write/update/delete/iterate operations at runtime from a C++ context without the use of blueprints."]}),"\n",(0,a.jsx)(t.h2,{id:"why-not-just-create-a-blueprint-mod-that-replaces-a-datatable",children:"Why not just create a blueprint mod that replaces a DataTable?"}),"\n",(0,a.jsxs)(t.p,{children:["This ",(0,a.jsx)(t.em,{children:"technically"})," works. The problem is that your mod is the ",(0,a.jsx)(t.strong,{children:"only"})," mod that can change this DataTable. This is obviously not ideal for clients that want to use multiple mods that want to modify the same DataTable. I rate this solution around a 2/10 from a extensibility perspective."]}),"\n",(0,a.jsx)(t.h2,{id:"what-is-the-structure-of-a-datatable",children:"What is the structure of a DataTable?"}),"\n",(0,a.jsxs)(t.p,{children:["DataTables are build by using ",(0,a.jsx)(t.code,{children:"TMap"})," and ",(0,a.jsx)(t.code,{children:"TSet"})," from native Unreal. If you are familiar with Java's ",(0,a.jsx)(t.code,{children:"HashMap"})," or C#'s ",(0,a.jsx)(t.code,{children:"Dictionary"})," then you'll understand the gist of the contracts/usage. Unreal ",(0,a.jsx)(t.code,{children:"DataTable"})," has keys of ",(0,a.jsx)(t.a,{href:"https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/StringHandling/FName/",children:(0,a.jsx)(t.code,{children:"FName"})})," and the value is a struct that inherits from ",(0,a.jsx)(t.a,{href:"https://docs.unrealengine.com/4.27/en-US/API/Runtime/Engine/Engine/FTableRowBase/",children:(0,a.jsx)(t.code,{children:"FTableRowBase"})}),". More on this later..."]}),"\n",(0,a.jsx)(t.h2,{id:"so-what-needs-to-be-done",children:"So what needs to be done?"}),"\n",(0,a.jsx)(t.p,{children:"I will outline a couple of possibilities for the modification of DataTables. I will be evaluating the feasibility/stability of each proposed solution to give some perspective."}),"\n",(0,a.jsx)(t.h3,{id:"solution-1-tmap-implementation",children:"Solution 1 (TMap implementation)"}),"\n",(0,a.jsx)(t.p,{children:"A DataTable in Unreal Engine exposes a RowMap property that can be accessed:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"// DataTable.h\r\nvirtual const TMap< FName, uint8 * > & GetRowMap() const \r\nvirtual const TMap< FName, uint8 * > & GetRowMap()  \n"})}),"\n",(0,a.jsx)(t.p,{children:"The GetRowMap() function is reflected and is easily callable by using the UVTD files. The problem is that UE4SS has a bare-bones implementation of TMap. The current TMap implementation in UE4SS can be leveraged in the following manner:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"// DataTable row format is <FName, CoolStruct>\r\nstruct CoolStruct : FTableRowBase\r\n{\r\n    FString SomeString;\r\n    int_32 SomeNumber;\r\n    bool SomeBoolean;\r\n}\r\n\r\nTMap<FName, unsigned char*> rowMap = dataTable->GetRowMap();\r\nauto ptrElem = rowMap.GetElementsPtr();\r\nfor(int32_t i = 0; i < rowMap.Num(); i++)\r\n{\r\n    auto pair = &ptrElem[i];\r\n    pair->Key;\r\n    pair->Value;\r\n    CoolStruct* row = reinterpret_cast<CoolStruct*>(pair->Value);\r\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"So what's the big deal?"})}),"\n",(0,a.jsxs)(t.p,{children:["UE4SS's TMap does not like when the underlying data is changed. This way of accessing data works reasonably well for DataTable reads/iterators, but after we call ",(0,a.jsx)(t.code,{children:"dt->AddRow()"})," or ",(0,a.jsx)(t.code,{children:"dt->RemoveRow()"}),", the underlying ",(0,a.jsx)(t.code,{children:".GetElementsPtr()"})," is inaccurate. If you look at the UE4SS implementation of TMap, you can see that it's fairly fragile unless you intend to read only."]}),"\n",(0,a.jsxs)(t.p,{children:["Note that the current ",(0,a.jsx)(t.code,{children:".Num()"})," function in UE4SS TMap does not actually perform calculations on the TMap. The ",(0,a.jsx)(t.code,{children:"Num"})," property is just set when we construct a TMap in UE4SS, so we don't get updates when the underlying size changes."]}),"\n",(0,a.jsx)(t.p,{children:"I suppose this solution is reasonable for reading a DataTable if that's all you want to do."}),"\n",(0,a.jsx)(t.p,{children:"So how can we make this work?"}),"\n",(0,a.jsxs)(t.p,{children:["Theoretically we can implement TMap in UE4SS with mirrored functionality to UE native. UE4SS has done a similar approach with ",(0,a.jsx)(t.code,{children:"TArray"}),". The potential downsides are that if TMap underlying logic/structures have changed between UE versions, then we would need multiple implementations that represent the state of UE TMaps at different versions. Either that, or, we could have ",(0,a.jsx)(t.code,{children:"#if UE5_1"})," etc. to keep things consolidated in a single TMap.hpp/cpp file."]}),"\n",(0,a.jsxs)(t.p,{children:["Will implementing TMap in UE4SS work for modifying DataTables? I haven't completed a thorough investigation, but my gut says... ",(0,a.jsx)(t.em,{children:"probably?"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Why can't we use FindRow/GetRow on the DataTable object?"})}),"\n",(0,a.jsxs)(t.p,{children:["The only useful reflected functions we get from ",(0,a.jsx)(t.code,{children:"UDataTable"})," dump is ",(0,a.jsx)(t.code,{children:"GetRowMap()"}),", ",(0,a.jsx)(t.code,{children:"RemoveRow()"}),", and ",(0,a.jsx)(t.code,{children:"AddRow()"}),". Not too shabby, but unfortunate that we can't get a row directly or use a UE4SS ",(0,a.jsx)(t.code,{children:"TMap"})," to get a row."]}),"\n",(0,a.jsx)(t.h3,{id:"solution-2-kismet-datatable-helper-library",children:"Solution 2 (Kismet DataTable Helper Library)"}),"\n",(0,a.jsxs)(t.p,{children:["This approach leverages a blueprint ",(0,a.jsx)(t.a,{href:"https://docs.unrealengine.com/4.27/en-US/API/Runtime/Engine/Kismet/UDataTableFunctionLibrary/",children:"DataTable helper class"})," built into Unreal Engine. The reflected functions from this blueprint helper are:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"static bool DoesDataTableRowExist\r\n(\r\n    UDataTable * Table,\r\n    FName RowName\r\n) \r\n\r\nstatic void GetDataTableRowNames\r\n(\r\n    UDataTable * Table,\r\n    TArray< FName > & OutRowNames\r\n) \r\n\r\nstatic bool GetDataTableRowFromName\r\n(\r\n    UDataTable * Table,\r\n    FName RowName,\r\n    FTableRowBase & OutRow\r\n) \n"})}),"\n",(0,a.jsx)(t.p,{children:"If you've been paying attention, then a light bulb might be going off in your head. Seems like we could accomplish full DataTable support by utilizing"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"// DataTable reflected functions\r\nAddRow();\r\nRemoveRow();\r\nEmpty();\r\n\r\n// DataTableFunctionLibrary reflected functions\r\nDoesDataTableRowExist();\r\nGetDataTableRowNames();\r\nGetDataTableRowFromName();\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"But there's always a catch..."})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"GetDataTableRowFromName();"})," is an especially cursed function. The TLDR is that it's ",(0,a.jsx)(t.em,{children:"probably"})," usable, but will require some further experimentation."]}),"\n",(0,a.jsx)(t.p,{children:"This next section benefits from somewhat of an intimate knowledge of how Kismet/blueprints/FFrame and the blueprint scripting stack works. I'll include some pre-reads to familiarize yourself."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://gist.github.com/intaxwashere/e9b1f798427686b46beab2521d7efbcf",children:"Custom Thunks TLDR"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://intaxwashere.github.io/blueprint-access/",children:"Blueprints from C++"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://neil3d.github.io/unreal/blueprint-wildcard.html",children:"Blueprint Function Templates"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"GetDataTableRowFromName()"})," has the ",(0,a.jsx)(t.a,{href:"https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/GameplayArchitecture/Functions/Specifiers/",children:"specifiers"})," ",(0,a.jsx)(t.code,{children:"CustomThunk"})," and ",(0,a.jsx)(t.code,{children:"CustomStructureParam"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"CustomThunk:\r\nThe UnrealHeaderTool code generator will not produce a thunk for this function; it is up to the user to provide one with the DECLARE_FUNCTION or DEFINE_FUNCTION macros.\r\n\r\nCustomStructureParam:\r\nThe listed parameters are all treated as wildcards. This specifier requires the UFUNCTION-level specifier, CustomThunk, which will require the user to provide a custom exec function. In this function, the parameter types can be checked and the appropriate function calls can be made based on those parameter types. The base UFUNCTION should never be called, and should assert or log an error if it is. \n"})}),"\n",(0,a.jsxs)(t.p,{children:["Under the hood, the ",(0,a.jsx)(t.code,{children:"GetDataTableRowFromName()"})," UFunction is just a stub. The DataTableFunctionLibrary provides the actual behavior with a ",(0,a.jsx)(t.code,{children:"DEFINE_FUNCTION(execGetDataTableRowFromName)"})," macro. Let's take a look at what the defined function is:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:'// DataTableFunctionLibrary.h\r\n /** Based on UDataTableFunctionLibrary::GetDataTableRow */\r\n DECLARE_FUNCTION(execGetDataTableRowFromName)\r\n {\r\n     P_GET_OBJECT(UDataTable, Table);\r\n     P_GET_PROPERTY(FNameProperty, RowName);\r\n     \r\n     Stack.StepCompiledIn<FStructProperty>(NULL);\r\n     void* OutRowPtr = Stack.MostRecentPropertyAddress;\r\n\r\n\t\tP_FINISH;\r\n\t\tbool bSuccess = false;\r\n\t\t// The following line fails to find the StructProp. See notes below this code block for the specifics.\r\n\t\tFStructProperty* StructProp = CastField<FStructProperty>(Stack.MostRecentProperty);\r\n\t\tif (!Table)\r\n\t\t{\r\nFBlueprintExceptionInfo ExceptionInfo(\r\n\tEBlueprintExceptionType::AccessViolation,\r\n\tNSLOCTEXT("GetDataTableRow", "MissingTableInput", "Failed to resolve the table input. Be sure the DataTable is valid.")\r\n);\r\nFBlueprintCoreDelegates::ThrowScriptException(P_THIS, Stack, ExceptionInfo);\r\n\t\t}\r\n\t\telse if(StructProp && OutRowPtr)\r\n\t\t{\r\nUScriptStruct* OutputType = StructProp->Struct;\r\nconst UScriptStruct* TableType  = Table->GetRowStruct();\r\n\t\t\r\nconst bool bCompatible = (OutputType == TableType) || \r\n\t(OutputType->IsChildOf(TableType) && FStructUtils::TheSameLayout(OutputType, TableType));\r\nif (bCompatible)\r\n{\r\n\tP_NATIVE_BEGIN;\r\n\tbSuccess = Generic_GetDataTableRowFromName(Table, RowName, OutRowPtr);\r\n\tP_NATIVE_END;\r\n}\r\nelse\r\n{\r\n\tFBlueprintExceptionInfo ExceptionInfo(\r\n\t\tEBlueprintExceptionType::AccessViolation,\r\n\t\tNSLOCTEXT("GetDataTableRow", "IncompatibleProperty", "Incompatible output parameter; the data table\'s type is not the same as the return type.")\r\n\t\t);\r\n\tFBlueprintCoreDelegates::ThrowScriptException(P_THIS, Stack, ExceptionInfo);\r\n}\r\n\t\t}\r\n\t\telse\r\n\t\t{\r\nFBlueprintExceptionInfo ExceptionInfo(\r\n\tEBlueprintExceptionType::AccessViolation,\r\n\tNSLOCTEXT("GetDataTableRow", "MissingOutputProperty", "Failed to resolve the output parameter for GetDataTableRow.")\r\n);\r\nFBlueprintCoreDelegates::ThrowScriptException(P_THIS, Stack, ExceptionInfo);\r\n\t\t}\r\n\t\t*(bool*)RESULT_PARAM = bSuccess;\r\n }\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The issue is that the Stack.MostRecentProperty does not get populated when we call the ",(0,a.jsx)(t.code,{children:"GetDataTableRowFromName()"})," from a C++ context. This specifics of this have been documented at by the following GitHub issues:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/Tencent/puerts/issues/836",children:"Issue 1"})," (CN)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/Tencent/puerts/issues/986",children:"Issue 2"})," (CN)"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Under the hood:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"static bool GetDataTableRowFromName\r\n(\r\n    UDataTable * Table,\r\n    FName RowName,\r\n    FTableRowBase & OutRow\r\n)\r\n\r\n// Does some property reading, type checking, etc,\r\n// Then internally it calls\r\n\r\nstatic bool Generic_GetDataTableRowFromName\r\n(\r\n    const UDataTable * Table,\r\n    FName RowName,\r\n    void * OutRowPtr\r\n) \n"})}),"\n",(0,a.jsxs)(t.p,{children:["It would be suitable for us to use a ",(0,a.jsx)(t.code,{children:"void*"})," for the ",(0,a.jsx)(t.code,{children:"OutRow"})," instead of a ref ",(0,a.jsx)(t.code,{children:"FTableRowBase"}),", but as fate would have it, this ",(0,a.jsx)(t.code,{children:"Generic_GetDataTableRowFromName()"})," is not accessible via reflection."]}),"\n",(0,a.jsxs)(t.p,{children:["The core of the problem is that the ",(0,a.jsx)(t.code,{children:"execGetDataTableRowFromName()"})," is particularly aggressive at typechecking and ensuring that the function will work or gracefully exit. This is expected since this function is a blueprint node and needs to be a robust function to work within the blueprint framework. The specific way that ",(0,a.jsx)(t.code,{children:"Stack.MostRecentProperty"})," is used is to determine the target type of Struct that we expect to retrieve from the DataTable. In the blueprint caller context, this property would be populated as part of the Kismet FFrame/Stack pipeline."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Anything we can do?"})}),"\n",(0,a.jsxs)(t.p,{children:["I am currently playing with manually setting the ",(0,a.jsx)(t.code,{children:"Stack.MostRecentProperty"})," to trick the ",(0,a.jsx)(t.code,{children:"GetDataTableRowFromName()"})," into ",(0,a.jsx)(t.em,{children:"thinking"})," that we're calling the function as part of a legal blueprint function and not directly from C++ code. Like solution 1, I rate this solution as a ",(0,a.jsx)(t.em,{children:"probably?"})," in the functionality department."]}),"\n",(0,a.jsx)(t.h3,{id:"one-final-wrench-in-the-machine",children:"One final wrench in the machine..."}),"\n",(0,a.jsx)(t.p,{children:"There's also further research needed about how DataTable row structs are stored in memory. It appears some games might have compiler packing, but the extent of this is still unknown. Furthermore, some games have reasonably laid out struct members for memory footprint/alignment/padding purposes, and other games have their struct members in a way that makes sense from a readability standpoint, but not from a memory optimization standpoint."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"// NameTypes.hpp (UE4SS)\r\n\r\n// TODO:   Figure out what's going on here\r\n//         It shouldn't be required to use 'alignas' here to make sure it's aligned properly in containers (like TArray)\r\n//         I've never seen an FName not be 8-byte aligned in memory,\r\n//         but it is 4-byte aligned in the source so hopefully this doesn't cause any problems\r\n// UPDATE: This matters in the UE VM, when ElementSize is 0xC in memory for case-preserving games, it must be aligned by 0x4 in that case\r\n#pragma warning(disable: 4324) // Suppressing warning about struct alignment\r\n#ifdef WITH_CASE_PRESERVING_NAME\r\n    struct alignas(4) RC_UE_API FName\r\n#else\r\n    struct alignas(8) RC_UE_API FName // FNames in DataTable rows seem to only work with alignas(4)\n"})}),"\n",(0,a.jsx)(t.p,{children:"The above code is a TODO: that's still in UE4SS. The investigation of alignment will likely have benefits across other non-DataTable parts! We'll need to understand the full extent of alignment/padding regardless of which solution we use (TMap or Blueprint Library or Other)."}),"\n",(0,a.jsx)(t.h2,{id:"disclaimer",children:"Disclaimer"}),"\n",(0,a.jsx)(t.p,{children:"While I feel that I have a good understanding of the factors at play, I have no doubt that I've missed some of the nuance and have misunderstood parts of the underlying systems. Please let me know if you think something operates differently than is currently documented. I would really appreciate the help!"}),"\n",(0,a.jsx)(t.h2,{id:"got-any-ideas",children:"Got any ideas?"}),"\n",(0,a.jsx)(t.p,{children:"Please reach out in the UE4SS Discord to brainstorm/share any ideas you might have. While I am currently in the role as feature lead for DataTables, I appreciate all the help I can get."}),"\n",(0,a.jsx)(t.h2,{id:"other-resources",children:"Other Resources"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/Re-UE4SS/UEPseudo/pull/74/commits/04ef456ea337c59bc2df8ba9162ce4a7e52de445",children:"DataTable Pull Request"})," - I think you need Epic Games group access to view this?"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://ue5wiki.com/wiki/34184/",children:"UE5 Wiki"})," (CN)"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.ue4ss.com/",children:"UE4SS Docs"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://jip.dev/notes/unreal-engine/",children:"JIP Blog"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"credits",children:"Credits"}),"\n",(0,a.jsx)(t.p,{children:"Special thanks to localcc for being a wonderful mentor. Shout out to all early adopters of the DataTable branches (special thanks to El for being our first early adopter)."}),"\n",(0,a.jsx)(t.p,{children:"Thanks for your continued patience."}),"\n",(0,a.jsx)(t.p,{children:"-- bitonality"})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(6540);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);