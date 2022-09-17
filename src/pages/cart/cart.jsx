import React from 'react'
import { useSelector } from 'react-redux'

import CartItem from '../../componentns/cartitem/cartItem'

const CartPage = (props) =>{

    const addCart = useSelector(store =>store.Cart.value)
  
return(

<>

{addCart.map(({id,name,price,art,url},index) =><CartItem key={index}  id ={id}  name= {name} price ={price} art ={art} url={url}  index={index}  ></CartItem>)}

</>





)






}
export default CartPage

