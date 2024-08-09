import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { addItems, addProducts, getProductCatById } from '../utils/slices/productSlice';
import ItemCard from '../components/ItemCard';
import BackBtn from '../components/BackBtn';
import axios from 'axios';
import ItemCardShimmer from '../components/ItemCardShimmer';

const ProductCategory = () => {
  const dispatch = useDispatch();
  const { id, name } = useParams();

  const listProducts = async (categoryName, id) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    dispatch(addItems({ categoryIndex: id, items: response.data.meals }))
  }

  const getCategoriesFromProductPage = async () => {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    dispatch(addProducts((response.data.categories)));
  };

  const categories = useSelector(state => state.products.products);
  const products = useSelector(state => state.products.products)?.find((el) => el.id == id)?.items;

  useEffect(() => {
    if (products && products.length === 0 && categories.length !== 0) {
      listProducts(name, id);
    }
    if (categories.length === 0) {
      getCategoriesFromProductPage()
      listProducts(name, id);
    }
  }, [])

  let arr = Array.from(Array(8));

  return (
    <div className='container'>
      <div className='mt-4'>
        <BackBtn />
      </div>
      <div className='row mt-5'>
        {
          products && products.length > 0 ? products?.map((el) => {
            return <div className='col-md-3' key={el.id}><ItemCard item={el} categoryId={id} /></div>
          }) : arr.map((el) => { return <div className='col-md-3'> <ItemCardShimmer /> </div> })
        }
      </div>
    </div>
  )
}

export default ProductCategory;