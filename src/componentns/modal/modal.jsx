
import React from 'react'
import styles from './modal.module.scss'
import { useDispatch,useSelector } from 'react-redux'
import { type } from '@testing-library/user-event/dist/type'
import { closeModal } from '../../store/slices/ModalSlice'
import { addCart } from '../../store/slices/CardsSlice'


const  Modal = (props) => {
  
   const dispatch = useDispatch()
   const modal = useSelector(store => store.modal.value);
   const modalText = useSelector(store => store.modalText.value);
   const index = useSelector(store =>store.cardIndex.value)

const products = useSelector(store =>store.products.value)
   console.log(addCart)
return(


<div className={styles.modal}>
  <div className={styles.outer_container} onClick ={props.handleClick}></div>
  <div className={styles.modal_main_container} >
 
<button className={styles.close_btn} onClick ={()=>{dispatch(closeModal())}}>X</button>

<p>{ modalText}</p>
<button className={styles.modal_btn} onClick ={()=>{dispatch(addCart({index:index,products:products}))}} >Add to cart</button>
</div>
</div>



  ) 

}


export default Modal