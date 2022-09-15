const initLocalStorage = () =>{
  if(!localStorage.getItem('products')){
    localStorage.setItem('products',JSON.stringify([]))
    }
    let addCardsArr =[]
   
   if(!localStorage.getItem('addCards')){
   localStorage.setItem('addCards',JSON.stringify(addCardsArr))
   }
   if(!localStorage.getItem('addFavorites')){
     localStorage.setItem('addFavorites',JSON.stringify([]))
     }}

     export default initLocalStorage