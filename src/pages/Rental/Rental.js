import React from "react";
import './Rental.css'
import Header from "./Header";
import Slider from "./Slider";

const Rental = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="container">
        <Slider />
      </div>

      {/* First Table*/}
      <div className="container  mt-3">
        <div className="row">
          <div className="col box">
            <div className="container-fluid mt-2 d-flex justify-content-between mb-2 rental-sub-header">
              <span >Lending Request</span>
              <div>
                <span className="print">
                  <i className="fa-solid fa-print"></i>
                  <span className="profile-name p-1">Print</span>
                </span>
                <span className="export">
                  <i className="fa-solid fa-download"></i>
                  <span className="profile-name p-1">Export</span>
                </span>
              </div>
            </div>

            <div className="container-table table-scroll custom-scrollbar">
              <table className="table table-bordered" >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Equipment</th>
                    <th scope="col">Location</th>
                    <th scope="col">Date</th>
                    <th scope="col">Request on</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">01</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit  Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">02</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit  Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">03</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit  Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">04</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit  Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">05</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit  Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">06</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit  Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">07</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit  Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">08</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit  Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">09</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit  Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit  Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit  Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit  Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit  Cancel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          <div className="col box">
            <div className="container-fluid mt-2 d-flex justify-content-between mb-2 rental-sub-header">
              <span>Borrowing Request</span>
              <div>
                <span className="print pr-2">
                  <i className="fa-solid fa-print"></i>
                  <span className="profile-name p-1">Print</span>
                </span>
                <span className="export">
                  <i className="fa-solid fa-download"></i>
                  <span className="profile-name p-1">Export</span>
                </span>
              </div>
            </div>

            <div className="container-table table-scroll custom-scrollbar">
              <table className="table table-bordered mb-0" >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Equipment</th>
                    <th scope="col">Location</th>
                    <th scope="col">Date</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">01</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit &nbsp; Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">02</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit &nbsp; Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">03</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit &nbsp; Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">04</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit &nbsp; Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">05</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit &nbsp; Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">06</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit &nbsp; Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">07</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit &nbsp; Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">08</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit &nbsp; Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">09</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit &nbsp; Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit &nbsp; Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit &nbsp; Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit &nbsp; Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>Request</td>
                    <td>Edit &nbsp; Cancel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* ###################################################### */}


      {/* Middle Area */}

      <div className="container mt-3">
        <div className="row">
          <div className="col box">
            <div className="container-fluid mt-2 d-flex justify-content-between mb-2 rental-sub-header">
              <span >Lending Configuration</span>
              <div>
                <span className="print pr-2">
                  <i className="fa-solid fa-print"></i>
                  <span className="profile-name p-1">Print</span>
                </span>
                <span className="export">
                  <i className="fa-solid fa-download"></i>
                  <span className="profile-name p-1">Export</span>
                </span>
              </div>
            </div>

            <div className="container-table table-scroll custom-scrollbar">
              <table className="table table-bordered mb-0" >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Equipment</th>
                    <th scope="col">Location</th>
                    <th scope="col">Date</th>
                    <th scope="col">Request ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">01</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>XXXXX</td>
                  </tr>
                  <tr>
                    <th scope="row">02</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>XXXXX</td>
                  </tr>
                  <tr>
                    <th scope="row">03</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>XXXXX</td>
                  </tr>
                  <tr>
                    <th scope="row">04</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>XXXXX</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          <div className="col box">
            <div className="container-fluid mt-2 d-flex justify-content-between mb-2 rental-sub-header">
              <span>Borrowing Configuration</span>
              <div>
                <span className="print pr-2">
                  <i className="fa-solid fa-print"></i>
                  <span className="profile-name p-1">Print</span>
                </span>
                <span className="export">
                  <i className="fa-solid fa-download"></i>
                  <span className="profile-name p-1">Export</span>
                </span>
              </div>
            </div>

            <div className="container-table">
              <table className="table table-bordered mb-0  table-scroll custom-scrollbar" >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Equipment</th>
                    <th scope="col">Location</th>
                    <th scope="col">Date</th>
                    <th scope="col">Request ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">01</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>XXXXX</td>
                  </tr>
                  <tr>
                    <th scope="row">02</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>XXXXX</td>
                  </tr>
                  <tr>
                    <th scope="row">03</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>XXXXX</td>
                  </tr>
                  <tr>
                    <th scope="row">04</th>
                    <td>Equipmentname</td>
                    <td>Locationname</td>
                    <td>from-to</td>
                    <td>XXXXX</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* ############################################################# */}

      {/* Lower Area */}

      <div className="container">
        <div className="row">
          <div className="col box">
            <div className="container-fluid mt-2 d-flex justify-content-between mb-2 rental-sub-header">
              <span>Earning From Lending</span>
              <div>
                <span className="print">
                  <i className="fa-solid fa-print"></i>
                  <span className="profile-name p-1">Print</span>
                </span>
                <span className="export">
                  <i className="fa-solid fa-download"></i>
                  <span className="profile-name p-1">Export</span>
                </span>
              </div>
            </div>

            <div className="container-table table-scroll custom-scrollbar">
              <table className="table table-bordered mb-0" >
                <thead>
                  <tr>
                    <th scope="col">Request ID</th>
                    <th scope="col">Equipment</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Penalty</th>
                    <th scope="col">PDF</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">XXXXX</th>
                    <td>Equipmentname</td>
                    <td>XXXXXX</td>
                    <td>Add</td>
                    <td> <i className="fa-solid fa-download"></i></td>
                  </tr>
                  <tr>
                    <th scope="row">XXXXX</th>
                    <td>Equipmentname</td>
                    <td>XXXXXX</td>
                    <td>Add</td>
                    <td> <i className="fa-solid fa-download"></i></td>
                  </tr>
                  <tr>
                    <th scope="row">XXXXX</th>
                    <td>Equipmentname</td>
                    <td>XXXXXX</td>
                    <td>Add</td>
                    <td> <i className="fa-solid fa-download"></i></td>
                  </tr>
                  <tr>
                    <th scope="row">XXXXX</th>
                    <td>Equipmentname</td>
                    <td>XXXXXX</td>
                    <td>Add</td>
                    <td> <i className="fa-solid fa-download"></i></td>
                  </tr>
                  <tr>
                    <th scope="row">XXXXX</th>
                    <td>Equipmentname</td>
                    <td>XXXXXX</td>
                    <td>Add</td>
                    <td> <i className="fa-solid fa-download"></i></td>
                  </tr>
                  <tr>
                    <th scope="row">XXXXX</th>
                    <td>Equipmentname</td>
                    <td>XXXXXX</td>
                    <td>Add</td>
                    <td> <i className="fa-solid fa-download"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          <div className="col box">
            <div className="container-fluid mt-2 d-flex justify-content-between mb-2 rental-sub-header">
              <span>Borrowing Cost</span>
              <div>
                <span className="print">
                  <i className="fa-solid fa-print"></i>
                  <span className="profile-name p-1">Print</span>
                </span>
                <i className="fa-solid fa-download"></i>
                <span className="profile-name p-1">Export</span>
              </div>
            </div>

            <div className="container-table table-scroll custom-scrollbar">
              <table className="table table-bordered mb-0" >
                <thead>
                  <tr>
                    <th scope="col">Request ID</th>
                    <th scope="col">Equipment</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Penalty</th>
                    <th scope="col">PDF</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">XXXXX</th>
                    <td>Equipmentname</td>
                    <td>XXXXXX</td>
                    <td>Add</td>
                    <td> <i className="fa-solid fa-download"></i></td>
                  </tr>
                  <tr>
                    <th scope="row">XXXXX</th>
                    <td>Equipmentname</td>
                    <td>XXXXXX</td>
                    <td>Add</td>
                    <td> <i className="fa-solid fa-download"></i></td>
                  </tr>
                  <tr>
                    <th scope="row">XXXXX</th>
                    <td>Equipmentname</td>
                    <td>XXXXXX</td>
                    <td>Add</td>
                    <td> <i className="fa-solid fa-download"></i></td>
                  </tr>
                  <tr>
                    <th scope="row">XXXXX</th>
                    <td>Equipmentname</td>
                    <td>XXXXXX</td>
                    <td>Add</td>
                    <td> <i className="fa-solid fa-download"></i></td>
                  </tr>
                  <tr>
                    <th scope="row">XXXXX</th>
                    <td>Equipmentname</td>
                    <td>XXXXXX</td>
                    <td>Add</td>
                    <td> <i className="fa-solid fa-download"></i></td>
                  </tr>
                  <tr>
                    <th scope="row">XXXXX</th>
                    <td>Equipmentname</td>
                    <td>XXXXXX</td>
                    <td>Add</td>
                    <td> <i className="fa-solid fa-download"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}
export default Rental;