"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8653],{5248:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=t(4848),o=t(8453);const s={},i="Blueprint Macros",c={id:"cpp-api/bp-macros",title:"Blueprint Macros",description:"The following macros are used to manipulate blueprint functions from C++.",source:"@site/versioned_docs/version-3.0.1/cpp-api/bp-macros.md",sourceDirName:"cpp-api",slug:"/cpp-api/bp-macros",permalink:"/RE-UE4SS/cpp-api/bp-macros",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/cpp-api/bp-macros.md",tags:[],version:"3.0.1",frontMatter:{},sidebar:"docs",previous:{title:"C++ API",permalink:"/RE-UE4SS/cpp-api"},next:{title:"C++ Examples",permalink:"/RE-UE4SS/cpp-api/cpp-examples"}},l={},a=[{value:"Regular macros:",id:"regular-macros",level:2},{value:"<code>UE_BEGIN_SCRIPT_FUNCTION_BODY</code>:",id:"ue_begin_script_function_body",level:3},{value:"<code>UE_BEGIN_NATIVE_FUNCTION_BODY</code>:",id:"ue_begin_native_function_body",level:3},{value:"<code>UE_SET_STATIC_SELF</code>:",id:"ue_set_static_self",level:3},{value:"<code>UE_COPY_PROPERTY</code>:",id:"ue_copy_property",level:3},{value:"<code>UE_COPY_PROPERTY_CUSTOM</code>:",id:"ue_copy_property_custom",level:3},{value:"<code>UE_COPY_STRUCT_PROPERTY_BEGIN</code>:",id:"ue_copy_struct_property_begin",level:3},{value:"<code>UE_COPY_STRUCT_PROPERTY_CUSTOM_BEGIN</code>:",id:"ue_copy_struct_property_custom_begin",level:3},{value:"<code>UE_COPY_STRUCT_INNER_PROPERTY</code>:",id:"ue_copy_struct_inner_property",level:3},{value:"<code>UE_COPY_STRUCT_INNER_PROPERTY_CUSTOM</code>:",id:"ue_copy_struct_inner_property_custom",level:3},{value:"<code>UE_COPY_OUT_PROPERTY</code>:",id:"ue_copy_out_property",level:3},{value:"<code>UE_COPY_OUT_PROPERTY_CUSTOM</code>:",id:"ue_copy_out_property_custom",level:3},{value:"<code>UE_COPY_VECTOR:</code>",id:"ue_copy_vector",level:3},{value:"<code>UE_COPY_STL_VECTOR_AS_TARRAY</code>:",id:"ue_copy_stl_vector_as_tarray",level:3},{value:"<code>UE_CALL_FUNCTION</code>:",id:"ue_call_function",level:3},{value:"<code>UE_CALL_STATIC_FUNCTION</code>:",id:"ue_call_static_function",level:3},{value:"<code>UE_RETURN_PROPERTY</code>:",id:"ue_return_property",level:3},{value:"<code>UE_RETURN_PROPERTY_CUSTOM</code>:",id:"ue_return_property_custom",level:3},{value:"<code>UE_RETURN_VECTOR</code>:",id:"ue_return_vector",level:3},{value:"<code>UE_RETURN_STRING</code>:",id:"ue_return_string",level:3},{value:"<code>UE_RETURN_STRING_CUSTOM</code>:",id:"ue_return_string_custom",level:3},{value:"<code>WITH_OUTER</code>:",id:"with_outer",level:3},{value:"Internal macros",id:"internal-macros",level:2},{value:"<code>UE_BEGIN_FUNCTION_BODY_INTERNAL</code>:",id:"ue_begin_function_body_internal",level:3},{value:"<code>UE_COPY_PROPERTY_INTERNAL</code>:",id:"ue_copy_property_internal",level:3},{value:"<code>UE_COPY_PROPERTY_CUSTOM_INTERNAL</code>:",id:"ue_copy_property_custom_internal",level:3},{value:"<code>UE_RETURN_PROPERTY_INTERNAL</code>:",id:"ue_return_property_internal",level:3}];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"blueprint-macros",children:"Blueprint Macros"}),"\n",(0,n.jsx)(r.p,{children:"The following macros are used to manipulate blueprint functions from C++."}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," Param names for wrappers must be identical to the names used for the function in UE, and they should then be passed to macros with a ",(0,n.jsx)(r.code,{children:"PropertyName"})," param as shown in ",(0,n.jsx)(r.code,{children:"AActor.cpp"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["This does not apply to macros with the ",(0,n.jsx)(r.code,{children:"_CUSTOM"})," suffix."]}),"\n",(0,n.jsx)(r.p,{children:"With those macros you have to supply both the UE property name as well as the name of your C++ param."}),"\n",(0,n.jsxs)(r.p,{children:["These ",(0,n.jsx)(r.code,{children:"_CUSTOM"})," suffixed macros are useful when the UE property name contains spaces or other characters that aren't valid for a C++ variable."]}),"\n",(0,n.jsx)(r.h2,{id:"regular-macros",children:"Regular macros:"}),"\n",(0,n.jsx)(r.p,{children:"Intended for normal use by modders."}),"\n",(0,n.jsxs)(r.h3,{id:"ue_begin_script_function_body",children:[(0,n.jsx)(r.code,{children:"UE_BEGIN_SCRIPT_FUNCTION_BODY"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Finds non-native (meaning BP) UFunction by its full name without the type prefixed, throws if not found."}),"\n",(0,n.jsxs)(r.h3,{id:"ue_begin_native_function_body",children:[(0,n.jsx)(r.code,{children:"UE_BEGIN_NATIVE_FUNCTION_BODY"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Same as above except for native, meaning non-BP UFunctions."}),"\n",(0,n.jsxs)(r.p,{children:["See: ",(0,n.jsx)(r.code,{children:"AActor::K2_DestroyActor"})]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_set_static_self",children:[(0,n.jsx)(r.code,{children:"UE_SET_STATIC_SELF"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Used for static functions, and should be the CDO to the class that the UFunction belongs to."}),"\n",(0,n.jsxs)(r.p,{children:["See: ",(0,n.jsx)(r.code,{children:"UKismetNodeHelperLibrary::GetEnumeratorUserFriendlyName."})]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_copy_property",children:[(0,n.jsx)(r.code,{children:"UE_COPY_PROPERTY"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Copies the property of the supplied name into the already allocated params struct."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Param 1: The name, without quotes, of a property that exists for this UFunction."}),"\n",(0,n.jsxs)(r.li,{children:['Param 2: The type that you want the underlying value to be copied as. For example, without quotes, "float" for ',(0,n.jsx)(r.code,{children:"FFloatProperty"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_copy_property_custom",children:[(0,n.jsx)(r.code,{children:"UE_COPY_PROPERTY_CUSTOM"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Copies the property of the supplied name into the already allocated params struct."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Param 1: The name, without quotes, of a property that exists for this UFunction."}),"\n",(0,n.jsx)(r.li,{children:"Param 2: A C++ compatible variable name for the property."}),"\n",(0,n.jsxs)(r.li,{children:['Param 3: The type that you want the underlying value to be copied as. For example, without quotes, "float" for ',(0,n.jsx)(r.code,{children:"FFloatProperty"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_copy_struct_property_begin",children:[(0,n.jsx)(r.code,{children:"UE_COPY_STRUCT_PROPERTY_BEGIN"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Begins the process of copying an entire struct."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Param 1: The name, without quotes, of an ",(0,n.jsx)(r.code,{children:"FStructProperty"})," that exists for this UFunction."]}),"\n"]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_copy_struct_property_custom_begin",children:[(0,n.jsx)(r.code,{children:"UE_COPY_STRUCT_PROPERTY_CUSTOM_BEGIN"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Begins the process of copying an entire struct."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Param 1: The name, without quotes, of an ",(0,n.jsx)(r.code,{children:"FStructProperty"})," that exists for this UFunction."]}),"\n",(0,n.jsx)(r.li,{children:"Param 2: A C++ compatible variable name for the property."}),"\n"]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_copy_struct_inner_property",children:[(0,n.jsx)(r.code,{children:"UE_COPY_STRUCT_INNER_PROPERTY"}),":"]}),"\n",(0,n.jsxs)(r.p,{children:["Copies a property from within an ",(0,n.jsx)(r.code,{children:"FStructProperty"})," into the already allocated params struct."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Param 1: The name, without quotes, of the ",(0,n.jsx)(r.code,{children:"FStructProperty"})," supplied to ",(0,n.jsx)(r.code,{children:"UE_COPY_STRUCT_PROPERTY_BEGIN"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Param 2: The name, without quotes, of a property that exists in the supplied ",(0,n.jsx)(r.code,{children:"FStructProperty"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:['Param 3: The type that you want the underlying value to be copied as. For example, without quotes, "float" for ',(0,n.jsx)(r.code,{children:"FFloatProperty"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Param 4: The name of the C++ variable that you're copying."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["See: ",(0,n.jsx)(r.code,{children:"AActor::K2_SetActorRotation"})]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_copy_struct_inner_property_custom",children:[(0,n.jsx)(r.code,{children:"UE_COPY_STRUCT_INNER_PROPERTY_CUSTOM"}),":"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Param 1: The name, without quotes, of the ",(0,n.jsx)(r.code,{children:"FStructProperty"})," supplied to ",(0,n.jsx)(r.code,{children:"UE_COPY_STRUCT_PROPERTY_BEGIN"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Param 2: The name, without quotes, of a property that exists in the supplied ",(0,n.jsx)(r.code,{children:"FStructProperty"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Param 3: A C++ compatible variable name for the property."}),"\n",(0,n.jsxs)(r.li,{children:['Param 4: The type that you want the underlying value to be copied as. For example, without quotes, "float" for ',(0,n.jsx)(r.code,{children:"FFloatProperty"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Param 5: The name of the C++ variable that you're copying."}),"\n"]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_copy_out_property",children:[(0,n.jsx)(r.code,{children:"UE_COPY_OUT_PROPERTY"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Copies the out property of the supplied name from the params struct into the supplied C++ variable."}),"\n",(0,n.jsx)(r.p,{children:'This means the wrapper param (which is named the same as the property supplied) must be a reference, meaning suffixed with a "&".'}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Param 1: The name, without quotes, of a property that exists for this UFunction."}),"\n",(0,n.jsxs)(r.li,{children:['Param 2: The type that you want the underlying value to be copied as. For example, without quotes, "float" for ',(0,n.jsx)(r.code,{children:"FFloatProperty"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["See: ",(0,n.jsx)(r.code,{children:"UGameplayStatics::FindNearestActor"})]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_copy_out_property_custom",children:[(0,n.jsx)(r.code,{children:"UE_COPY_OUT_PROPERTY_CUSTOM"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Copies the out property of the supplied name from the params struct into the supplied C++ variable."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Param 1: The name, without quotes, of a property that exists for this UFunction."}),"\n",(0,n.jsx)(r.li,{children:"Param 2: A C++ compatible variable name for the property."}),"\n",(0,n.jsxs)(r.li,{children:['Param 3: The type that you want the underlying value to be copied as. For example, without quotes, "float" for ',(0,n.jsx)(r.code,{children:"FFloatProperty"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:'This means the wrapper param (which is named the same as the property supplied) must be a reference, meaning suffixed with a "&".'}),"\n",(0,n.jsx)(r.h3,{id:"ue_copy_vector",children:(0,n.jsx)(r.code,{children:"UE_COPY_VECTOR:"})}),"\n",(0,n.jsxs)(r.p,{children:["Helper for copying an FVector. Must use ",(0,n.jsx)(r.code,{children:"UE_COPY_STRUCT_PROPERTY_BEGIN"})," first."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Param 1: The C++ name, without quotes, of the FVector to copy from."}),"\n",(0,n.jsxs)(r.li,{children:["Param 2: The name, without quotes, of the FVector, same as supplied to ",(0,n.jsx)(r.code,{children:"UE_COPY_STRUCT_PROPERTY_BEGIN"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_copy_stl_vector_as_tarray",children:[(0,n.jsx)(r.code,{children:"UE_COPY_STL_VECTOR_AS_TARRAY"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Helper for copying a TArray."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Param 1: The name, without quotes, of an ",(0,n.jsx)(r.code,{children:"FArrayProperty"})," that exists for this UFunction."]}),"\n",(0,n.jsxs)(r.li,{children:['Param 2: The C++ type, without quotes, that the TArray holds. For example, without quotes, "float", for ',(0,n.jsx)(r.code,{children:"FFloatProperty"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Param 3: The C++ that the contents of the TArray will be copied into."}),"\n"]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_call_function",children:[(0,n.jsx)(r.code,{children:"UE_CALL_FUNCTION"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Performs a non-static function call. All non-out params must be copied ahead of this."}),"\n",(0,n.jsxs)(r.h3,{id:"ue_call_static_function",children:[(0,n.jsx)(r.code,{children:"UE_CALL_STATIC_FUNCTION"}),":"]}),"\n",(0,n.jsxs)(r.p,{children:["Performs a static function call, using the CDO provided by ",(0,n.jsx)(r.code,{children:"UE_SET_STATIC_SELF"})," as the static instance. All non-out params must be copied ahead of this."]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_return_property",children:[(0,n.jsx)(r.code,{children:"UE_RETURN_PROPERTY"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Copies the underlying value that the UFunction returned and returns it."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:['Param 1: The type that you want the underlying value to be copied as. For example, without quotes, "float" for ',(0,n.jsx)(r.code,{children:"FFloatProperty"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_return_property_custom",children:[(0,n.jsx)(r.code,{children:"UE_RETURN_PROPERTY_CUSTOM"}),":"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:['Param 1: The type that you want the underlying value to be copied as. For example, without quotes, "float" for ',(0,n.jsx)(r.code,{children:"FFloatProperty"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Param 2: The name, without quotes, for the property of this function where the return value will be copied from."}),"\n"]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_return_vector",children:[(0,n.jsx)(r.code,{children:"UE_RETURN_VECTOR"}),":"]}),"\n",(0,n.jsxs)(r.p,{children:["Helper for returning an ",(0,n.jsx)(r.code,{children:"FVector"}),"."]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_return_string",children:[(0,n.jsx)(r.code,{children:"UE_RETURN_STRING"}),":"]}),"\n",(0,n.jsxs)(r.p,{children:["Helper for returning an ",(0,n.jsx)(r.code,{children:"FStrProperty"}),". Converts to ",(0,n.jsx)(r.code,{children:"StringType"}),"."]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_return_string_custom",children:[(0,n.jsx)(r.code,{children:"UE_RETURN_STRING_CUSTOM"}),":"]}),"\n",(0,n.jsxs)(r.p,{children:["Helper for returning an ",(0,n.jsx)(r.code,{children:"FStrProperty"}),". Converts to ",(0,n.jsx)(r.code,{children:"StringType"}),"."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Param 1: The name, without quotes, for the ",(0,n.jsx)(r.code,{children:"FStrProperty"})," of this function where the return value will be copied from."]}),"\n"]}),"\n",(0,n.jsxs)(r.h3,{id:"with_outer",children:[(0,n.jsx)(r.code,{children:"WITH_OUTER"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Used for templated C++ types passed to macros, like TArray or TMap."}),"\n",(0,n.jsxs)(r.p,{children:["For example, pass, without quotes, ",(0,n.jsx)(r.code,{children:"WITH_OUTER(TMap, FName, int)"})," instead of ",(0,n.jsx)(r.code,{children:"TMap<FName, int>"})," to all macros."]}),"\n",(0,n.jsx)(r.h2,{id:"internal-macros",children:"Internal macros"}),"\n",(0,n.jsxs)(r.p,{children:["These are only used by other macros, or by users of our C++ API if they properly understand the internals of the macros, and this requires preexisting knowledge around how UFunctions work, and you'll likely have to ",(0,n.jsx)(r.a,{href:"https://github.com/Re-UE4SS/UEPseudo/blob/main/include/Unreal/BPMacros.hpp",children:"BPMacros.hpp"})," to understand how to use them properly."]}),"\n",(0,n.jsxs)(r.h3,{id:"ue_begin_function_body_internal",children:[(0,n.jsx)(r.code,{children:"UE_BEGIN_FUNCTION_BODY_INTERNAL"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Throws if the UFunction doesn't exist, and allocates enough space (on the stack when possible, otherwise the heap) for the params and return value(s)."}),"\n",(0,n.jsxs)(r.h3,{id:"ue_copy_property_internal",children:[(0,n.jsx)(r.code,{children:"UE_COPY_PROPERTY_INTERNAL"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Finds the property, and throws if not found."}),"\n",(0,n.jsxs)(r.h3,{id:"ue_copy_property_custom_internal",children:[(0,n.jsx)(r.code,{children:"UE_COPY_PROPERTY_CUSTOM_INTERNAL"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Finds the property with the supplied name, and throws if not found."}),"\n",(0,n.jsxs)(r.h3,{id:"ue_return_property_internal",children:[(0,n.jsx)(r.code,{children:"UE_RETURN_PROPERTY_INTERNAL"}),":"]}),"\n",(0,n.jsx)(r.p,{children:"Finds the property to be used for the return value, throws if not found."})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var n=t(6540);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);