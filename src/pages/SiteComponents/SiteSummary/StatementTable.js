import React from "react";
import './StatementTable.css';
 

const StatementTable = () => {

     
    return (
        <div>
            <div className="StatementTable">


                <table className="table">
                    <thead>
                        <tr>
                            <th className="number" scope="col">#</th>
                            <th className="th" scope="col">Equipment</th>
                            <th className="th" scope="col">Credit</th>
                            <th className="th" scope="col">Debit</th>
                            <th className="th" scope="col">Balance</th>
                             
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="number" scope="row">1</th>
                            <td className="th">fitted Garder</td>
                            <td className="th">100</td>
                            <td className="th">00</td>
                            <td className="th">1100</td>
                            

                        </tr>
                        <tr>
                            <th className="number" scope="row">2</th>
                            <td className="th">Excavator</td>
                            <td className="th">00</td>
                            <td className="th">100</td>
                            <td className="th">1000</td>
                             
                             

                        </tr>
                        <tr>
                            <th className="number" scope="row">3</th>
                            <td className="th">Dozer</td>
                            <td className="th">100</td>
                            <td className="th">00</td>
                            <td className="th">100</td>
                            

                        </tr>
                        <tr>
                            <th className="number" scope="row">4</th>
                            <td className="th">Crawler Dril</td>
                            <td className="th">00</td>
                            <td className="th">80</td>
                            <td className="th">880</td>
                             
                            

                        </tr>
                        <tr>
                            <th className="number" scope="row">5</th>
                            <td className="th">Excavator</td>
                            <td className="th">00</td>
                            <td className="th">100</td>
                            <td className="th">1000</td>
                            

                        </tr>
                        <tr>
                            <th className="number" scope="row">6</th>
                            <td className="th">Dozer</td>
                            <td className="th">100</td>
                            <td className="th">00</td>
                            <td className="th">100</td>
                             

                        </tr>
                        

                    </tbody>
                </table>


            </div>
            
        </div>
    )
}
export default StatementTable;