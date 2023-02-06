import React from 'react'
import './NotificationCancelling.css'
import NotificationSlider from './NotificationSlider'
import Header from "../Header";
import Slider from "../Slider";

const NotificationCancelling = () => {
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
        <div className="row d-flex flex-wrap">
          <div className="col">

            <div className="UserNameTable">
              <table className="table">
                <thead>
                  <tr>
                    <th className="number" scope="col"></th>
                    <th className="th" scope="col">Borrowing ID</th>
                    <th className="th" scope="col">Date</th>
                    <th className="th" scope="col">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="number" scope="row"><input type='checkbox' /> </th>
                    <td className="th">XXXXX</td>
                    <td className="th">11/01/2023</td>
                    <td className="th">5200</td>
                  </tr>
                  <tr>
                    <th className="number" scope="row"><input type='checkbox' /> </th>
                    <td className="th">XXXXX</td>
                    <td className="th">11/01/2023</td>
                    <td className="th">5200</td>
                  </tr>
                  <tr>
                    <th className="number" scope="row"><input type='checkbox' /> </th>
                    <td className="th"></td>
                    <td className="th"></td>
                    <td className="th"></td>
                  </tr>
                </tbody>
              </table>

              <div className="d-flex justify-content-evenly text-center mt-4">
                <button className="button-check">Rematch</button>
                <button className="button-check">Modify</button>
              </div>
            </div>

          </div>
          <div className="col">
            <div className="UserNameTable">
              <table className="table">
                <thead>
                  <tr>
                    <th className="number" scope="col"></th>
                    <th className="th" scope="col">Lending ID</th>
                    <th className="th" scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="number" scope="row"><input type='checkbox' /> </th>
                    <td className="th">XXXXX</td>
                    <td className="th">11/01/2023</td>
                  </tr>

                  <tr>
                    <th className="number" scope="row"><input type='checkbox' /> </th>
                    <td className="th"></td>
                    <td className="th"></td>
                  </tr>
                </tbody>
              </table>

              <div className="d-flex justify-content-evenly text-center mt-4">
                <button className="button-check">Rematch</button>
                <button className="button-check">Modify</button>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className='container mt-4 mb-3'>
        <div className="row d-flex flex-wrap cancelling-container">
          <div className="col mt-2">
            <div className="div d-flex">
              <span>Lending ID:</span>
              <p>XXXXX</p>
            </div>

            <div className="div d-flex mt-3">
              <span>Select Date:</span>
              <input type='date' className="input" placeholder="fromdate" />
              <input type='date' className="input" placeholder="todate" />
            </div>
          </div>

          <div className="col mt-2">
            <div className="div d-flex">
              <span>Equipment Name:</span>
              <p>equipmentname</p>
            </div>
          </div>

          <div className="d-flex justify-content-center text-center mt-4">
            <button className="button-check">Cancel</button>
            <button className="button-check">Modify</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default NotificationCancelling