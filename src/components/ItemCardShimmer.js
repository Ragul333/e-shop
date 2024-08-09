import React from 'react'

const ItemCardShimmer = () => {
    return (
        <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: "18rem", cursor: 'pointer' }}>
            <div className='shimmer-image'></div>
            <div className="card-body"></div>
            <div className="card-body"></div>
            <div className="card-body"></div>
        </div>
    )
}

export default ItemCardShimmer