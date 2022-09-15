export const getProducts = async () =>{
    return await fetch('productsJSON.json').then(response =>response.json())
   
}