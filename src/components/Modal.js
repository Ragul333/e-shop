import React from 'react'


const Modal = ({ orderPlaced, showModal }) => {
    return (
        <div className="container">
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center modal-success">
                                {orderPlaced && (
                                    <div>
                                        <div className="checkmark-animation">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="50"
                                                height="50"
                                                fill="green"
                                                className="bi bi-check-circle"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02l-1.992-2.5a.75.75 0 1 1 1.13-.98l1.538 1.923 3.382-4.23z" />
                                                <path d="M16 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0zM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14z" />
                                            </svg>
                                        </div>
                                        <h4 className="mt-3">Order Placed Successfully!</h4>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal;
