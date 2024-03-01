import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slice/todoSlice';
import visibilityReducer from '../slice/visibilityFilterSlice';
// ...

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    visibilityFilter: visibilityReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;