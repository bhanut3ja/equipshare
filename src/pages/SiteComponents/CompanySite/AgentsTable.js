import React from "react";
import './AgentsTable.css';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const AgentsTable = () => {

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
        <div>
            <div className="AgentsTable">


                <table className="table">
                    <thead>
                        <tr>
                            <th className="number" scope="col">#</th>
                            <th className="th" scope="col">Agents</th>
                            <th className="th" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="number" scope="row">1</th>
                            <td className="th">Mark</td>
                            <td className="th">Remove</td>

                        </tr>
                        <tr>
                            <th className="number" scope="row">2</th>
                            <td className="th">Jacob</td>
                            <td className="th">Remove</td>

                        </tr>

                    </tbody>
                </table>


            </div>
            <div className="selecter">
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    color="grey"
                    sx={{ width: 250 }}
                    options={top100Films}
                    renderInput={(params) => <TextField {...params} color="grey" label="Select Agents" size="small" />}
                />
                <button className="btn">Add More</button>
            </div>
        </div>
    )
}
export default AgentsTable;