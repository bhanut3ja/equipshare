import React from 'react'
import './ReportSlider.css'
import { Link } from 'react-router-dom'
import ReportHeader from './ReportHeader'

const ReportSlider = () => {
    return (
        <>
            <div>
                <ReportHeader />
            </div>

            <div className="Slider">
                <div className="Topic d-flex flex-wrap justify-content-center">
                    <Link className='Slider-links' to='/Reports'>Driver Scorecard</Link>
                    <Link className='Slider-links' to='/Reports/Utilization'>Utilization</Link>
                    <Link className='Slider-links' to='/Reports/Jobsite'>Jobsite Usage</Link>
                    <Link className='Slider-links' to='/Reports/FuelConsumption'>Fuel Consumption</Link>
                    <Link className='Slider-links' to='/Reports/Maintenance'>Maintenance</Link>
                    <Link className='Slider-links' to='/Reports/MapView'>Map View</Link>
                </div>
            </div>
        </>
    )
}

export default ReportSlider