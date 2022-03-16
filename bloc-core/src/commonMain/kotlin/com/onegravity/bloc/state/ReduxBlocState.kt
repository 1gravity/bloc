package com.onegravity.bloc.state

import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.disposable.scope.disposableScope
import com.onegravity.bloc.utils.Mapper
import com.onegravity.bloc.utils.Selector
import com.onegravity.bloc.utils.selectScoped
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.cancel
import kotlinx.coroutines.flow.FlowCollector
import kotlinx.coroutines.flow.MutableStateFlow
import org.reduxkotlin.Store

class ReduxBlocState<State, Proposal: Any, Model: Any, ReduxModel: Any>(
    disposableScope: DisposableScope,
    initialState: State,
    private val store: Store<ReduxModel>,
    selector: Selector<ReduxModel, Model>,
    mapper: Mapper<Model, State>
) : BlocState<State, Proposal>,
    DisposableScope by disposableScope {

    private val state = MutableStateFlow(initialState)

    // we need this to execute Thunks, it's tied to the DisposableScope which is tied to the
    // lifecycle of the BlocContext
    val coroutineScope = CoroutineScope(SupervisorJob() + Dispatchers.Default)

    init {
        // using selectScoped will unsubscribe from the store automatically when the Bloc's
        // lifecycle ends (onDestroy() called)
        store.selectScoped(this, selector) { model ->
            state.tryEmit(mapper(model))
        }

        scope {
            coroutineScope.cancel()
        }
    }

    /**
     * The Stream<State>.
     */
    override val value: State
        get() = state.value

    override suspend fun collect(collector: FlowCollector<State>) {
        state.collect(collector)
    }

    /**
     * The Sink<Proposal>.
     */
    override fun emit(value: Proposal) {
        store.dispatch(value)
    }

}
