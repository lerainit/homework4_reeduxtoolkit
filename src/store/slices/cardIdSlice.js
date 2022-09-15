import { createSlice } from "@reduxjs/toolkit";


const cardIdSlice = createSlice({
    name:'cardIndex',
    initialState:{
        value: null },
        reducers:{

            SET_VALUE_INDEX:(state,action) =>{

   
  state.value = action.payload

},


        }




    }
)

export const {  SET_VALUE_INDEX} = cardIdSlice.actions


export default cardIdSlice.reducer