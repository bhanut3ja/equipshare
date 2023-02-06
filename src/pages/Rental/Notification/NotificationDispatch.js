import React from 'react'
import './NotificationDispatch.css'
import NotificationSlider from './NotificationSlider'
import Header from "../Header";
import Slider from "../Slider";

const NotificationDispatch = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="container">
        <Slider />
      </div>


      <NotificationSlider />

      <div className='container notification-container'>
        <div className="UserNameTable">
          <table className="table">
            <thead>
              <tr>
                <th className="number" scope="col">#</th>
                <th className="th" scope="col">Equipment Name</th>
                <th className="th" scope="col">Lender</th>
                <th className="th" scope="col">Borrower</th>
                <th className="th" scope="col">Location</th>
                <th className="th" scope="col">Invoice No.</th>
                <th className="th" scope="col">Requested Date</th><th className="th" scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="number" scope="row">01</th>
                <td className="th">Equipment Name</td>
                <td className="th">Lender Full Name</td>
                <td className="th">Borrower Full Name</td>
                <td className="th">Site, City</td>
                <td className="th">1111</td>
                <td className="th">From- To</td>
                <td className="th">C2 Filled</td>
              </tr>
              <tr>
                <th className="number" scope="row">02</th>
                <td className="th">Equipment Name</td>
                <td className="th">Lender Full Name</td>
                <td className="th">Borrower Full Name</td>
                <td className="th">Site, City</td>
                <td className="th">1111</td>
                <td className="th">From- To</td>
                <td className="th">C2 Pending</td>
              </tr>
              <tr>
                <th className="number" scope="row">03</th>
                <td className="th">Equipment Name</td>
                <td className="th">Lender Full Name</td>
                <td className="th">Borrower Full Name</td>
                <td className="th">Site, City</td>
                <td className="th">1111</td>
                <td className="th">From- To</td>
                <td className="th">C2 Filled</td>
              </tr>
              <tr>
                <th className="number" scope="row">04</th>
                <td className="th">Equipment Name</td>
                <td className="th">Lender Full Name</td>
                <td className="th">Borrower Full Name</td>
                <td className="th">Site, City</td>
                <td className="th">1111</td>
                <td className="th">From- To</td>
                <td className="th">C2 Filled</td>
              </tr>
              <tr>
                <th className="number" scope="row">05</th>
                <td className="th">Equipment Name</td>
                <td className="th">Lender Full Name</td>
                <td className="th">Borrower Full Name</td>
                <td className="th">Site, City</td>
                <td className="th">1111</td>
                <td className="th">From- To</td>
                <td className="th">C2 Filled</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>


      <div className='container mt-4 mb-4'>
        <div className="row d-flex flex-wrap cancelling-container">
          <div className="col mt-4">
            <div className="div d-flex gap-5">
              <div className="DateContainer">
                <span className='text-arrange'>Select Date:</span>
                <input type='date' className="input" placeholder="fromdate" />
                <input type='date' className="input" placeholder="todate" />
              </div>
            </div>

            <div className="input-dispatch div d-flex mt-4">
              <span className='Lending-text text-arrange'>Logistic Name:</span>
              <input type="text" className="select-dispatch" placeholder="serviceprovidername" />
            </div>

            <div className="input-dispatch div d-flex mt-4">
              <label className='Lending-text'>Operations Details:</label>
              <input type="text" className="select-dispatch" placeholder="description" />
            </div>

            <div className="input-dispatch div d-flex mt-4">
              <label className='Lending-text text-arrange'>Driver Name:</label>
              <input type="text" className="select-dispatch" placeholder="driver full name" />
            </div>

            <div className="input-dispatch div d-flex mt-4">
              <label className='Lending-text text-arrange'>Transport By:</label>
              <input type="text" className="select-dispatch" placeholder="vehicle name" />
            </div>
          </div>

          <div className="col mt-4">
            <div className="div d-flex gap-5">
              <div className='DateContainer d-flex justify-content-around'>
                <label className='Lending-text text-arrange'>Equipment Type:</label>
                <div>
                  <input type='checkbox' />
                  <label className='m-1'>Movable</label>
                </div>
                <div>
                  <input type='checkbox' />
                  <label className='m-1'>Non-Movable</label>
                </div>
              </div>
            </div>

            <div className="input-dispatch div d-flex mt-4">
              <label className='Lending-text text-arrange'>Logistic Contact Number:</label>
              <input type="number" className="select-dispatch" placeholder="contact number" />
            </div>
            <div className="input-dispatch div d-flex mt-4">
              <label className='Lending-text text-arrange'>Driver Contact Number:</label>
              <input type="number" className="select-dispatch" placeholder="contact number" />
            </div>
            <div className="input-dispatch div d-flex mt-4">
              <label className='Lending-text'>Vehicle Registration Number:</label>
              <input type="number" className="select-dispatch" placeholder="registration number" />
            </div>
          </div>

          <div className="d-flex justify-content-center text-center mt-4">
                <button className="button-check">Cancel</button>
                <button className="button-check">Submit</button>
              </div>
        </div>
      </div>

    </>
  )
}

export default NotificationDispatch