import React from 'react'
import '../Equipment.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const EquipmentEngineSummaryTab = () => {
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

            <div className="equipment-engine-component">
              <div className="engine-all-tabs">
                <Link className='engine-tab' to="/EquipmentEngineGeneralTab">General</Link>
                <Link className='engine-tab' to="/EquipmentEngineOilTab">Oil</Link>
                <Link className='engine-tab' to="/EquipmentEngineOBDTab">OBD-II</Link>
                <Link className='engine-tab' to="/EquipmentEngineFilterTab">Filter</Link>
                <Link className='engine-tab' style={{ background: 'grey', color: 'white', paddingTop: '10px' }} to="/EquipmentEngineSummaryTab">Tire Summary</Link>
              </div>

              <div className="summary-table">
                <Table striped bordered hover className="mb-0" style={{ fontSize: '13px' }}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Tire Number</th>
                      <th>Tire Location</th>
                      <th>Date of Pronouncement</th>
                      <th>KMs Run</th>
                      <th>Puncture</th>
                      <th>Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>XXX-ASD-XX-S</td>
                      <td>Location</td>
                      <td>10/03/2018</td>
                      <td>50</td>
                      <td>Yes</td>
                      <td>Good</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>XXX-ASD-XX-S</td>
                      <td>Location</td>
                      <td>10/03/2018</td>
                      <td>50</td>
                      <td>Yes</td>
                      <td>Good</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>XXX-ASD-XX-S</td>
                      <td>Location</td>
                      <td>10/03/2018</td>
                      <td>50</td>
                      <td>Yes</td>
                      <td>Good</td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>XXX-ASD-XX-S</td>
                      <td>Location</td>
                      <td>10/03/2018</td>
                      <td>50</td>
                      <td>Yes</td>
                      <td>Good</td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>XXX-ASD-XX-S</td>
                      <td>Location</td>
                      <td>10/03/2018</td>
                      <td>50</td>
                      <td>Yes</td>
                      <td>Good</td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>XXX-ASD-XX-S</td>
                      <td>Location</td>
                      <td>10/03/2018</td>
                      <td>50</td>
                      <td>Yes</td>
                      <td>Good</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EquipmentEngineSummaryTab
