import { createSlice } from "@reduxjs/toolkit";


const favoritesSlice = createSlice({
    name:'addFavorites',
    initialState:{
        value:[],
    productsValue:JSON.parse(localStorage.getItem('products'))
},
        reducers:{
            setaddFavorites:(state,action)=>{
state.value = action.payload

            },
            setProductsValue:(state,action) =>{
state.productsValue = action.payload
            },
            changeAddFavorites:(state,action) =>{
                      let productsArr = state.productsValue   

if(productsArr[action.payload].addFavorites === true){
productsArr[action.payload].addFavorites = false}
else{productsArr[action.payload].addFavorites = true}
localStorage.setItem('products',JSON.stringify(productsArr))
state.productsValue = JSON.parse(localStorage.getItem('products'))
            },

addFavorites:(state,action) =>{

    

    if (action.payload.products[action.payload.index].addFavorites === false) {
       


        state.value.push(action.payload.products[action.payload.index])
    
        localStorage.setItem('products', JSON.stringify(action.payload.products))
        localStorage.setItem('addFavorites', JSON.stringify(state.value))
    
      } else {
      
    
       let stateValue = state.value
        let newValue = stateValue.filter(el => el.id !== action.payload.id)

        state.value =newValue
      
        localStorage.setItem('addFavorites', JSON.stringify(newValue))
        localStorage.setItem('products', JSON.stringify(action.payload.products))
       
      }
      
},

 }

 }
)

export const { setProductsValue, setaddFavorites, addFavorites,changeAddFavorites} =favoritesSlice.actions

export default favoritesSlice.reducer