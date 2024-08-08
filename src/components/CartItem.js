import React from 'react'
import QuantityBtn from './QuantityBtn'
import { addItem, removeItem } from '../utils/slices/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ el }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
    }
    return (
        <div>
            <div className='cart-card'>
                <div className='container-fluid'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-md-2 col-sm-10'>
                            <img className='cart-img' src={el.image} />
                        </div>
                        <div className='col-md-4 col-sm-10 me-auto'>
                            <p>{el.name}</p>
                        </div>
                        <div className='col-md-4 ms-auto'>
                            <QuantityBtn item={el} addFn={handleAddItem} removeFn={handleRemoveItem}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem