import React from 'react'
import ReportSlider from './ReportSlider'
import './ReportJobSite.css'

const ReportJobSite = () => {
    return (
        <div>
            <div className='container'>
                <ReportSlider />
            </div>

            <div className="container d-flex flex-wrap justify-content-between mt-4">
                <div>
                    <select className="report-select" aria-label=".form-select-lg example">
                        <option selected>select site</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div >
                    <button className='button-check'>Export to CSV</button>
                    <button className='button-check'>Print Report</button>
                </div>
            </div>


            <div className='container mt-3 mb-3'>
                <div className="UserNameTable">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="number" scope="col">#Code</th>
                                <th className="th" scope="col">Image</th>
                                <th className="th" scope="col">Equipments</th>
                                <th className="th" scope="col">Equipment at Site</th>
                                <th className="th" scope="col">Idle %</th>
                                <th className="th" scope="col">Utilization %</th>
                                <th className="th" scope="col">Last Used</th>
                                <th className="th" scope="col">Current Status</th>
                                <th className="th" scope="col">cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="number" scope="row">02222</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Fitted Garder</td>
                                <td className="th">10 days</td>
                                <td className="th">40%</td>
                                <td className="th">60%</td>
                                <td className="th">4 hours</td>
                                <td className="th">Available</td>
                                <td className="th">450000</td>
                            </tr>
                            <tr>
                                <th className="number" scope="row">02222</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Excavtor</td>
                                <td className="th">10 days</td>
                                <td className="th">40%</td>
                                <td className="th">60%</td>
                                <td className="th">4 hours</td>
                                <td className="th">Available</td>
                                <td className="th">450000</td>
                            </tr>
                            <tr>
                                <th className="number" scope="row">011111</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Dozer</td>
                                <td className="th">10 days</td>
                                <td className="th">40%</td>
                                <td className="th">60%</td>
                                <td className="th">4 hours</td>
                                <td className="th">Available</td>
                                <td className="th">450000</td>
                            </tr>
                            <tr>
                                <th className="number" scope="row">011111</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Crawler Drill</td>
                                <td className="th">10 days</td>
                                <td className="th">40%</td>
                                <td className="th">60%</td>
                                <td className="th">4 hours</td>
                                <td className="th">Available</td>
                                <td className="th">450000</td>
                            </tr>
                            <tr>
                                <th className="number" scope="row">011111</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Fitted Garder</td>
                                <td className="th">10 days</td>
                                <td className="th">40%</td>
                                <td className="th">60%</td>
                                <td className="th">4 hours</td>
                                <td className="th">Available</td>
                                <td className="th">450000</td>
                            </tr>
                            <tr>
                                <th className="number" scope="row">011111</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Dozer</td>
                                <td className="th">10 days</td>
                                <td className="th">40%</td>
                                <td className="th">60%</td>
                                <td className="th">4 hours</td>
                                <td className="th">Available</td>
                                <td className="th">450000</td>
                            </tr>
                            <tr>
                                <th className="number" scope="row">011111</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Crawler Drill</td>
                                <td className="th">10 days</td>
                                <td className="th">40%</td>
                                <td className="th">60%</td>
                                <td className="th">4 hours</td>
                                <td className="th">Available</td>
                                <td className="th">450000</td>
                            </tr>
                            <tr>
                                <th className="number" scope="row">011111</th>
                                <td className="th">
                                    <img src="" placeholder="image" />
                                </td>
                                <td className="th">Crawler Drill</td>
                                <td className="th">10 days</td>
                                <td className="th">40%</td>
                                <td className="th">60%</td>
                                <td className="th">4 hours</td>
                                <td className="th">Available</td>
                                <td className="th">450000</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ReportJobSite