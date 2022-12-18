import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/PositionElement/positionElementSlice'
import apiWorkReducer from '../redux/features/apiWork/apiWork'
import apiMyProjectReducer from '../redux/features/apiMyProjects/myProjects'
import apiMySport from './features/apiSport/apiSport'
export const store = configureStore({
  reducer: {
    positionElement:counterReducer,
    apiWork:apiWorkReducer,
    myProjects:apiMyProjectReducer,
    apiMySport,


  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch




