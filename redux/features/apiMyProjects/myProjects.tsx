import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {DataMyProjects} from '../../../pages/api/MyProjects'
interface CounterState {
  value: DataMyProjects
}

const initialState = {
   value:[]
   } as CounterState

const myProjects = createSlice({
  name: 'myProjects',
  initialState,
  reducers: {
    saveDataMyProjects(state,action) {
      state.value=action.payload
   console.log(action,"action")
    },

  },
})

export const { saveDataMyProjects } = myProjects.actions
export default myProjects.reducer