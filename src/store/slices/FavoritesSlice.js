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
console.log(productsArr)
if(productsArr[action.payload].addFavorites === true){
productsArr[action.payload].addFavorites = false}
else{productsArr[action.payload].addFavorites = true}
localStorage.setItem('products',JSON.stringify(productsArr))
state.productsValue = JSON.parse(localStorage.getItem('products'))
            },

addFavorites:(state,action) =>{
console.log(action.payload.products)
    

    if (action.payload.products[action.payload.index].addFavorites === false) {
       


        state.value.push(action.payload.products[action.payload.index])
    
        localStorage.setItem('products', JSON.stringify(action.payload.products))
        localStorage.setItem('addFavorites', JSON.stringify(state.value))
    
      } else {
      
    
  state.value.splice(action.payload.products[action.payload.index],1)
  
     
        localStorage.setItem('products', JSON.stringify(action.payload.products))
        localStorage.setItem('addFavorites', JSON.stringify(state.value))
    
      }
      
},



        }




    }
)

export const { setProductsValue, setaddFavorites, addFavorites,changeAddFavorites} =favoritesSlice.actions
const setFavoritessArr = () => async (dispatch) =>{
    dispatch(setaddFavorites())
}
 export {setFavoritessArr}

export default favoritesSlice.reducer