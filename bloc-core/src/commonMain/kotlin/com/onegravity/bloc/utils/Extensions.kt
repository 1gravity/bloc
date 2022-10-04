package com.onegravity.bloc.utils

/**
 * Extension function for [InitializerContext] to launch a coroutine and a run a suspend function
 * without exposing the bloc's CoroutineScope.
 */
@BlocDSL
public fun <State, Action, Proposal> InitializerContext<State, Action, Proposal>.launch(
    block: CoroutineBlock
) {
    runner.run(null, block)
}

/**
 * Extension function for [InitializerContext] to launch a coroutine and a run a suspend function
 * without exposing the bloc's CoroutineScope.
 *
 * @param jobConfig @see [JobConfig]
 */
@BlocDSL
public fun <State, Action, Proposal> InitializerContext<State, Action, Proposal>.launch(
    jobConfig: JobConfig,
    block: CoroutineBlock
) {
    runner.run(jobConfig, block)
}

/**
 * Extension function for [ThunkContext] to launch a coroutine and a run a suspend function
 * without exposing the bloc's CoroutineScope.
 */
@BlocDSL
public fun <State, Action, A : Action, Proposal> ThunkContext<State, Action, A, Proposal>.launch(
    block: CoroutineBlock
) {
    runner.run(null, block)
}

/**
 * Extension function for [ThunkContext] to launch a coroutine and a run a suspend function
 * without exposing the bloc's CoroutineScope.
 *
 * @param jobConfig @see [JobConfig]
 */
@BlocDSL
public fun <State, Action, A : Action, Proposal> ThunkContext<State, Action, A, Proposal>.launch(
    jobConfig: JobConfig,
    block: CoroutineBlock
) {
    runner.run(jobConfig, block)
}

/**
 * Extension function for [ThunkContextNoAction] to launch a coroutine and a run a suspend function
 * without exposing the bloc's CoroutineScope.
 */
@BlocDSL
public fun <State, Action, Proposal> ThunkContextNoAction<State, Action, Proposal>.launch(
    block: CoroutineBlock
) {
    runner.run(null, block)
}

/**
 * Extension function for [ThunkContextNoAction] to launch a coroutine and a run a suspend function
 * without exposing the bloc's CoroutineScope.
 *
 * @param jobConfig @see [JobConfig]
 */
@BlocDSL
public fun <State, Action, Proposal> ThunkContextNoAction<State, Action, Proposal>.launch(
    jobConfig: JobConfig,
    block: CoroutineBlock
) {
    runner.run(jobConfig, block)
}

/**
 * Extension function for [ReducerContext] to launch a coroutine and a run a suspend function
 * without exposing the bloc's CoroutineScope.
 */
@BlocDSL
public fun <State, Action> ReducerContext<State, Action>.launch(
    block: CoroutineBlock
) {
    runner.run(null, block)
}

/**
 * Extension function for [ReducerContext] to launch a coroutine and a run a suspend function
 * without exposing the bloc's CoroutineScope.
 *
 * @param jobConfig @see [JobConfig]
 */
@BlocDSL
public fun <State, Action> ReducerContext<State, Action>.launch(
    jobConfig: JobConfig,
    block: CoroutineBlock
) {
    runner.run(jobConfig, block)
}

/**
 * Extension function for [ReducerContextNoAction] to launch a coroutine and a run a suspend function
 * without exposing the bloc's CoroutineScope.
 */
@BlocDSL
public fun <State> ReducerContextNoAction<State>.launch(block: CoroutineBlock) {
    runner.run(null, block)
}

/**
 * Extension function for [ReducerContextNoAction] to launch a coroutine and a run a suspend function
 * without exposing the bloc's CoroutineScope.
 *
 * @param jobConfig @see [JobConfig]
 */
@BlocDSL
public fun <State> ReducerContextNoAction<State>.launch(
    jobConfig: JobConfig,
    block: CoroutineBlock
) {
    runner.run(jobConfig, block)
}
