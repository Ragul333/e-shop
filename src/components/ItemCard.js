import React from 'react'
import { addItem, removeItem } from '../utils/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import QuantityBtn from './QuantityBtn';
import { Link } from 'react-router-dom';

const ItemCard = ({ item, categoryId }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const currItem = cartItems.find(el => el.id === item.id)
    
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
    }
    return (
        <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: "18rem", cursor: 'pointer' }}>
            <div>
                <Link to={`/category/${categoryId}/detail/${item.id}`}>
                    <img src={item.image} className="card-img-top product-image" alt={item.name} />
                </Link>
            </div>
            <div className="card-body">
                <Link to={`/category/${categoryId}/detail/${item.id}`}>
                    <h5 className="card-title">{item.name}</h5>
                    <h5 className='text-bold text-secondary'>₹ {item.price}</h5>
                </Link>
                {
                    currItem?.quantity >= 1 ? <QuantityBtn item={currItem} addFn={handleAddItem} removeFn={handleRemoveItem} /> : <button type="button" className="btn btn-dark cart-btn mt-2" onClick={() => handleAddItem(item)}>Add to Cart</button>
                }
            </div>
        </div>
    )
}

export default ItemCard;