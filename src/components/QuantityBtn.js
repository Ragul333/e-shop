import React from 'react'

const QuantityBtn = ({ item, addFn, removeFn }) => {
    return (
        <div className='quantity-btn'>
            <div className='col-4'>
                <button type="button" class="btn btn-dark cart-btn mt-2" onClick={() => addFn(item)}>+</button>
            </div>
            <div className='col-4 text-center'>
                {item.quantity}
            </div>
            <div className='col-4'>
                <button type="button" class="btn btn-dark cart-btn mt-2" onClick={() => removeFn(item)}>-</button>
            </div>
        </div>
    )
}

export default QuantityBtn