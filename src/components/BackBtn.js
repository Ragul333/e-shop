import React from 'react'
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    return (
        <>
            <button className='btn btn-light-outline back-btn' onClick={() => goBack()}>
                <span className='back'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>
                </span>
                <span>
                    Back
                </span>
            </button>
        </>
    )
}

export default BackBtn