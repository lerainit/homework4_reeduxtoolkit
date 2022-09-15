import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name:'modal',
    initialState:{
        value: false,
        deleteModalvalue:false},
        reducers:{

openModal:(state) =>{

   
  state.value = true

},
openDeleteModal:(state) =>{
    
    state.deleteModalvalue = true

},

closeModal:(state) =>{

   
    state.value = false
  
  },
  closeDeleteModal:(state) =>{

   
    state.deleteModalvalue = false
  
  },


        }




    }
)

export const {openModal,openDeleteModal,closeModal,closeDeleteModal} = modalSlice.actions


export default modalSlice.reducer