import React from 'react'
import styles from './modal.module.scss'
import { useDispatch,useSelector } from 'react-redux'
import { closeDeleteModal } from '../../store/slices/ModalSlice'
import { deleteCard, setCards } from '../../store/slices/CardsSlice'


const  DeleteModal = (props) => {
  
   const dispatch = useDispatch()
   const modalText = useSelector(store => store.modalText.value);
   const id = useSelector(store =>store.cardIndex.valueId)
 

return(


<div className={styles.modal}>
  <div className={styles.outer_container} onClick ={props.handleClick}></div>
  <div className={styles.modal_main_container} >
 
<button className={styles.close_btn} onClick ={()=>{dispatch(closeDeleteModal())}}>X</button>

<p>{ modalText}</p>
<button className={styles.modal_btn} onClick ={()=>{
  dispatch(deleteCard({id:id}))
  dispatch(setCards(JSON.parse(localStorage.getItem('addCards'))))
  dispatch(closeDeleteModal())}} >delete from Cart</button>
</div>
</div>
)
}
export default DeleteModal