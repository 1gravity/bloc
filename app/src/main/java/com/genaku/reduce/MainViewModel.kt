package com.genaku.reduce

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class MainViewModel : ViewModel() {

    private val commonState = CoroutineKnotState(SampleState.FIRST)

    private val knot = knot<SampleState, SampleIntent, SampleAction> {

        knotState = commonState

        intents { intent ->
            when (intent) {
                SampleIntent.ONE -> SampleState.FIRST.stateOnly
                SampleIntent.TWO -> SampleState.SECOND + SampleAction.YES + SampleAction.NO
                SampleIntent.THREE -> SampleState.THIRD.stateOnly
            }
        }

        suspendActions { action ->
            delay(200)
            when (action) {
                SampleAction.YES -> SampleIntent.THREE
                SampleAction.NO -> null
            }
        }
    }

    init {
        knot.start(viewModelScope)
    }

    val state: StateFlow<SampleState>
        get() = commonState.state

    fun d() {
        viewModelScope.launch {
            repeat(7) {
                knot.offerIntent(SampleIntent.ONE)
                knot.offerIntent(SampleIntent.TWO)
            }
        }
    }

    override fun onCleared() {
        knot.stop()
        super.onCleared()
    }
}

enum class SampleState : State {
    FIRST,
    SECOND,
    THIRD
}

enum class SampleIntent : Intent {
    ONE,
    TWO,
    THREE
}

enum class SampleAction : Action {
    YES,
    NO
}