import React from 'react'
import styles from './cartItem.module.scss'
import { useSelector,useDispatch } from 'react-redux';
import { openDeleteModal } from '../../store/slices/ModalSlice';
import { SET_VALUE_INDEX } from '../../store/slices/cardIdSlice';
import { SET_VALUE_MODAL } from '../../store/slices/modalTextSlice';

const CartItem = (props) => {
    const dispatch = useDispatch();

    const id = props.id
    const index = props.index

    return (
        <>

            <ul>
                <li><span>Name:</span>{props.name}</li>
                <li><span>Price:</span>{props.price}</li>
                <li><img className={styles.image} src={props.url} alt='Product ' /></li>
                <li><span>Art:</span>{props.art}</li>



                <button className={styles.del_from_cart_btn} onClick={() => {
 dispatch(openDeleteModal())
 dispatch(SET_VALUE_MODAL('Do you want to add this product to cart'))
 dispatch(SET_VALUE_INDEX(index))
                }}>Delete from Cart</button>
            </ul>



        </>
    )
}
export default CartItem;

