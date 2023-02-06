import React from 'react'
import '../Equipment.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const EquipmentTripTab = () => {
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

            <div className="trip-table">
              <Table responsive>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Hours Operation</th>
                    <th>Trips</th>
                    <th>Idle Engine Running</th>
                    <th>Run Time with Load</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10/03/2017</td>
                    <td>4 hours</td>
                    <td>2 trips</td>
                    <td>Data</td>
                    <td>Data</td>
                  </tr>
                  <tr>
                    <td>10/03/2017</td>
                    <td>4 hours</td>
                    <td>2 trips</td>
                    <td>Data</td>
                    <td>Data</td>
                  </tr>
                  <tr>
                    <td>10/03/2017</td>
                    <td>4 hours</td>
                    <td>2 trips</td>
                    <td>Data</td>
                    <td>Data</td>
                  </tr>
                  <tr>
                    <td>10/03/2017</td>
                    <td>4 hours</td>
                    <td>2 trips</td>
                    <td>Data</td>
                    <td>Data</td>
                  </tr>
                  <tr>
                    <td>10/03/2017</td>
                    <td>4 hours</td>
                    <td>2 trips</td>
                    <td>Data</td>
                    <td>Data</td>
                  </tr>
                  <tr>
                    <td>10/03/2017</td>
                    <td>4 hours</td>
                    <td>2 trips</td>
                    <td>Data</td>
                    <td>Data</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EquipmentTripTab
