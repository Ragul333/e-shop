import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getProductCatById } from '../utils/slices/productSlice';
import ItemCard from '../components/ItemCard';
import BackBtn from '../components/BackBtn';

const ProductCategory = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  const productCategories = useSelector(state => state.products.products);

  function listProducts() {
    const category = productCategories.find((el) => el.id == id);
    setProducts(category.items);
  }

  useEffect(() => {
    listProducts()
  }, [])

  return (
    <div className='container'>
      <div className='mt-4'>
        <BackBtn />
      </div>
      <div className='row mt-5'>

        {
          products?.map((el) => {
            return <div className='col-md-3' key={el.id}><ItemCard item={el} categoryId={id} /></div>
          })
        }
      </div>
    </div>
  )
}

export default ProductCategory;