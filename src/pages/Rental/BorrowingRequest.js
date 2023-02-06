import React from 'react'
import './BorrowingRequest.css'
import Header from "./Header";
import Slider from "./Slider";

const BorrowingRequest = () => {
    return (
        <>
            <div>
                <Header />
            </div>

            <div className="container">
                <Slider />
            </div>

            BorrowingRequest
        </>
    )
}

export default BorrowingRequest