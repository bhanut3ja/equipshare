import React from 'react'
import '../Equipment.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import DatePicker from "react-datepicker";

const EquipmentFuelTab = () => {
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

                        <div className="fuel-component">
                            <div className="inputs-component">
                                <div className="input-dropdown">
                                    <p className="dlabel">Select:</p>
                                    <select name="" id="" className="fuel-dropdown">
                                        <option value="Oil Issued">Oil Issued</option>
                                        <option value="Oil Issued">Oil Issued</option>
                                        <option value="Oil Issued">Oil Issued</option>
                                        <option value="Oil Issued">Oil Issued</option>
                                    </select>
                                </div>

                                <div className="input-date d-flex flex-row">
                                    <label htmlFor="" className="dlabel">Date:</label>
                                    <DatePicker className='fuel-date' placeholderText='fromdate' />
                                    -
                                    <DatePicker className='fuel-date' placeholderText='todate' />
                                </div>

                                <button className="fuel-button">Get Details</button>
                            </div>

                            <div className="fuel-table">
                                <Table striped bordered hover className="mb-0">
                                    <thead>
                                        <tr>
                                            <th>Last Issued On</th>
                                            <th>Level</th>
                                            <th>Opration Done</th>
                                            <th>New Fule Issue</th>
                                            <th>Fule Rate (inr)</th>
                                            <th>Invoice No.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>10/03/2017</td>
                                            <td>Previous Data</td>
                                            <td>Previous Data</td>
                                            <td>50 litres</td>
                                            <td>72rs / per liter</td>
                                            <td>54864</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                            <div className="bottom-component">
                                <div className="bottom-content">
                                    <div className="type-date-rate">
                                        <div className="bottom-first-fields">
                                            <span>Fuel Type:</span>
                                            <select name="" id="" className="field-type">
                                                <option value="type">type(Fuel, Oil, Hydrolic Oil)</option>
                                                <option value="type">type(Fuel, Oil, Hydrolic Oil)</option>
                                                <option value="type">type(Fuel, Oil, Hydrolic Oil)</option>
                                            </select>
                                            <span>Issue Date:</span>
                                            <input type="date" className="field-date" placeholder='new fuel' />
                                            {/* <DatePicker className="field-date" placeholderText='fromdate' /> */}
                                            <span>Fuel Rate:</span>
                                            <input type="text" className="field-rate" placeholder='price' />
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <div className="level-issue-invoice">
                                            <div className="bottom-second-fields">
                                                <span>Current Level:</span>
                                                <input type="text" className="field-level" placeholder='level' />
                                                <span>New Issue:</span>
                                                <input type="text" className="field-issue" placeholder='new fuel' />
                                                <span>Reference No:</span>
                                                <input type="text" className="field-invoice" placeholder='enter no' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="bottom-submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EquipmentFuelTab
