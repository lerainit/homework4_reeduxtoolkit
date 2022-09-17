import { createSlice } from "@reduxjs/toolkit";


const cardsSlice = createSlice({
    name:'Cart',
    initialState:{
        value:[],},
        reducers:{
            setCards:(state,action) =>{
state.value = action.payload
            },

addCart:(state,action) =>{

    let addCardsArr = state.value
    addCardsArr.push(action.payload.products[action.payload.index]) 
    
    localStorage.setItem('addCards', JSON.stringify(addCardsArr))
    
    addCardsArr=JSON.parse(localStorage.getItem('addCards'))
  //  return { value:addCardsArr}
  state.value = addCardsArr

},
deleteCard:(state,action) =>{
   // let addCardsArr = state.value
   // let newAddCardsArr = addCardsArr.filter((el, index) => action.payload.index !== index)
//addCardsArr.splice(addCardsArr[action.payload.index],1)

let stateValue = state.value
        let newValue = stateValue.filter(el => el.id !== action.payload.id)
console.log(action.payload.id)
     
      

    localStorage.setItem('addCards', JSON.stringify(newValue))


     state.value =newValue
  //  state.value = addCardsArr

}


        }




    }
)

export const { setCards,addCart,deleteCard} =cardsSlice.actions

export default cardsSlice.reducer