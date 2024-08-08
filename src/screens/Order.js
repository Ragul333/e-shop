import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from '../components/OrderItem';

const Order = () => {
    const orders = useSelector(state => state.orders.orders);
    return (
        <div>
            {
                orders.length > 0 ? orders.map((item) => {
                    return <div className='container border border-dark mt-4'>
                        <div className='order-text-cont'>
                            <p><strong>Order ID :</strong> {item.orderId}</p>
                            <p className='text-center'>Total : <strong>₹ {item.orderedAmount}</strong></p>
                        </div>
                        {
                            item.orderedItems.map((orderedItems) => {
                                return <OrderItem el={orderedItems} />
                            })
                        }
                    </div>
                }) : <h4 className='mt-4 text-center'>No Orders !</h4>
            }
        </div>
    )
}

export default Order