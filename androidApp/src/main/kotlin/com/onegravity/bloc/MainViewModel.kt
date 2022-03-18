package com.onegravity.bloc

import androidx.annotation.LayoutRes
import com.onegravity.bloc.sample.MainMenu.ActionState
import com.onegravity.bloc.sample.MainMenu.ActionState.*
import com.onegravity.bloc.sample.MainMenu.bloc

class MainViewModel(context: ActivityBlocContext) : BaseViewModel(context) {

    private val bloc = bloc(viewModelContext)

    val state: Stream<ActionState>
        get() = bloc

    private val view2Action = mapOf(
        R.id.counter_1 to Counter1,
        R.id.counter_2 to Counter2,
        R.id.books to Books,
        R.id.calculator to Calculator,
        R.id.stock to Stock,
    )

    fun launch(@LayoutRes viewId: Int) {
        view2Action[viewId]?.let { bloc.emit(it) }
    }

}