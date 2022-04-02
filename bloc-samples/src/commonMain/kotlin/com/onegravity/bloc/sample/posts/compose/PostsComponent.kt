package com.onegravity.bloc.sample.posts.compose

import com.onegravity.bloc.sample.posts.domain.repositories.Post
import com.onegravity.bloc.utils.BlocOwner
import kotlinx.coroutines.CoroutineScope

interface PostsComponent : BlocOwner<PostsRootState, Any, Unit, PostsRootState> {
    fun onClicked(post: Post)
    fun onClosed()
    fun loadPosts(coroutineScope: CoroutineScope? = null)
    fun loadPost(coroutineScope: CoroutineScope? = null)
}
