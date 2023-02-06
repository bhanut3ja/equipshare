import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './E-logs.css'
import DatePicker from "react-datepicker";

const Elogs = () => {
  const top100Films = [
    { label: '1' },
    { label: '2' },
    { label: '3' },
    { label: '4' },
    { label: '5' },
    { label: "6" },
    { label: '7' }
  ]
  return (
    <>
      <div className="Elogs">
        <div className="ElogsNav">
          <div className="ElogsNavbar">
            <div className="Title">
              <h4>E-logs</h4>
            </div>
            <div className="ElogsPresenter">
              <p>Home ></p>
              <p> E-logs</p>
            </div>
          </div>
        </div>
        <div className="SelectElogs">
          <div className="SelectElog">
            <div className="Title">
              <div className="Dropdown">
                <span>Select Site:</span>

                <div>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    sx={{ width: 250 }}
                    color="grey"
                    options={top100Films}
                    renderInput={(params) => <TextField {...params} color="grey" label="Equipment Name" size="small" />}
                  />
                </div>
              </div>
              <div className="DateContainer">
                <span>Date:</span>
                <div className="d-flex flex-row flex-wrap">
                  <DatePicker className="input-contain" placeholderText='fromdate' />
                </div>
                <span>-</span>
                <div className=" d-flex flex-row">
                  <DatePicker className="input-contain" placeholderText='todate' />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="ElogDetails">
          <div className="Elogcontainer">
            <div className="Container1">
              <div className="div">
                <span>MTD:</span>
                <p>XXXXX</p>
              </div>
              <div className="div">
                <span>Hours Opration:</span>
                <p>20 Hours</p>
              </div>
              <div className="div">
                <span>Idl Ness Index:</span>
                <p>Data</p>
              </div>
              <div className="div">
                <span>PO/Landing Revenue:</span>
                <p>Data</p>
              </div>
              <div className="div">
                <span>Checklist:</span>
                <p className="file">file</p>
              </div>
              <div className="div">
                <span>Rating:</span>
                <p>3.5/5</p>
              </div>
            </div>
            <div className="Container1">
              <div className="div">
                <span>Fuel Consumption:</span>
                <p>fuel details</p>
              </div>
              <div className="div">
                <span>BreakDown Hours:</span>
                <p>5 Hours</p>
              </div>
              <div className="div">
                <span>Maintenence Report:</span>
                <p className="Report">View Report</p>
              </div>
              <div className="div">
                <span>images:</span>
                <div className="img">
                  <img src="" placeholder="image" />
                  <img src="" placeholder="image" />
                  <img src="" placeholder="image" />
                </div>
              </div>


            </div>

          </div>
        </div>
      </div>
    </>
  );
}
export default Elogs;