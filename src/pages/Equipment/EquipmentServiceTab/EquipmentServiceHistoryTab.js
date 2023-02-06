import React from 'react'
import '../Equipment.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const EquipmentServiceHistoryTab = () => {
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
                                <Link to="/EquipmentServiceHistoryTab" style={{ background: 'gray', color: 'white' }} className='service-links'>History</Link>
                                <Link to="/EquipmentServiceRequestTab" className='service-links'>Urgent Request</Link>
                            </div>

                            <div className="service-upcoming-tables" style={{ marginTop: '20px', border: '0.5px solid #a8a7a7', padding: '10px' }}>
                                <Table striped bordered hover className="mb-0" style={{ fontSize: '13px' }}>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Service No.</th>
                                            <th>Description</th>
                                            <th>Price(Unpaid)</th>
                                            <th>Attachments</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>10/03/2017</td>
                                            <td style={{ textDecoration: 'underline' }}>54986</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                            <td>XXXXX</td>
                                            <td><i class="fa fa-download" aria-hidden="true"></i>PDF</td>
                                        </tr>
                                        <tr>
                                            <td>10/03/2017</td>
                                            <td style={{ textDecoration: 'underline' }}>54986</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                            <td>XXXXX</td>
                                            <td><i class="fa fa-download" aria-hidden="true"></i>PDF</td>
                                        </tr>
                                        <tr>
                                            <td>10/03/2017</td>
                                            <td style={{ textDecoration: 'underline' }}>54986</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                            <td>XXXXX</td>
                                            <td><i class="fa fa-download" aria-hidden="true"></i>PDF</td>
                                        </tr>
                                        <tr>
                                            <td>10/03/2017</td>
                                            <td style={{ textDecoration: 'underline' }}>54986</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                            <td>XXXXX</td>
                                            <td><i class="fa fa-download" aria-hidden="true"></i>PDF</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Table striped bordered hover className="mb-0" style={{ fontSize: '13px', marginTop: '20px' }}>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Service No.</th>
                                            <th>Description</th>
                                            <th>Price(Unpaid)</th>
                                            <th>Attachments</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>10/03/2017</td>
                                            <td style={{ textDecoration: 'underline' }}>54986</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                            <td>XXXXX</td>
                                            <td><i class="fa fa-download" aria-hidden="true"></i>PDF</td>
                                        </tr>
                                        <tr>
                                            <td>10/03/2017</td>
                                            <td style={{ textDecoration: 'underline' }}>54986</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                            <td>XXXXX</td>
                                            <td><i class="fa fa-download" aria-hidden="true"></i>PDF</td>
                                        </tr>
                                        <tr>
                                            <td>10/03/2017</td>
                                            <td style={{ textDecoration: 'underline' }}>54986</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                            <td>XXXXX</td>
                                            <td><i class="fa fa-download" aria-hidden="true"></i>PDF</td>
                                        </tr>
                                        <tr>
                                            <td>10/03/2017</td>
                                            <td style={{ textDecoration: 'underline' }}>54986</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                            <td>XXXXX</td>
                                            <td><i class="fa fa-download" aria-hidden="true"></i>PDF</td>
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

export default EquipmentServiceHistoryTab
