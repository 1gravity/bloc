package com.onegravity.bloc.sample

import com.onegravity.bloc.bloc
import com.onegravity.bloc.context.BlocContext

object MainMenu {
    sealed class ActionState {
        object MainMenu : ActionState()
        object Counter1 : ActionState()
        object Counter2 : ActionState()
        object Books : ActionState()
        object Calculator : ActionState()
        object Stock : ActionState()
    }

    fun bloc(context: BlocContext) =
        bloc<ActionState, ActionState>(context, ActionState.MainMenu) {
            state { action }
        }
}
