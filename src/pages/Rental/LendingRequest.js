import React from 'react'
import Header from "./Header";
import Slider from "./Slider";
import './LendingRequest.css'
import { Link } from 'react-router-dom';

const LendingRequest = () => {
    return (
        <>
            <div>
                <Header />
            </div>

            <div className="container">
                <Slider />
            </div>

            <div className="container d-flex flex-wrap justify-content-between mt-4">
                <div>
                    <label className='Lending-text'>List of Idle Equipment</label>
                </div>
                <div >
                    <Link to='/Rental/LendingRequest/NewLendingRequest'><button className='button-check'>New Lending Request</button></Link>
                </div>

            </div>

            <div className="container d-flex flex-wrap justify-content-between">
                <div className='mt-2'>
                    <select className="report-select" aria-label=".form-select-lg example">
                        <option selected>search by filter</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className='mt-2'>
                    <select className="report-select" aria-label=".form-select-lg example">
                        <option selected>select category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>



            <div className='container  mt-3'>
                <div className="UserNameTable">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="number" scope="col">#</th>
                                <th className="th" scope="col"></th>
                                <th className="th" scope="col">Name</th>
                                <th className="th" scope="col">Category</th>
                                <th className="th" scope="col">Average Price</th>
                                <th className="th" scope="col">Last updates</th>
                                <th className="th" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="number" scope="row">01</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Fitted Garder</td>
                                <td className="th">Earth Moving Equipments</td>
                                <td className="th">80000 to 300000</td>
                                <td className="th">13/01/2023</td>
                                <td className="th">View</td>
                            </tr>
                            <tr>
                                <th className="number" scope="row">02</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Excavator</td>
                                <td className="th">Aerial Lifts</td>
                                <td className="th">100000 to 250000</td>
                                <td className="th">13/01/2023</td>
                                <td className="th">View</td>
                            </tr>
                            <tr>
                                <th className="number" scope="row">03</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Dozer</td>
                                <td className="th">JCB</td>
                                <td className="th">80000 to 300000</td>
                                <td className="th">13/01/2023</td>
                                <td className="th">View</td>
                            </tr>
                            <tr>
                                <th className="number" scope="row">04</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Crawler Drill</td>
                                <td className="th">Batching Plant</td>
                                <td className="th">950000 to 290000</td>
                                <td className="th">13/01/2023</td>
                                <td className="th">View</td>
                            </tr>
                            <tr>
                                <th className="number" scope="row">05</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Other Equipments</td>
                                <td className="th">Category Name</td>
                                <td className="th">100000 to 150000</td>
                                <td className="th">13/01/2023</td>
                                <td className="th">View</td>
                            </tr>
                            <tr>
                                <th className="number" scope="row">06</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Dozer</td>
                                <td className="th">JCB</td>
                                <td className="th">80000 to 300000</td>
                                <td className="th">13/01/2023</td>
                                <td className="th">View</td>
                            </tr>
                            <tr>
                                <th className="number" scope="row">04</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Crawler Drill</td>
                                <td className="th">Batching Plant</td>
                                <td className="th">950000 to 290000</td>
                                <td className="th">13/01/2023</td>
                                <td className="th">View</td>
                            </tr>
                            <tr>
                                <th className="number" scope="row">08</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Other Equipments</td>
                                <td className="th">Category Name</td>
                                <td className="th">100000 to 150000</td>
                                <td className="th">13/01/2023</td>
                                <td className="th">View</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div className="container d-flex flex-wrap justify-content-between mt-2 mb-3">
                <div>
                    <label className='entries-text'>Showing XX to XX of XXX entries</label>
                </div>

                <div >
                    <nav>
                        <ul class="pagination pagination-sm ">
                            <li class="page-item "><Link class="page-link page-text" href="#">Previous</Link></li>
                            <li class="page-item"><Link class="page-link page-text" href="#">1</Link></li>
                            <li class="page-item"><Link class="page-link page-text" href="#">2</Link></li>
                            <li class="page-item"><Link class="page-link page-text" href="#">3</Link></li>
                            <li class="page-item"><Link class="page-link page-text" href="#">4</Link></li>
                            <li class="page-item"><Link class="page-link page-text" href="#">Next</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default LendingRequest