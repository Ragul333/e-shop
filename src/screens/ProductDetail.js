import React from 'react'
import BackBtn from '../components/BackBtn'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/slices/cartSlice';
import QuantityBtn from '../components/QuantityBtn';

const ProductDetail = () => {
    const { id, productId } = useParams();
    const dispatch = useDispatch();

    const productCategories = useSelector(state => state.products.products);
    const cartItems = useSelector(state => state.cart.items);

    const category = productCategories.find((el) => el.id == id);
    const currProduct = category.items.find(el => el.id == productId)
    const currProductQty = cartItems.find(el => el.id == productId)

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
    }
    return (
        <div className='container'>
            <div className='mt-4'>
                <BackBtn />
            </div>
            <div className='row mt-4'>
                <div className='col-md-4 col-sm-12'>
                    <img className='card-img-top product-detail-image' src={currProduct.image} />
                </div>
                <div className='col-md-6 col-sm-12'>
                    <h5>{currProduct.name}</h5>
                    <p>{currProduct.description}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iusto sequi debitis vero autem odit delectus placeat nisi tenetur, ducimus explicabo saepe! Aspernatur distinctio provident molestiae aliquid odit tenetur nam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iusto sequi debitis vero autem odit delectus placeat nisi tenetur, ducimus explicabo saepe! Aspernatur distinctio provident molestiae aliquid odit tenetur nam!</p>
                    <h4 className=' text-secondary'>₹ {currProduct.price}</h4>
                    {
                        currProductQty && currProductQty?.quantity >= 1 ? <QuantityBtn item={currProductQty} addFn={handleAddItem} removeFn={handleRemoveItem} /> : <button type="button" className="btn btn-dark cart-btn mt-2" onClick={() => handleAddItem(currProduct)}>Add to Cart</button>
                    }
                </div>
            </div>

        </div>
    )
}

export default ProductDetail