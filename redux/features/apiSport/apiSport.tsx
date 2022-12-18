import { createSlice } from '@reduxjs/toolkit'
import type { SportType } from '../../../pages/api/Sport'
interface CounterState {
  value: SportType[]
}

const initialState = {
   value:[]
   } as CounterState

const MySport = createSlice({
  name: 'mySport',
  initialState,
  reducers: {
    saveDataMySport(state,action) {
        console.log(action,"type")
      state.value=action.payload
   console.log(action,"action")
    },

  },
})

export const { saveDataMySport } = MySport.actions
export default MySport.reducer