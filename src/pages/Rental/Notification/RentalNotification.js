import React from 'react'
import './RentalNotification.css'
import Header from "../Header";
import Slider from "../Slider";
import NotificationSlider from './NotificationSlider';

const RentalNotification = () => {
    return (
        <>
            <div>
                <Header />
            </div>

            <div className="container">
                <Slider />
            </div>

            <NotificationSlider />

            <div className='container notification-container'>
                <div className="row d-flex flex-wrap">
                    <div className="col">

                        <div className="UserNameTable">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="number" scope="col"></th>
                                        <th className="th" scope="col">Borrowing ID</th>
                                        <th className="th" scope="col">Date</th>
                                        <th className="th" scope="col">Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="number" scope="row"><input type='checkbox' /> </th>
                                        <td className="th">XXXXX</td>
                                        <td className="th">11/01/2023</td>
                                        <td className="th">5200</td>

                                    </tr>
                                    <tr>
                                        <th className="number" scope="row"><input type='checkbox' /> </th>
                                        <td className="th">XXXXX</td>
                                        <td className="th">11/01/2023</td>
                                        <td className="th">5200</td>

                                    </tr>
                                    <tr>
                                        <th className="number" scope="row"><input type='checkbox' /> </th>
                                        <td className="th">XXXXX</td>
                                        <td className="th">11/01/2023</td>
                                        <td className="th">5200</td>
                                    </tr>
                                    <tr>
                                        <th className="number" scope="row"><input type='checkbox' /> </th>
                                        <td className="th"></td>
                                        <td className="th"></td>
                                        <td className="th"></td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="text-center mt-1">
                                <button className=" button-check">Accept</button>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="UserNameTable">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="number" scope="col"></th>
                                        <th className="th" scope="col">Lending ID</th>
                                        <th className="th" scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="number" scope="row"><input type='checkbox' /> </th>
                                        <td className="th">XXXXX</td>
                                        <td className="th">11/01/2023</td>

                                    </tr>
                                    <tr>
                                        <th className="number" scope="row"><input type='checkbox' /> </th>
                                        <td className="th">XXXXX</td>
                                        <td className="th">11/01/2023</td>

                                    </tr>
                                    <tr>
                                        <th className="number" scope="row"><input type='checkbox' /> </th>
                                        <td className="th">XXXXX</td>
                                        <td className="th">11/01/2023</td>
                                    </tr>
                                    <tr>
                                        <th className="number" scope="row"><input type='checkbox' /> </th>
                                        <td className="th"></td>
                                        <td className="th"></td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="text-center mt-1">
                                <button className=" button-check">Reject</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-5 mb-2'>
                <div className="row d-flex flex-wrap">
                    <div className="col">
                    </div>

                    <div className="col reject-container">
                        <span style={{"fontWeight":"600"}}>Reason for Rejecting request.</span>
                        <div className='d-flex justify-content-around mt-3'>
                            <div>
                                <input type='checkbox' />
                                <label className='m-1'>Not Available</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                <label className='m-1'>Breakdown Used</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                <label className='m-1'>Rematch</label>
                            </div>
                        </div>

                        <div class="form-floating mt-3">
                            <textarea class="form-control" placeholder="enter description"  ></textarea>
                        </div>

                        <div className="d-flex justify-content-center text-center mt-4">
                            <button className="button-check">Cancel</button>
                            <button className="button-check">Submit</button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default RentalNotification