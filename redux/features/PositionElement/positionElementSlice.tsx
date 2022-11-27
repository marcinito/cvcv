import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  valueAboutMe: number,
  valueMyProjects: number,
 
}

const initialState: CounterState = {
  valueAboutMe: 0,
  valueMyProjects: 0,
  
}

export const positionElementSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    savePositionAboutMe: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.valueAboutMe = action.payload.data
     
    },
    savePositionMyProjects: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.valueMyProjects = action.payload.data
     
    },
 
  },
})

// Action creators are generated for each case reducer function
export const { savePositionAboutMe,savePositionMyProjects} = positionElementSlice.actions

export default positionElementSlice.reducer