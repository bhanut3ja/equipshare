import React from 'react'
import { Link } from "react-router-dom";
import './Slider.css'

const Slider = () => {
    return (
        <>
            <div className="Slider">
                <div className="Topic d-flex flex-wrap justify-content-center">
                    <Link className='Slider-links' to='/Rental'>Order Summary</Link>
                    <Link className='Slider-links' to='/Rental/LendingRequest'>Lending Request</Link>
                    <Link className='Slider-links' to='/Rental/BorrowingRequest'>Borrowing Request</Link>
                    <Link className='Slider-links' to='/Rental/Notification/Acceptance'>Notification</Link>
                </div>
            </div>
        </>
    )
}

export default Slider