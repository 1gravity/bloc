"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6944],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6586:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return r},toc:function(){return p}});var a=n(3117),o=(n(7294),n(3905));const i={id:"bloc_state",title:"Bloc State",sidebar_label:"Overview",hide_title:!0},l=void 0,r={unversionedId:"architecture/blocstate/bloc_state",id:"architecture/blocstate/bloc_state",title:"Bloc State",description:"Definition",source:"@site/docs/architecture/blocstate/bloc_state.md",sourceDirName:"architecture/blocstate",slug:"/architecture/blocstate/bloc_state",permalink:"/Kotlin-Bloc/docs/architecture/blocstate/bloc_state",draft:!1,tags:[],version:"current",frontMatter:{id:"bloc_state",title:"Bloc State",sidebar_label:"Overview",hide_title:!0},sidebar:"architectureSidebar",previous:{title:"Coroutine Launcher",permalink:"/Kotlin-Bloc/docs/architecture/bloc/coroutine_launcher"},next:{title:"Bloc State Builder",permalink:"/Kotlin-Bloc/docs/architecture/blocstate/bloc_state_builder"}},c={},p=[{value:"Definition",id:"definition",level:2},{value:"Public Interface",id:"public-interface",level:2},{value:"State Stream",id:"state-stream",level:3},{value:"Sink",id:"sink",level:3},{value:"Separation of Concerns",id:"separation-of-concerns",level:2},{value:"Bloc isA BlocState",id:"bloc-isa-blocstate",level:2}],s={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocState")," is the actual keeper of ",(0,o.kt)("inlineCode",{parentName:"p"},"State"),", a source of asynchronous state data (",(0,o.kt)("inlineCode",{parentName:"p"},"StateStream"),") and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Sink")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"Proposals")," to (potentially) alter its state."),(0,o.kt)("h2",{id:"public-interface"},"Public Interface"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocState")," implements two public facing functions."),(0,o.kt)("h3",{id:"state-stream"},"State Stream"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"StateStream")," is a stream to observe ",(0,o.kt)("inlineCode",{parentName:"p"},"State"),". It's similar to ",(0,o.kt)("a",{parentName:"p",href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-state-flow/"},"StateFlow")," but doesn't expose the ",(0,o.kt)("inlineCode",{parentName:"p"},"replayCache")," and doesn't ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/conflate.html"},"conflate values"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"public val value: State\npublic suspend fun collect(collector: FlowCollector<State>)\n")),(0,o.kt)("p",null,"While ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," is used to retrieve the current ",(0,o.kt)("inlineCode",{parentName:"p"},"State"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"collect")," function is used to collect the flow of ",(0,o.kt)("inlineCode",{parentName:"p"},"States")," emitted by the ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocState"),". "),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"StateStream")," emits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"no duplicate values"),(0,o.kt)("li",{parentName:"ul"},"an initial value upon subscription (analogous ",(0,o.kt)("inlineCode",{parentName:"li"},"BehaviorSubject"),")")),(0,o.kt)("p",null,"There are wrappers that make observing blocs very easy -> ",(0,o.kt)("a",{parentName:"p",href:"/Kotlin-Bloc/docs/extensions/overview"},"Extensions"),"."),(0,o.kt)("h3",{id:"sink"},"Sink"),(0,o.kt)("p",null,"A sink to send data / ",(0,o.kt)("inlineCode",{parentName:"p"},"Proposals")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocState"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"public fun send(proposal: Proposal)\n")),(0,o.kt)("p",null,"As mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"/Kotlin-Bloc/docs/architecture/#design-overview"},"Design Overview"),", reducers don't return ",(0,o.kt)("inlineCode",{parentName:"p"},"State")," but a ",(0,o.kt)("inlineCode",{parentName:"p"},"Proposal"),", a concept inspired by the ",(0,o.kt)("a",{parentName:"p",href:"https://sam.js.org/"},"SAM pattern"),".  ",(0,o.kt)("inlineCode",{parentName:"p"},"Proposals")," increase the level of decoupling between ",(0,o.kt)("inlineCode",{parentName:"p"},"Bloc")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocState")," to support a number of use cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"BlocState]")," can enforce domain specific rules like validation or enrichment"),(0,o.kt)("li",{parentName:"ul"},"connect a ",(0,o.kt)("inlineCode",{parentName:"li"},"Bloc")," to a ",(0,o.kt)("a",{parentName:"li",href:"../../extensions/redux/redux_motivation"},"Redux Store")),(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"Blocs")," as ",(0,o.kt)("inlineCode",{parentName:"li"},"BlocsState")," (see ",(0,o.kt)("a",{parentName:"li",href:"/Kotlin-Bloc/docs/architecture/blocstate/bloc_state#bloc-isa-blocstate"},"Bloc isA BlocState"),")")),(0,o.kt)("h2",{id:"separation-of-concerns"},"Separation of Concerns"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Bloc")," doesn't store the state itself but delegates to a ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocState")," to separate the two concerns:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"business logic"),(0,o.kt)("li",{parentName:"ol"},"storing state ")),(0,o.kt)("p",null,"We can easily change a ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocState")," to modify the behavior of the component. Take e.g. the ToDo sample app. The bloc is currently defined like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun toDoBloc(context: BlocContext) = bloc<List<ToDo>, ToDoAction>(\n    context = context,\n    blocState = PersistingToDoState(CoroutineScope(SupervisorJob())) \n) {\n\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PersistingToDoState")," is, as the name implies, storing to do data persistently. Changing one line of code can change that behavior:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun toDoBloc(context: BlocContext) = bloc<List<ToDo>, ToDoAction>(\n    context = context,\n    blocState = blocState(emptyList())     \n) {\n")),(0,o.kt)("p",null,"Apart from the clear separation of concerns, using ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocStates")," has many advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we can share state between business logic components"),(0,o.kt)("li",{parentName:"ul"},"we can persist state (database, network)"),(0,o.kt)("li",{parentName:"ul"},"we can add domain rules to the actual state container (validation, enrichment)"),(0,o.kt)("li",{parentName:"ul"},"we can use a global state container like a Redux store instead of individual ",(0,o.kt)("inlineCode",{parentName:"li"},"BlocState")," containers (compare ",(0,o.kt)("a",{parentName:"li",href:"../../extensions/redux/redux_motivation"},"Redux"),")")),(0,o.kt)("h2",{id:"bloc-isa-blocstate"},"Bloc isA BlocState"),(0,o.kt)("p",null,"The attentive reader will have noticed that ",(0,o.kt)("inlineCode",{parentName:"p"},"Blocs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocStates")," have a very similar public interface:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Bloc Architecture - Overview",src:n(2131).Z,width:"1595",height:"982"})),(0,o.kt)("p",null,"The only difference between a ",(0,o.kt)("inlineCode",{parentName:"p"},"Bloc")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocState")," is their intended purpose and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Bloc's")," ",(0,o.kt)("inlineCode",{parentName:"p"},"SideEffectStream"),". As a matter of fact a ",(0,o.kt)("inlineCode",{parentName:"p"},"Bloc")," is also a ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocState"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Bloc<out State : Any, in Action : Any, SideEffect : Any> : BlocState<State, Action>() {\n")),(0,o.kt)("p",null,"Given that, it's easy to use a ",(0,o.kt)("inlineCode",{parentName:"p"},"Bloc")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocState")," provided we treat the ",(0,o.kt)("inlineCode",{parentName:"p"},"Proposal")," output of one ",(0,o.kt)("inlineCode",{parentName:"p"},"Bloc")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"Action")," for the next ",(0,o.kt)("inlineCode",{parentName:"p"},"Bloc")," like in this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun <State: Any> auditTrailBloc(context: BlocContext, initialValue: State) = bloc<State, State>(\n    context,\n    initialValue\n) {\n    thunk {\n        logger.d("auditTrailBloc: changing state from ${getState()} to $action")\n        // here we would write the changes to a db or send it to the backend\n        dispatch(action)\n    }\n    reduce { action }\n }\n')),(0,o.kt)("p",null,"Above example illustrates how to define a reusable ",(0,o.kt)("inlineCode",{parentName:"p"},"Bloc")," intercepting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Proposals")," from one ",(0,o.kt)("inlineCode",{parentName:"p"},"Bloc"),", sending it to the actual ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocState")," (which is created automatically by the ",(0,o.kt)("a",{parentName:"p",href:"../bloc/bloc_builder"},"BlocBuilder"),") and triggering an asynchronous operations. To use this ",(0,o.kt)("inlineCode",{parentName:"p"},"Bloc")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocState"),", we have an extension ",(0,o.kt)("inlineCode",{parentName:"p"},"asBlocState()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun bloc(context: BlocContext) = bloc<State, Action>(\n    context,\n    auditTrailBloc(context, initialState).asBlocState()\n) {\n    ...\n}\n")))}u.isMDXComponent=!0},2131:function(e,t,n){t.Z=n.p+"assets/images/Bloc Architecture - Bloc Overview-b26fa075737aadf3f3553a44d8d9c0e4.svg"}}]);