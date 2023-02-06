import React from 'react'
import './Reports.css'
import ReportSlider from './ReportSlider'
import DatePicker from "react-datepicker";

const Reports = () => {
  return (
    <>
      <div className='container'>
        <ReportSlider />
      </div>

      <div className="container d-flex flex-wrap justify-content-center mt-4">
        <div className="DateContainer">
          <span>Select Equipment:</span>
          <select className="" aria-label="Default select example">
            <option selected>select equipment</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <div className="DateContainer">
            <span>Date:</span>
            <div className="d-flex flex-row flex-wrap">
              <DatePicker className="input" placeholderText='fromdate' />
            </div>
            <span>-</span>
            <div className=" d-flex flex-row">
              <DatePicker className="input" placeholderText='todate' />
            </div>
          </div>
        </div>
        <div className="DateContainer text-small">
          <button className='button-check'>Export to CSV</button>
          <button className='button-check'>Print Report</button>
        </div>
      </div>


      <div className="Report-Details">
        <div className="Report-container">
          <div className="Container1">
            <div className="div">
              <span>Driver Name:</span>
              <p>Operator Name</p>
            </div>
            <div className="div">
              <span>Rash Operation:</span>
              <p>Rash Operation</p>
            </div>
            <div className="div">
              <span>Suddent Breaking:</span>
              <p>Suddent Breaking</p>
            </div>
            <div className="div">
              <span>Utilization(%):</span>
              <p>Utilization(%)</p>
            </div>
            <div className="div">
              <span>One Time Inspection:</span>
              <p>Inspection</p>
            </div>
            <div className="div">
              <span>Equipment Picture:</span>
              <div className="img">
                <img src="" placeholder="image" />
                <img src="" placeholder="image" />
                <img src="" placeholder="image" />
                <img src="" placeholder="image" />
              </div>
            </div>


          </div>
          <div className="Container1">
            <div className="div">
              <span>Equipment Brief:</span>
              <p>Equipment detail in brief</p>
            </div>
            <div className="div">
              <span>Overspeeding:</span>
              <p>Model</p>
            </div>
            <div className="div">
              <span>Impact:</span>
              <p>Impact</p>
            </div>
            <div className="div">
              <span>Fuel Consumption:</span>
              <p>Fuel Consumption</p>
            </div>
            <div className="div">
              <span>Compliance:</span>
              <p>Compliance</p>
            </div>


          </div>

        </div>
      </div>

    </>
  )
}

export default Reports