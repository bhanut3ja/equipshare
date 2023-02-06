import React from 'react'
import './NotificationForm.css'
import NotificationSlider from './NotificationSlider'
import Header from "../Header";
import Slider from "../Slider";

const NotificationForm = () => {
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
                <th className="th" scope="col">Checklist ID/Number</th>
                <th className="th" scope="col">Lender</th>
                <th className="th" scope="col">Borrower</th>
                <th className="th" scope="col">Location</th>
                <th className="th" scope="col">Equipments</th>
                <th className="th" scope="col">Requested Date</th><th className="th" scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="number" scope="row">01</th>
                <td className="th">1234567</td>
                <td className="th">Lender Full Name</td>
                <td className="th">Borrower Full Name</td>
                <td className="th">Site, City</td>
                <td className="th">02</td>
                <td className="th">From- To</td>
                <td className="th">C2 Filled</td>
              </tr>
              <tr>
                <th className="number" scope="row">02</th>
                <td className="th">1234567</td>
                <td className="th">Lender Full Name</td>
                <td className="th">Borrower Full Name</td>
                <td className="th">Site, City</td>
                <td className="th">02</td>
                <td className="th">From- To</td>
                <td className="th">C2 Pending</td>
              </tr>
              <tr>
                <th className="number" scope="row">03</th>
                <td className="th">1234567</td>
                <td className="th">Lender Full Name</td>
                <td className="th">Borrower Full Name</td>
                <td className="th">Site, City</td>
                <td className="th">02</td>
                <td className="th">From- To</td>
                <td className="th">C2 Filled</td>
              </tr>
              <tr>
                <th className="number" scope="row">04</th>
                <td className="th">1234567</td>
                <td className="th">Lender Full Name</td>
                <td className="th">Borrower Full Name</td>
                <td className="th">Site, City</td>
                <td className="th">02</td>
                <td className="th">From- To</td>
                <td className="th">C2 Filled</td>
              </tr>
              <tr>
                <th className="number" scope="row">05</th>
                <td className="th">1234567</td>
                <td className="th">Lender Full Name</td>
                <td className="th">Borrower Full Name</td>
                <td className="th">Site, City</td>
                <td className="th">02</td>
                <td className="th">From- To</td>
                <td className="th">C2 Pending</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default NotificationForm