import { createSlice } from "@reduxjs/toolkit";


const cardIdSlice = createSlice({
    name:'cardIndex',
    initialState:{
        value: null,
    valueId:null },
        reducers:{

            SET_VALUE_INDEX:(state,action) =>{

   
  state.value = action.payload

},
SET_VALUE_ID:(state,action) =>{
    state.valueId = action.payload
}


        }




    }
)

export const {  SET_VALUE_INDEX,SET_VALUE_ID} = cardIdSlice.actions


export default cardIdSlice.reducer