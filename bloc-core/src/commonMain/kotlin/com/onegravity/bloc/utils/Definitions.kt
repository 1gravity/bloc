package com.onegravity.bloc.utils

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.Flow

@DslMarker
public annotation class BlocDSL

@RequiresOptIn(message = "This is an internal API designed for Bloc extensions.")
@Retention(AnnotationRetention.BINARY)
@Target(AnnotationTarget.CLASS, AnnotationTarget.FUNCTION)
public annotation class BlocProtected

@Retention(AnnotationRetention.BINARY)
@Target(AnnotationTarget.CLASS, AnnotationTarget.FUNCTION)
public annotation class BlocInternal

/**
 * This is the Observer specifically for Swift
 */
public typealias BlocObserver<State> = (State) -> Unit

/**
 * A SideEffectStream is a source of asynchronous (side effect) data.
 * It's a hot stream meant to deal with SideEffect data (compared to StateStream for State).
 *
 * A SideEffectStream emits:
 * - all values even duplicates
 * - no initial value upon subscription (analogous PublishSubject)
 *
 * A StateStream emits:
 * - no duplicate values
 * - an initial value upon subscription (analogous BehaviorSubject)
 */
public typealias SideEffectStream<Value> = Flow<Value>

/**
 * Function for accepting / rejecting a Proposal.
 * If the proposal is accepted, returns the new State (which is based on the Proposal).
 * If the proposal is rejected, returns Null.
 */
public typealias Acceptor<Proposal, State> = (proposal: Proposal, state: State) -> State?

public typealias Mapper<Model, State> = (model: Model) -> State

public typealias Selector<State, Model> = (State) -> Model

public typealias Dispatcher<Action> = suspend (Action) -> Unit

public typealias Initializer<State, Action> = suspend InitializerContext<State, Action>.() -> Unit

/**
 * Function that runs asynchronous code.
 * @see <a href="https://1gravity.github.io/Kotlin-Bloc/docs/architecture/bloc/thunk">
 *     Thunk</a>
 */
public typealias Thunk<State, Action, A, Proposal> =
        suspend ThunkContext<State, Action, A, Proposal>.() -> Unit

/**
 * Function that runs asynchronous code.
 * @see <a href="https://1gravity.github.io/Kotlin-Bloc/docs/architecture/bloc/thunk">
 *     Thunk</a>
 */
public typealias ThunkNoAction<State, Action, Proposal> =
        suspend ThunkContextNoAction<State, Action, Proposal>.() -> Unit

/**
 * Function that returns the current state. [GetState] is used by thunks to retrieve the current
 * state of the bloc and is accessible through the [ThunkContext] / [ThunkContextNoAction].
 */
public typealias GetState<State> = () -> State

public typealias Reducer<State, Action, Proposal> = ReducerContext<State, Action>.() -> Proposal

public typealias CoroutineBlock = suspend CoroutineScope.() -> Unit

public typealias ReducerNoAction<State, Proposal> = ReducerContextNoAction<State>.() -> Proposal

public typealias SideEffect<State, Action, SideEffect> = ReducerContext<State, Action>.() -> SideEffect

public typealias SideEffectNoAction<State, SideEffect> = ReducerContextNoAction<State>.() -> SideEffect
