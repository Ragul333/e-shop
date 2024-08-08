import React from 'react'
import { useSelector } from 'react-redux';
import BackBtn from '../components/BackBtn';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import cartImage from '../utils/images/empty-cart.png'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)

    return (
        <div className='container'>
            <div className='mt-4'>
                <BackBtn />
            </div>
            <div className='row'>
                <div className='col-md-8 col-sm-12'>
                    {
                        cartItems.length > 0 && cartItems.map((el) => {
                            return <div key={el.id}>
                                <CartItem el={el} />
                            </div>
                        })
                    }
                </div>
                <div className='col-md-4 col-sm-12'>
                    {
                        cartItems.length > 0 ? <CartSummary cartItems={cartItems} price={totalPrice} /> : <></>
                    }
                </div>
            </div>
            {
                cartItems.length === 0 &&
            <div className='empty-cart-cont'>
                <h1 className='d-block text-bold'> Cart is Empty !!!</h1>
                <img className='empty-cart-image' src={cartImage} />
                <button className='btn btn-dark' onClick={()=>navigate('/')}>Continue shopping</button>
            </div>
            }
        </div>
    )
}

export default Cart