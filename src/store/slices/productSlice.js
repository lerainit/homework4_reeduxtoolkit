import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../getProducts";


const productSlice = createSlice({
    name:'products',
    initialState:{
        value:[],},
        reducers:{

            setProducts:(state,action) =>{

   
  state.value = action.payload

},


        }




    }
)

export const {  setProducts} = productSlice.actions

const fetchProducts  =() =>  async (dispatch) => {
   if(!localStorage.getItem('products')){
    const products =   await fetch('productsJSON.json').then(response =>response.json())
    console.log(products)
   
   localStorage.setItem('products',JSON.stringify(products))
    dispatch(setProducts(products))}else{
        dispatch(setProducts(JSON.parse(localStorage.getItem('products'))))
    }

}

export {fetchProducts}
export default productSlice.reducer