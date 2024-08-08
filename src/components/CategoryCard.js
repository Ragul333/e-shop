import React from 'react'

const CategoryCard = ({ item }) => {
    return (
        <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: "18rem", cursor: 'pointer' }}>
            <img src={item.image} className="card-img-top product-image" alt={item.category} />
            <div className="card-body">
                <h5 className="card-title text-center">{item.category}</h5>
            </div>
        </div>
    )
}

export default CategoryCard