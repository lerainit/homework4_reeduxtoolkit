
import './App.scss';
import React, { useEffect} from 'react'
import Modal from './componentns/modal/modal'
import DeleteModal from './componentns/modal/deletemodal';
import Navigation from './componentns/navigation/Navigation';
import AppRoutes from './AppRoutes';
import initLocalStorage from './initLocalStorage';
import {useSelector} from 'react-redux'
import{useDispatch} from 'react-redux'
import { fetchProducts } from './store/slices/productSlice';
import {setaddFavorites} from './store/slices/FavoritesSlice'
import {setCards } from './store/slices/CardsSlice'
import {setProductsValue } from './store/slices/FavoritesSlice'


initLocalStorage()



const App = () => {
  const dispatch = useDispatch()
  const modal = useSelector(store =>store.modal.value)
  const deleteModal = useSelector(store => store.modal.deleteModalvalue)
  useEffect(
    () =>{
     dispatch(fetchProducts())
    dispatch(setProductsValue(JSON.parse(localStorage.getItem('products'))))
    if(!localStorage.getItem('addFavorites')){
    dispatch(setaddFavorites([]))}
    else{
      dispatch(setaddFavorites(JSON.parse(localStorage.getItem('addFavorites'))))
      if(!localStorage.getItem('addCards')){
        dispatch(setCards([]))}
        else{
          dispatch(  setCards( JSON.parse(localStorage.getItem('addCards'))))
        }
    }
  },[]
)



return (
    <>

      <div className='App'>

        <Navigation />

        <AppRoutes  />

      </div>
 { modal &&
        <Modal ></Modal >}
      { deleteModal &&
        <DeleteModal  ></DeleteModal >}
    </>
  );
}


export default App

