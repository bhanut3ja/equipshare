import React from "react";
import './GeofenceTable.css';


const GeofenceTable = () => {


    return (
        <div>
            <div className="GeofenceTable">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="number" scope="col">#</th>
                            <th className="th" scope="col">Equipment Name</th>
                            <th className="th" scope="col">Geofence</th>
                            <th className="th" scope="col">Timeframe Delay</th>
                            <th className="th" scope="col">Avg. Delay Time</th>
                            <th className="th" scope="col">Equipment Usage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="number" scope="row">01</th>
                            <td className="th">Equipment Name</td>
                            <td className="th">Geofence</td>
                            <td className="th">100</td>
                            <td className="th">00</td>
                            <td className="th">1100</td>
                        </tr>
                        <tr>
                            <th className="number" scope="row">02</th>
                            <td className="th">Equipment Name</td>
                            <td className="th">Geofence</td>
                            <td className="th">00</td>
                            <td className="th">100</td>
                            <td className="th">1000</td>
                        </tr>
                        <tr>
                            <th className="number" scope="row">03</th>
                            <td className="th">Equipment Name</td>
                            <td className="th">Geofence</td>
                            <td className="th">100</td>
                            <td className="th">00</td>
                            <td className="th">100</td>
                        </tr>
                        <tr>
                            <th className="number" scope="row">04</th>
                            <td className="th">Equipment Name</td>
                            <td className="th">Geofence</td>
                            <td className="th">00</td>
                            <td className="th">120</td>
                            <td className="th">880</td>
                        </tr>
                        <tr>
                            <th className="number" scope="row">05</th>
                            <td className="th">Equipment Name</td>
                            <td className="th">Geofence</td>
                            <td className="th">00</td>
                            <td className="th">80</td>
                            <td className="th">792</td>
                        </tr>
                        <tr>
                            <th className="number" scope="row">06</th>
                            <td className="th">Equipment Name</td>
                            <td className="th">Geofence</td>
                            <td className="th">100</td>
                            <td className="th">00</td>
                            <td className="th">892</td>
                        </tr>


                    </tbody>
                </table>


            </div>

        </div>
    )
}
export default GeofenceTable;