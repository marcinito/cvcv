import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { DataWork } from '../../../pages/api/workData'

export interface apiWork {
  value: DataWork,
 
}

const initialState: apiWork = {
  value: {dataWork:[{jobTitle:"",company:"",city:"",timePeriod:{from:"",to:""},
  description:"",id:0}]}
  
}

export const apiWork = createSlice({
  name: 'apiWork',
  initialState,
  reducers: {
    saveDataFromApiWork: (state,action) => {
 
      state.value = action.payload
    
     
    },
 
  },
})

// Action creators are generated for each case reducer function
export const { saveDataFromApiWork} = apiWork.actions

export default apiWork.reducer