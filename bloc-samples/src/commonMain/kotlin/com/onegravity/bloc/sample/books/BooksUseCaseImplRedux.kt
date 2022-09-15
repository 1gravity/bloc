package com.onegravity.bloc.sample.books

import com.github.michaelbull.result.mapBoth
import com.onegravity.bloc.bloc
import com.onegravity.bloc.BlocContext
import com.onegravity.bloc.redux.toBlocState
import com.onegravity.bloc.sample.books.BookStore.reduxStore
import com.onegravity.bloc.toObservable
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import org.reduxkotlin.Thunk

/**
 * Implements the BooksUseCase with a single Bloc and a ReduxBlocState.
 */
class BooksUseCaseImplRedux(
    context: BlocContext,
    private val repository: BooksRepository,
) : BooksUseCase {
    private fun BookResult.toState() =
        mapBoth(
            { if (it.isEmpty()) BookState.Empty else BookState.Loaded(it) },
            {
                val message = when (it) {
                    is BooksRepository.Failure.Network -> "Network error. Check Internet connection and try again."
                    is BooksRepository.Failure.Generic -> "Generic error, please try again."
                }
                BookState.Failure(message)
            }
        )

    sealed class BookAction {
        object Load : BookAction()
        object Clear : BookAction()
    }

    // The Load Books Thunk
    private fun loadThunk(
        repository: BooksRepository,
        launch: (block: suspend CoroutineScope.() -> Unit) -> Unit
    ): Thunk<BookStore.ReduxModel> =
        { dispatch, _, _ ->
            dispatch(BookStore.ReduxAction.Loading)
            launch {
                val books = repository.loadBooks()
                dispatch(BookStore.ReduxAction.Loaded(books))
            }
        }

    private val bloc = bloc<BookState, BookAction, Nothing, Any>(context, reduxStore.toBlocState(
        context = context,
        select = { reduxModel ->
            when {
                reduxModel.isLoading -> BookState.Loading
                else -> reduxModel.books.toState()
            }
        },
        map = { model -> model }
    )) {
        reduce<BookAction.Load> {
            // our Proposal: a Thunk which is being dispatched to the Redux Store
            loadThunk(repository, { block -> launchIt(block = block) })
        }
        reduce<BookAction.Clear> { BookStore.ReduxAction.Clear }
    }

    override val observable = bloc.toObservable()

    override fun load() {
        bloc.send(BookAction.Load)
    }

    override fun clear() {
        bloc.send(BookAction.Clear)
    }

}