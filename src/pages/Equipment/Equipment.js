import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Equipment.css';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Table from 'react-bootstrap/Table';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
} from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title);
export const Opt = {
  labels: ['Days used', 'Days not used'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 9],
      backgroundColor: [
        'grey',
        'gainsboro'
      ],
      borderColor: [
        'white',
        'white'
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Graph- Line graph of maintaince/breakdown hours',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31',];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [2, 4, 2, 6, 3, 2, 3, 4, 5, 8, 6, 4, 3, 4, 7, 8, 2],
      borderColor: '#a6a6a6',
      backgroundColor: '#a6a6a6',
      yAxisID: 'y',
    },
    {
      label: '',
      data: [2, 4, 2, 6, 7, 4, 2, 4, 6, 8, 6, 4, 3, 4, 7, 8, 2],
      borderColor: '#a6a6a6',
      backgroundColor: '#a6a6a7',
      yAxisID: 'y1',
    },
    {
      label: '',
      data: [2, 4, 2, 6, 7, 4, 2, 4, 6, 8, 6, 4, 3, 4, 7, 8, 9],
      borderColor: '#a6a6a6',
      backgroundColor: '#a6a6a5',
      yAxisID: 'y1',
    },
  ],
};

const Equipment = () => {
  return (
    <>
      <div className="equipment-component">
        <div className="equipment-header">
          <h4 className="equipment-heading">Equipment Details</h4>
          <p className="equipment-routing">Home &gt; Equipments</p>
        </div>

        <div className="equipment-center-component">
          <div className="six-cards-component">
            <div className="search-box">
              <i class="fa fa-search" aria-hidden="true"></i>
              <input type="text" className="input-field" placeholder='Search' />
            </div>

            <div className="equipment-cards">
              <div className="e-card">
                <div className="cardNo-image">
                  <div className="card-image">
                    Image
                  </div>
                  <p className="card-no">XXX-XX-XX</p>
                </div>
                <div className="ecard-content">
                  <h2 className="ecard-name">Equipment Name</h2>
                  <h3 className="ecard-model">Model name / no.</h3>
                  <p className="cont1">Earth Moving Equipments</p>
                  <p className="manu-name">Manufacturer Name</p>
                </div>
              </div>
              <div className="e-card">
                <div className="cardNo-image">
                  <div className="card-image">
                    Image
                  </div>
                  <p className="card-no">XXX-XX-XX</p>
                </div>
                <div className="ecard-content">
                  <h2 className="ecard-name">Equipment Name</h2>
                  <h3 className="ecard-model">Model name / no.</h3>
                  <p className="cont1">Arial Lifts</p>
                  <p className="manu-name">Manufacturer Name</p>
                </div>
              </div>
              <div className="e-card">
                <div className="cardNo-image">
                  <div className="card-image">
                    Image
                  </div>
                  <p className="card-no">XXX-XX-XX</p>
                </div>
                <div className="ecard-content">
                  <h2 className="ecard-name">Equipment Name</h2>
                  <h3 className="ecard-model">Model name / no.</h3>
                  <p className="cont1">JCB</p>
                  <p className="manu-name">Manufacturer Name</p>
                </div>
              </div>
              <div className="e-card">
                <div className="cardNo-image">
                  <div className="card-image">
                    Image
                  </div>
                  <p className="card-no">XXX-XX-XX</p>
                </div>
                <div className="ecard-content">
                  <h2 className="ecard-name">Equipment Name</h2>
                  <h3 className="ecard-model">Model name / no.</h3>
                  <p className="cont1">Batching Plant</p>
                  <p className="manu-name">Manufacturer Name</p>
                </div>
              </div>
              <div className="e-card">
                <div className="cardNo-image">
                  <div className="card-image">
                    Image
                  </div>
                  <p className="card-no">XXX-XX-XX</p>
                </div>
                <div className="ecard-content">
                  <h2 className="ecard-name">Equipment Name</h2>
                  <h3 className="ecard-model">Model name / no.</h3>
                  <p className="cont1">Category Name</p>
                  <p className="manu-name">Manufacturer Name</p>
                </div>
              </div>
              <div className="e-card">
                <div className="cardNo-image">
                  <div className="card-image">
                    Image
                  </div>
                  <p className="card-no">XXX-XX-XX</p>
                </div>
                <div className="ecard-content">
                  <h2 className="ecard-name">Equipment Name</h2>
                  <h3 className="ecard-model">Model name / no.</h3>
                  <p className="cont1">Arial Lifts</p>
                  <p className="manu-name">Manufacturer Name</p>
                </div>
              </div>

            </div>
          </div>

          <div className="equipment-side-content">
            <div className="Slider">
              <div className="Topic d-flex flex-wrap justify-content-center">
                <Link className='Slider-links' to='/Equipment'>Overview</Link>
                <Link className='Slider-links' to="/EquipmentTripTab">Trip</Link>
                <Link className='Slider-links' to="/EquipmentFuelTab" >Fuel Card</Link>
                <Link className='Slider-links' to="/EquipmentServiceTab" >Service</Link>
                <Link className='Slider-links' to="/EquipmentEngineGeneralTab">Engine Status</Link>
                <Link className='Slider-links' to="#" >Dues</Link>
              </div>
            </div>

            <div className="DateContainer mt-4">
              <span>Date:</span>
              <div className="d-flex flex-row flex-wrap">
                <DatePicker className="input" placeholderText='fromdate' />
              </div>
              <span>-</span>
              <div className=" d-flex flex-row">
                <DatePicker className="input" placeholderText='todate' />
              </div>

              <button className='button-check'>Get Details</button>
            </div>

            <div className="equipment-charts">
              <div className="equi-Line">
                <Line options={options} data={data} />
              </div>
              <div className="equip-Pie">
                <Pie data={Opt} />
              </div>
            </div>

            <div className="grid d-flex flex-wrap mt-4">
              <div className="col">
                <div className="service-upcoming-tables text-center" style={{ marginTop: '20px', border: '0.5px solid #a8a7a7', padding: '10px' }}>
                  <Table striped bordered className="mb-0" style={{ fontSize: '13px' }}>
                    <thead>
                      <tr>
                        <th>Asset Utilisation</th>
                        <th>Run Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>10%</td>
                        <td>5 Days Used</td>
                      </tr>
                      <tr>
                        <td>HH:MM</td>
                        <td>2 Days Idle</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>

              <div className="col" style={{ marginLeft: "1rem" }}>
                <div className="service-upcoming-tables text-center" style={{ marginTop: '20px', border: '0.5px solid #a8a7a7', padding: '10px' }}>
                  <Table striped bordered className="mb-0" style={{ fontSize: '13px' }}>
                    <thead>
                      <tr>
                        <th>Equipment Cost</th>
                        <th>Rental Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>XXXXXX</td>
                        <td>XXXXXX</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
            <hr />

            <div className="container d-flex flex-wrap justify-content-between mt-2">
              <div>
                <select className="report-select" aria-label=".form-select-lg example">
                  <option selected>Time Card</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div>
                <button className='button-check'>Export to CSV</button>
              </div>

              <div className="equipment-table">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Date</th>
                      <th>Run Time</th>
                      <th>Fuel/Rental Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>10/03/2017</td>
                      <td>28567</td>
                      <td>Amount(inr)</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>10/01/2017</td>
                      <td>5705300</td>
                      <td>Amount(inr)</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>09/03/2017</td>
                      <td>405300</td>
                      <td>Amount(inr)</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Equipment;