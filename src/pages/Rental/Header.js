import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="container d-flex justify-content-between" style={{marginTop:'60px'}}>
                <Link to="#" className="Rental-brand" >Rental</Link>
                <div>
                    <Link className="Rental-links" to="/Dashboard">Home</Link> / 
                    <Link className="Rental-links" to="#"> Library</Link>
                </div>
            </div>
            <hr/>
        </div>
        
    )
}

export default Header