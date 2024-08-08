import React from 'react'

const OrderItem = ({ el }) => {
    return (
        <div className='cart-card'>
            <div className='container-fluid'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-md-4 col-sm-10 d-flex'>
                        <img className='order-img' src={el.image} />
                        <div className='ms-3'>
                            <p>{el.name}</p>
                            <p><strong>₹ {el.price}</strong></p>
                        </div>
                    </div>
                    <div className='col-md-4 order-qty ms-auto'>
                        <p><strong>Nos : </strong>{el.quantity} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem