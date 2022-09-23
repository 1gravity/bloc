package com.onegravity.bloc.internal

import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.onegravity.bloc.bloc
import com.onegravity.bloc.runTests
import com.onegravity.bloc.testCollectSideEffects
import kotlinx.coroutines.delay
import kotlin.test.Test

class BlocSideEffectTests : BaseTestClass() {

    @Test
    fun testSideEffects() = runTests {
        val lifecycleRegistry = LifecycleRegistry()
        val context = BlocContextImpl(lifecycleRegistry)

        val bloc = bloc<Int, Action, SideEffect>(context, 1) {
            sideEffect<Increment> { Open }
            sideEffect<Decrement> { Close }
            sideEffect { Something }
        }

        lifecycleRegistry.onCreate()
        lifecycleRegistry.onStart()

        testCollectSideEffects(bloc, listOf(Open, Something, Open, Something, Open, Something)) {
            repeat(3) {
                bloc.send(Increment)
                delay(10)
            }
        }

        testCollectSideEffects(bloc, listOf(Something, Something, Something, Something, Something)) {
            repeat(5) {
                bloc.send(Whatever)
                delay(10)
            }
        }

        lifecycleRegistry.onStop()
        lifecycleRegistry.onDestroy()
    }

}