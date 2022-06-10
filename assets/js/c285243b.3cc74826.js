"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[580],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6929:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={id:"initializer",title:"Initializer",sidebar_label:"Initializer",hide_title:!0},l=void 0,u={unversionedId:"architecture/bloc/initializer",id:"architecture/bloc/initializer",title:"Initializer",description:"Definition",source:"@site/docs/architecture/bloc/initializer.md",sourceDirName:"architecture/bloc",slug:"/architecture/bloc/initializer",permalink:"/Kotlin-Bloc/docs/architecture/bloc/initializer",draft:!1,tags:[],version:"current",frontMatter:{id:"initializer",title:"Initializer",sidebar_label:"Initializer",hide_title:!0},sidebar:"architectureSidebar",previous:{title:"Thunk",permalink:"/Kotlin-Bloc/docs/architecture/bloc/thunk"},next:{title:"Bloc Builder",permalink:"/Kotlin-Bloc/docs/architecture/bloc/bloc_builder"}},s={},p=[{value:"Definition",id:"definition",level:2},{value:"Context",id:"context",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Initializers are functions executed when the bloc is created, typically to kick off some initial load. They can execute asynchronous code and dispatch actions to be processed by other thunks and reducers. Initializers are executed exactly once during the ",(0,a.kt)("a",{parentName:"p",href:"./lifecycle"},"Lifecycle")," of a bloc."),(0,a.kt)("h3",{id:"context"},"Context"),(0,a.kt)("p",null,"An initializer is called with a ",(0,a.kt)("inlineCode",{parentName:"p"},"InitializerContext")," as receiver. The context is giving access to the current ",(0,a.kt)("inlineCode",{parentName:"p"},"State"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dispatcher")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"CoroutineScope"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"public data class InitializerContext<State, Action>(\n    val state: State,\n    val dispatch: Dispatcher<Action>,\n    val coroutineScope: CoroutineScope\n)\n")),(0,a.kt)("p",null,"Here's a typical example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"onCreate { \n    if (state.isEmpty()) dispatch(Load) \n}\n\nthunk<Load> {\n    dispatch(Loading)\n    val result = repository.getPosts()\n    dispatch(Loaded(result))\n}\n")),(0,a.kt)("p",null,"The thunk's asynchronous code could also be in the initializer itself:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"onCreate { \n    if (state.isEmpty()) {\n        dispatch(Loading)\n        val result = repository.getPosts()\n        dispatch(Loaded(result))\n    }\n}\n")),(0,a.kt)("p",null,"The order of declaration is irrelevant, the initializer will always be called first (see ",(0,a.kt)("a",{parentName:"p",href:"lifecycle"},"Lifecycle"),"). It could however be that the initializer is still running when the bloc starts processing actions (thunks and reducers). This behavior might change in a future version."))}f.isMDXComponent=!0}}]);