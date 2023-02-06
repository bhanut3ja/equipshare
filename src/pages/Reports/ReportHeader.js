import React from 'react'
import './ReportHeader.css'
import { Link } from 'react-router-dom'

const ReportHeader = () => {
    return (
        <>
            <div className="container d-flex justify-content-between" style={{marginTop:'60px'}}>
                <Link to="#" className="Rental-brand" >Reports</Link>
                <div>
                    <Link className="Rental-links" to="/Dashboard">Home</Link> /
                    <Link className="Rental-links" to="#"> Reports</Link>
                </div>
            </div>
            <hr />
        </>
    )
}

export default ReportHeader