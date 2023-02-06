import React from "react";
import './EquipmentTable.css';
 

const EquipmentTable = () => {

     
    return (
        <div>
            <div className="EquipmentTable">


                <table className="table">
                    <thead>
                        <tr>
                            <th className="number" scope="col">#</th>
                            <th className="th" scope="col">Name</th>
                            <th className="th" scope="col">Menufacturer</th>
                            <th className="th" scope="col">Year</th>
                            <th className="th" scope="col">Modal</th>
                            <th className="th" scope="col">Serial No.</th>
                            <th className="th" scope="col">Effciency</th>
                            <th className="th" scope="col">Fuel Consumption</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="number" scope="row">1</th>
                            <td className="th">Fitted Garder </td>
                            <td className="th">Manufacturername</td>
                            <td className="th">2015</td>
                            <td className="th">12345</td>
                            <td className="th">EDH 45 J</td>
                            <td className="th">Efficency per hour</td>
                            <td className="th">10 gallons/ per hour</td>

                        </tr>
                        <tr>
                            <th className="number" scope="row">2</th>
                            <td className="th">Excavator</td>
                            <td className="th">Manufacturername</td>
                            <td className="th">2015</td>
                            <td className="th">12345</td>
                            <td className="th">JHA 85</td>
                            <td className="th">Efficency per hour</td>
                            <td className="th">10 gallons/ per hour</td>
                             

                        </tr>
                        <tr>
                            <th className="number" scope="row">3</th>
                            <td className="th">Dozar</td>
                            <td className="th">Manufacturername</td>
                            <td className="th">2015</td>
                            <td className="th">12345</td>
                            <td className="th">EDH 985</td>
                            <td className="th">Efficency per hour</td>
                            <td className="th">10 gallons/ per hour</td>

                        </tr>
                        <tr>
                            <th className="number" scope="row">4</th>
                            <td className="th">Crawler Dril</td>
                            <td className="th">Manufacturername</td>
                            <td className="th">2015</td>
                            <td className="th">12345</td>
                            <td className="th">UHU 566</td>
                            <td className="th">Efficency per hour</td>
                            <td className="th">10 gallons/ per hour</td>
                            

                        </tr>
                        <tr>
                            <th className="number" scope="row">5</th>
                            <td className="th">Dozer</td>
                            <td className="th">Manufacturername</td>
                            <td className="th">2015</td>
                            <td className="th">12345</td>
                            <td className="th">JHA85</td>
                            <td className="th">Efficency per hour</td>
                            <td className="th">10 gallons/ per hour</td>

                        </tr>
                        <tr>
                            <th className="number" scope="row">6</th>
                            <td className="th">Excavator</td>
                            <td className="th">Manufacturername</td>
                            <td className="th">2015</td>
                            <td className="th">12345</td>
                            <td className="th">EDH 985</td>
                            <td className="th">Efficency per hour</td>
                            <td className="th">10 gallons/ per hour</td>

                        </tr>
                        

                    </tbody>
                </table>


            </div>
            
        </div>
    )
}
export default EquipmentTable;