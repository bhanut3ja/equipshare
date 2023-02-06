import React from "react";
import SiteNavbar from "./SiteNavbar";
import Slider from "./Slider";
import './SiteNameTable.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SiteNameTable = () => {

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 }
    ]
    return (
        <>
        <div className="SiteTable">
            <SiteNavbar />
            <Slider />
            {/* selecter components */}
            <div className="SiteSelects">
                <div className="SiteSelect">
                    <div className="Title">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 210 }}
                            renderInput={(params) => <TextField {...params} color="grey" label= "Search by filter" size="small" />}
                        />
                    </div>
                    <div className="SitePresenter">
                        <button>Add Site</button>
                        <button>Add User</button>
                    </div>
                </div>
            </div>
            {/* table component */}
            <div>
                <div className="SiteNameTable">


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
            </div>
        </>
    )
}
export default SiteNameTable;