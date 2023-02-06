import React from "react";
import SiteNavbar from "../CommenComponents/SiteNavbar";
import Slider from "../CommenComponents/Slider";
import './UserNameTable.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from "react-router-dom";

const UserNameTable = () => {

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
        <div className="UserTables">
            <SiteNavbar />
            <Slider />
            {/* selecter components */}
            <div className="UserSelects">
                <div className="UserSelect">
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
                       <Link to='/AddNewUser'><button>Add User</button></Link>
                    </div>
                </div>
            </div>
            {/* table component */}
            <div className="users">
                <div className="UserNameTable">


                    <table className="table">
                        <thead>
                            <tr>
                                <th className="number" scope="col">#</th>
                                <th className="th" scope="col">User Name</th>
                                <th className="th" scope="col">Email Id</th>
                                <th className="th" scope="col">Contact No.</th>
                                <th className="th" scope="col">User Site</th>
                                <th className="th" scope="col">No. of Requests</th>
                                <th className="th" scope="col">Action</th>
                                 

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="number" scope="row">1</th>
                                <td className="th">Jasmin</td>
                                <td className="th">email@gmail.com</td>
                                <td className="th">XXXXXXXXXX</td>
                                <td className="th">02</td>
                                <td className="th">03</td>
                                <td className="th">
                                <div className="Action"> 
                                <Link to='/Edit' className='Link'><p>View</p></Link>
                                <Link to='/Edit' className='Link'><p>Edit</p></Link>
                                <Link to='/Edit' className='Link'><p>Block</p></Link>
                                </div>
                                </td>
                                 

                            </tr>
                            <tr>
                                <th className="number" scope="row">2</th>
                                <td className="th">Jasmin</td>
                                <td className="th">email@gmail.com</td>
                                <td className="th">XXXXXXXXXX</td>
                                <td className="th">02</td>
                                <td className="th">03</td>
                                <td className="th">
                                <div className="Action"> 
                                <Link to='/Edit' className='Link'><p>View</p></Link>
                                <Link to='/Edit' className='Link'><p>Edit</p></Link>
                                <Link to='/Edit' className='Link'><p>Block</p></Link>
                                </div>
                                </td>


                            </tr>
                            <tr>
                                <th className="number" scope="row">3</th>
                                <td className="th">Jasmin</td>
                                <td className="th">email@gmail.com</td>
                                <td className="th">XXXXXXXXXX</td>
                                <td className="th">02</td>
                                <td className="th">03</td>
                                <td className="th">
                                <div className="Action"> 
                                <Link to='/Edit' className='Link'><p>View</p></Link>
                                <Link to='/Edit' className='Link'><p>Edit</p></Link>
                                <Link to='/Edit' className='Link'><p>Block</p></Link>
                                </div>
                                </td>

                            </tr>
                            <tr>
                                <th className="number" scope="row">4</th>
                                <td className="th">Jasmin</td>
                                <td className="th">email@gmail.com</td>
                                <td className="th">XXXXXXXXXX</td>
                                <td className="th">02</td>
                                <td className="th">03</td>
                                <td className="th">
                                <div className="Action"> 
                                <Link to='/Edit' className='Link'><p>View</p></Link>
                                <Link to='/Edit' className='Link'><p>Edit</p></Link>
                                <Link to='/Edit' className='Link'><p>Block</p></Link>
                                </div>
                                </td>


                            </tr>
                            <tr>
                                <th className="number" scope="row">5</th>
                                <td className="th">Jasmin</td>
                                <td className="th">email@gmail.com</td>
                                <td className="th">XXXXXXXXXX</td>
                                <td className="th">02</td>
                                <td className="th">03</td>
                                <td className="th">
                                <div className="Action"> 
                                <Link to='/Edit' className='Link'><p>View</p></Link>
                                <Link to='/Edit' className='Link'><p>Edit</p></Link>
                                <Link to='/Edit' className='Link'><p>Block</p></Link>
                                </div>
                                </td>

                            </tr>
                            <tr>
                                <th className="number" scope="row">5</th>
                                <td className="th">Jasmin</td>
                                <td className="th">email@gmail.com</td>
                                <td className="th">XXXXXXXXXX</td>
                                <td className="th">02</td>
                                <td className="th">03</td>
                                <td className="th">
                                <div className="Action"> 
                                <Link to='/Edit' className='Link'><p>View</p></Link>
                                <Link to='/Edit' className='Link'><p>Edit</p></Link>
                                <Link to='/Edit' className='Link'><p>Block</p></Link>
                                </div>
                                </td>

                            </tr>
                             
                        </tbody>
                    </table>


                </div>

            </div>
            </div>
        </>
    )
}
export default UserNameTable;