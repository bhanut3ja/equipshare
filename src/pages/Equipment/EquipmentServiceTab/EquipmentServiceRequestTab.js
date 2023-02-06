import React from 'react'
import '../Equipment.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const EquipmentServiceRequestTab = () => {
  return (
    <>
      <div className="equipment-component">
        <div className="equipment-header">
          <h4 className="equipment-heading">Equipment Details</h4>
          <p className="equipment-routing">Home &gt; Equipments</p>
        </div>

        <div className="equipment-center-component">
          <div className="six-cards-component">
            <div className="search-box">
              <i class="fa fa-search" aria-hidden="true"></i>
              <input type="text" className="input-field" placeholder='Search' />
            </div>

            <div className="equipment-cards">
              <div className="e-card">
                <div className="cardNo-image">
                  <div className="card-image">
                    Image
                  </div>
                  <p className="card-no">XXX-XX-XX</p>
                </div>
                <div className="ecard-content">
                  <h2 className="ecard-name">Equipment Name</h2>
                  <h3 className="ecard-model">Model name / no.</h3>
                  <p className="cont1">Earth Moving Equipments</p>
                  <p className="manu-name">Manufacturer Name</p>
                </div>
              </div>
              <div className="e-card">
                <div className="cardNo-image">
                  <div className="card-image">
                    Image
                  </div>
                  <p className="card-no">XXX-XX-XX</p>
                </div>
                <div className="ecard-content">
                  <h2 className="ecard-name">Equipment Name</h2>
                  <h3 className="ecard-model">Model name / no.</h3>
                  <p className="cont1">Arial Lifts</p>
                  <p className="manu-name">Manufacturer Name</p>
                </div>
              </div>
              <div className="e-card">
                <div className="cardNo-image">
                  <div className="card-image">
                    Image
                  </div>
                  <p className="card-no">XXX-XX-XX</p>
                </div>
                <div className="ecard-content">
                  <h2 className="ecard-name">Equipment Name</h2>
                  <h3 className="ecard-model">Model name / no.</h3>
                  <p className="cont1">JCB</p>
                  <p className="manu-name">Manufacturer Name</p>
                </div>
              </div>
              <div className="e-card">
                <div className="cardNo-image">
                  <div className="card-image">
                    Image
                  </div>
                  <p className="card-no">XXX-XX-XX</p>
                </div>
                <div className="ecard-content">
                  <h2 className="ecard-name">Equipment Name</h2>
                  <h3 className="ecard-model">Model name / no.</h3>
                  <p className="cont1">Batching Plant</p>
                  <p className="manu-name">Manufacturer Name</p>
                </div>
              </div>
              <div className="e-card">
                <div className="cardNo-image">
                  <div className="card-image">
                    Image
                  </div>
                  <p className="card-no">XXX-XX-XX</p>
                </div>
                <div className="ecard-content">
                  <h2 className="ecard-name">Equipment Name</h2>
                  <h3 className="ecard-model">Model name / no.</h3>
                  <p className="cont1">Category Name</p>
                  <p className="manu-name">Manufacturer Name</p>
                </div>
              </div>
              <div className="e-card">
                <div className="cardNo-image">
                  <div className="card-image">
                    Image
                  </div>
                  <p className="card-no">XXX-XX-XX</p>
                </div>
                <div className="ecard-content">
                  <h2 className="ecard-name">Equipment Name</h2>
                  <h3 className="ecard-model">Model name / no.</h3>
                  <p className="cont1">Arial Lifts</p>
                  <p className="manu-name">Manufacturer Name</p>
                </div>
              </div>

            </div>
          </div>

          <div className="equipment-side-content">
          <div className="Slider">
              <div className="Topic d-flex flex-wrap justify-content-center">
                <Link className='Slider-links' to='/Equipment'>Overview</Link>
                <Link className='Slider-links' to="/EquipmentTripTab">Trip</Link>
                <Link className='Slider-links' to="/EquipmentFuelTab" >Fuel Card</Link>
                <Link className='Slider-links' to="/EquipmentServiceTab" >Service</Link>
                <Link className='Slider-links' to="/EquipmentEngineGeneralTab">Engine Status</Link>
                <Link className='Slider-links' to="#" >Dues</Link>
              </div>
            </div>
            <div className="service-component">
              <div className="service-tabs">
                <Link to="/EquipmentServiceTab" className='service-links'>Upcoming</Link>
                <Link to="/EquipmentServiceHistoryTab" className='service-links'>History</Link>
                <Link to="/EquipmentServiceRequestTab" style={{ background: 'gray', color: 'white' }} className='service-links'>Urgent Request</Link>
              </div>

              <div className="service-request-section">
                <div className="request-name">
                  Request: <input type="text" className="request" placeholder='request' />
                  Request Name: <input type="text" className="req-name" placeholder='fullname' />
                </div>

                <div className="mechanic-name">
                  Mechanic Name: <input type="text" className="mech-name" placeholder='fullname' />
                  Mechanic Number: <input type="text" className="mech-no" placeholder='details' />
                </div>

                <div className="serv-desv">
                  Description: <input type="text" className="serv-desc" placeholder='description' />
                </div>

                <div className="serv-radios">
                  Spare Needed:  <input type="radio" className='Yes' name="" id="" /> Yes <input type="radio" className='No' name="" id="" /> No
                </div>

                <input type="text" className="spare-detail" placeholder='sparedetail' /><br />
                <div className="serv-btn">
                  <button className="serv-button">Submit</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EquipmentServiceRequestTab
