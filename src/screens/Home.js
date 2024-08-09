import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import axios from 'axios';
import { addProducts } from '../utils/slices/productSlice';
import CategoryShimmer from '../components/CategoryShimmer';


const Home = () => {

    const dispatch = useDispatch();

    const getCategories = async () => {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        dispatch(addProducts((response.data.categories)));
    };

    const productCategories = useSelector(state => state.products.products);

    useEffect(() => {
        if (productCategories && productCategories.length === 0) {
            getCategories();
        }
    }, []);

    let arr = Array.from(Array(8));

    return <div className='container'>
        <div className='row mt-5'>
            {
                productCategories && productCategories.length > 0 ? productCategories.map((el, index) => {
                    return <div key={el.id} className='col-md-3 col-sm-8 ps-3 pe-3'>
                        <Link to={`/category/${el.id}/${el.category}`}>
                            <CategoryCard item={el} />
                        </Link>
                    </div>
                }) : arr.map((el) => { return <div className='col-md-3 col-sm-8 ps-3 pe-3'> <CategoryShimmer /> </div> })
            }
        </div>
    </div>
}

export default Home