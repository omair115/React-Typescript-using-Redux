import { combineReducers } from '@reduxjs/toolkit'
import commentsSlice from './commentReducer';
//combine Reducers
export const reducer = combineReducers({
 
  commentsReducer: commentsSlice.reducer
})
export type RootState = ReturnType<typeof reducer>
