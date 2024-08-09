import React from 'react'

const CategoryShimmer = () => {
    return (
        <div className="card p-3 mb-5 bg-body rounded shimmer-card" style={{ width: "18rem", cursor: 'pointer' }}>
            <div className='shimmer-image'></div>
            <div className="card-body"></div>
            <div className="card-body"></div>
        </div>
    )
}

export default CategoryShimmer