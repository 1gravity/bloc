package com.onegravity.bloc.counter

import com.onegravity.bloc.ActivityBlocContext
import com.onegravity.bloc.BaseViewModel
import com.onegravity.bloc.sample.counter.ReduxCounter.Action.Decrement
import com.onegravity.bloc.sample.counter.ReduxCounter.Action.Increment
import com.onegravity.bloc.sample.counter.ReduxCounter.bloc
import com.onegravity.bloc.toLiveData

class CounterReduxViewModel(context: ActivityBlocContext) : BaseViewModel(context) {

    private val bloc = bloc(viewModelContext)

    val state = toLiveData(bloc)
    //  this does the same:
//    val state = bloc.toLiveData(viewModelScope)

    fun increment() {
        bloc.send(Increment(1))
    }

    fun decrement() {
        bloc.send(Decrement(1))
    }

}