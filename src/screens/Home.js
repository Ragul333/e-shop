import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';

const Home = () => {
    const productCategories = useSelector(state => state.products.products);

    return <div className='container'>
        <div className='row mt-5'>
            {
                productCategories.map((el,index) => {
                    return <div key={el.id} className='col-md-3 col-sm-8 ps-3 pe-3'>
                        <Link to={`/category/${el.id}`}>
                            <CategoryCard item={el} />
                        </Link>
                    </div>
                })
            }
        </div>
    </div>
}

export default Home