import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addOrder } from '../utils/slices/orderSlice';
import { clearCart } from '../utils/slices/cartSlice';
import Modal from './Modal';

const CartSummary = ({ cartItems, price }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const navigate = useNavigate();


    const handleOrder = () => {
        setShowModal(true)
        setOrderPlaced(true);
        setTimeout(() => {
            setOrderPlaced(false);
            dispatch(addOrder({ items: cartItems, price }));
            dispatch(clearCart());
            setShowModal(false);
            navigate('/orders')
        }, 3000);
    };

    return (<>
        <div className='cart-summary mt-3'>
            <h5 className='text-center mt-1'>Sub Total</h5>
            <hr />
            {cartItems.map(item => (
                <li className='cart-summary-list' key={item.id}>
                    <div className='col-4'>{item.name} : </div>
                    <div className='col-4'><span><strong>₹ {item.price}</strong> x {item.quantity}</span></div>
                </li>
            ))}
            <hr />
            <p className='text-center'>Total : <strong>₹ {price}</strong></p>
            <button type="button" className="btn btn-dark cart-btn mt-2" onClick={handleOrder}>Place Order</button>
        </div>
        <div>
            <Modal orderPlaced={orderPlaced} showModal={showModal} />
        </div>
    </>

    )
}

export default CartSummary