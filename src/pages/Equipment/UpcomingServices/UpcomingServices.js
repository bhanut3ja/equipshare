import React from 'react';
import './UpcomingServices.css'

const UpcomingServices = () => {
  return (
    <>
      <div className="upcoming-services-component">
        <div className="up-serv-header">
          <h4 className="up-serv-heading">Upcoming Services</h4>
          <p className="up-serv-routing">Home &gt; Equipment &gt; Upcoming Services</p>

        </div>

        <div className="up-serv-center-content">
          <div className="up-serv-cols">
            <div className="up-serv-first-col">
              <div className="up-serv-row">
                <label htmlFor="" className="up-serv-label">Category:</label>
                <select name="" id="" className="up-serv-field">
                  <option value="">select category</option>
                  <option value="">select category</option>
                  <option value="">select category</option>
                  <option value="">select category</option>
                </select>
              </div>

              <div className="up-serv-row">
                <label htmlFor="" className="up-serv-label">Equipment Name:</label>
                <input type="text" className="up-serv-field" placeholder='Equipment Name' />
              </div>
              <div className="up-serv-row">
                <label htmlFor="" className="up-serv-label">Name:</label>
                <input type="text" className="up-serv-field" placeholder='fullname' />
              </div>
              <div className="up-serv-row">
                <label htmlFor="" className="up-serv-label">Number:</label>
                <input type="text" className="up-serv-field" placeholder='contactnumber' />
              </div>
              <div className="up-serv-row">
                <label htmlFor="" className="up-serv-label">PO:</label>
                <div className="up-serv">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </div>
              </div>
              <div className="up-serv-row">
                <label htmlFor="" className="up-serv-label">Service Provider:</label>
                <input type="text" className="up-serv-field" placeholder='serviceprovidername' />
              </div>
            </div>

            <div className="up-serv-second-col">
              <div className="up-serv-row">
                <label htmlFor="" className="up-serv-label">Subcategory:</label>
                <select name="" id="" className="up-serv-field">
                  <option value="">select subcategory</option>
                  <option value="">select subcategory</option>
                  <option value="">select subcategory</option>
                  <option value="">select subcategory</option>
                </select>
              </div>

              <div className="up-serv-row">
                <label htmlFor="" className="up-serv-label">Due Date:</label>
                <input type="text" className="up-serv-field" placeholder='Equipment Name' />
              </div>
              <div className="up-serv-row">
                <label htmlFor="" className="up-serv-label">Expected Reach Time:</label>
                <input type="text" className="up-serv-field" placeholder='fullname' />
              </div>
              <div className="up-serv-row">
                <label htmlFor="" className="up-serv-label">Preventive Maintainance Interval:</label>
                <select name="" id="" className="up-serv-field">
                  <option value="">detail</option>
                  <option value="">detail</option>
                  <option value="">detail</option>
                  <option value="">detail</option>
                </select>
              </div>
              <div className="up-serv-row">
                <label htmlFor="" className="up-serv-label">Mechanic Name</label>
                <input type="text" className="up-serv-field" placeholder='mechanicname' />
              </div>
            </div>
          </div>
          <div className="up-serv-desc">
            <label htmlFor="" className="up-serv-label">Description:</label>
            <input type="text"  className="up-serv-des" placeholder='description' />
          </div>
          <div className="up-serv-btn">
            <button className="up-serv-button">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpcomingServices
