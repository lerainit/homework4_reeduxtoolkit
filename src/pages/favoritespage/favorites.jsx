import React from 'react'
import FavItem from '../../componentns/favitem/FavItem'
import { useSelector } from 'react-redux'

const FavoritesPage = (props) =>{
    const addFavorites = useSelector(store =>store.addFavorites.value)

return(
  
    <>

{addFavorites.map(({id,name,price,art,url},index) =><FavItem key={id}  id ={id}  name= {name} fill={'#FFFF00'} price ={price} art ={art} url={url} ></FavItem>)}

</>   
    
    
   
)


}

export default FavoritesPage