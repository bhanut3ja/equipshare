import React from 'react'
import { Link } from 'react-router-dom'
import './NotificationSlider.css'

const NotificationSlider = () => {
    return (
        <div>
            <div className='container d-flex justify-content-start mt-4'>
                <Link to='/Rental/Notification/Acceptance' >
                    <label className='notification-tabs'>Acceptance</label>
                </Link>
                <Link to='/Rental/Notification/Cancellation'>
                    <label className='notification-tabs'>Cancellation</label>
                </Link>
                <Link to='/Rental/Notification/CheckList-Form'>
                    <label className='notification-tabs'>Checklist Form</label>
                </Link>
                <Link to='/Rental/Notification/Dispatch'>
                    <label className='notification-tabs'>Dispatch & Scheduling</label>
                </Link>
            </div>
        </div>
    )
}

export default NotificationSlider