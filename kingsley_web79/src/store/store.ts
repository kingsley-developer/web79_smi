import { configureStore } from '@reduxjs/toolkit'
import adminSlice from "./slice"
import userSlice from "./slice2"

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    user: userSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch