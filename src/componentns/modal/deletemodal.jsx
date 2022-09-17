import React from 'react'
import styles from './modal.module.scss'
import { useDispatch,useSelector } from 'react-redux'
import { closeDeleteModal } from '../../store/slices/ModalSlice'
import { deleteCard } from '../../store/slices/CardsSlice'


const  DeleteModal = (props) => {
  
   const dispatch = useDispatch()
   const modalText = useSelector(store => store.modalText.value);
   const index = useSelector(store =>store.cardIndex.value)
 

return(


<div className={styles.modal}>
  <div className={styles.outer_container} onClick ={props.handleClick}></div>
  <div className={styles.modal_main_container} >
 
<button className={styles.close_btn} onClick ={()=>{dispatch(closeDeleteModal())}}>X</button>

<p>{ modalText}</p>
<button className={styles.modal_btn} onClick ={()=>{
  dispatch(deleteCard(index))
  dispatch(closeDeleteModal())}} >delete from Cart</button>
</div>
</div>
)
}
export default DeleteModal