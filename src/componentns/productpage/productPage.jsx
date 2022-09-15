import React,{useEffect} from 'react'
import Card from '../card/productCard'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../store/slices/productSlice'



const ProductPage = () =>{
     const dispatch = useDispatch()
const products = useSelector(store => store.products.value)
//useEffect(() => {
 
   //  dispatch(fetchProducts())
   
       
   
    
     
   
     
    // }, [])

return(
<>
   
     {products.map(({id,name,price,art,url,addFavorites},index) =><Card key={index} id ={id}  name= {name} price ={price} art ={art} url={url}  fill={addFavorites=== true? '#FFFF00':'#fff' }  index={index} products={products} ></Card>)}
    
    </>
    )
    
    
    
    }
    export default ProductPage
   