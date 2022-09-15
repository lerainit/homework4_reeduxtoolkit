import { createSlice } from "@reduxjs/toolkit";


const modalTextSlice = createSlice({
    name:'modalText',
    initialState:{
        value: 'Are  you sure you want to add this product to cart?'},
        reducers:{

            SET_VALUE_MODAL:(state,action) =>{

   
  state.value = action.payload

},


        }




    }
)

export const { SET_VALUE_MODAL} = modalTextSlice.actions


export default modalTextSlice.reducer