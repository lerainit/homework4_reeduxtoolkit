

import {configureStore } from '@reduxjs/toolkit';
import cardsReducer from './slices/CardsSlice';
import favoritesReducer from './slices/FavoritesSlice';
import modalReducer from './slices/ModalSlice';
import cardIdReducer from './slices/cardIdSlice';
import modalTextReducer from './slices/modalTextSlice';
import productsReducer from './slices/productSlice'

const store = configureStore({
    reducer:{
Cart:cardsReducer,
addFavorites:favoritesReducer,
modal:modalReducer,
cardIndex:cardIdReducer,
modalText:modalTextReducer,
products:productsReducer


    }
})

export default store