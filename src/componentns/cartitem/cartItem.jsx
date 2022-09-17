import React from 'react'
import styles from './cartItem.module.scss'
import { useDispatch } from 'react-redux';
import { openDeleteModal } from '../../store/slices/ModalSlice';
import { SET_VALUE_MODAL } from '../../store/slices/modalTextSlice';
import { SET_VALUE_ID } from '../../store/slices/cardIdSlice';

const CartItem = (props) => {
    const dispatch = useDispatch();

   
const id = props.id
    return (
        <>
<div className={styles.cart_item}>
            <ul>
                <li><span>Name:</span>{props.name}</li>
                <li><span>Price:</span>{props.price}</li>
                <li><img className={styles.image} src={props.url} alt='Product ' /></li>
                <li><span>Art:</span>{props.art}</li>



              
            </ul>

  <button className={styles.del_from_cart_btn} onClick={() => {
 dispatch(openDeleteModal())
 dispatch(SET_VALUE_MODAL('Do you want to add this product to cart'))
 dispatch(SET_VALUE_ID(id))
                }}>X</button>
</div>
        </>
    )
}
export default CartItem;

