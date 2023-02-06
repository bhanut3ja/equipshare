import React from 'react'
import './NewLendingRequest.css'
import Header from "./Header";
import Slider from "./Slider";

const NewLendingRequest = () => {
    return (
        <>
            <div>
                <Header />
            </div>

            <div className="container">
                <Slider />
            </div>

            {/* Lending Request Form  */}
            <div className='container mt-4 mb-4 cancelling-container'>
                <div className="py-2 row w-50 m-auto d-flex justify-content-center align-items-center ">
                    <div className='d-flex mt-3'>
                        <p className="col-5 m-0 Lending-text">Category:</p>
                        <select className="col-6 p-1 px-2 select-request">
                            <option selected>select category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='d-flex mt-3'>
                        <p className="col-5 m-0 Lending-text">Site:</p>
                        <select className="col-6 p-1 px-2 select-request">
                            <option selected>select list</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='d-flex mt-3'>
                        <p className="col-5 m-0 Lending-text">Subcategory:</p>
                        <select className="col-6 p-1 px-2 select-request">
                            <option selected>select subcategory</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className='d-flex mt-3'>
                        <p className="col-5 m-0 Lending-text">Equipment:</p>
                        <select className="col-6 p-1 px-2 select-request">
                            <option selected>select equipment</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <button className=" button-check">Check Dates</button>
                </div>
            </div>

            <hr />


            {/*Generated Calendar */}
            <div className='container Calendar-container'>
                <div className="toolbar">
                    <div className="current-month">January 2023</div>
                    <div className="month">
                        <button className='month-button'>Previous</button>
                        <span className='month-text'>Month</span>
                        <button className='month-button'>Next</button>
                    </div>
                </div>
                <div className="calendar mt-3">
                    <table className="table table-bordered mb-0" >
                        <thead>
                            <tr>
                                <th className="calendar__header">
                                    <tr>mon</tr>
                                    <tr>tue</tr>
                                    <tr>wed</tr>
                                    <tr>thu</tr>
                                    <tr>fri</tr>
                                    <tr>sat</tr>
                                    <tr>sun</tr>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="calendar__week">
                                <td className="calendar__day day">1</td>
                                <td className="calendar__day day">2</td>
                                <td className="calendar__day day">3</td>
                                <td className="calendar__day day">4</td>
                                <td className="calendar__day day">5</td>
                                <td className="calendar__day day">6</td>
                                <td className="calendar__day day">7</td>
                            </tr>
                            <tr className="calendar__week">
                                <td className="calendar__day day">8</td>
                                <td className="calendar__day day">9</td>
                                <td className="calendar__day day">10</td>
                                <td className="calendar__day day">11</td>
                                <td className="calendar__day day">12</td>
                                <td className="calendar__day day">13</td>
                                <td className="calendar__day day">14</td>
                            </tr>
                            <tr className="calendar__week">
                                <td className="calendar__day day">15</td>
                                <td className="calendar__day day">16</td>
                                <td className="calendar__day day">17</td>
                                <td className="calendar__day day">18</td>
                                <td className="calendar__day day">19</td>
                                <td className="calendar__day day">20</td>
                                <td className="calendar__day day">21</td>
                            </tr>
                            <tr className="calendar__week">
                                <td className="calendar__day day">22</td>
                                <td className="calendar__day day">23</td>
                                <td className="calendar__day day">24</td>
                                <td className="calendar__day day">25</td>
                                <td className="calendar__day day">26</td>
                                <td className="calendar__day day">27</td>
                                <td className="calendar__day day">28</td>
                            </tr>
                            <tr className="calendar__week">
                                <td className="calendar__day day">29</td>
                                <td className="calendar__day day">30</td>
                                <td className="calendar__day day">31</td>
                                <td className="calendar__day day">1</td>
                                <td className="calendar__day day">2</td>
                                <td className="calendar__day day">3</td>
                                <td className="calendar__day day">4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <hr />

            {/* Date Selection Form */}
            <div className='container mt-2 mb-2'>
                <div className='container mt-4 mb-4 cancelling-container'>
                    <label className='Lending-text mb-3 text-start'>Select Date:   11/01/2023   -   15/01/2023</label>
                    <div className="py-2 row w-50 m-auto d-flex justify-content-center align-items-center">
                        <div className='d-flex mt-3'>
                            <p className="col-5 m-0 Lending-text">SPOC:</p>
                            <select className="col-6 p-1 px-2 select-request">
                                <option selected>select user</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='d-flex mt-3'>
                            <p className="col-5 m-0 Lending-text">Contact Number:</p>
                            <select className="col-6 p-1 px-2 select-request">
                                <option selected>enter number</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='d-flex mt-3'>
                            <p className="col-5 m-0 Lending-text">Rent By:</p>
                            <select className="col-6 p-1 px-2 select-request">
                                <option selected>hourly</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className='d-flex mt-3'>
                            <p className="col-5 m-0 Lending-text">Rental Rate:</p>
                            <select className="col-6 p-1 px-2 select-request">
                                <option selected>enter rate</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button className=" button-check">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewLendingRequest