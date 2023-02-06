import React from 'react'
import '../Equipment.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true
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

const EquipmentEngineOilTab = () => {
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

            <div className="equipment-engine-component">
              <div className="engine-all-tabs">
                <Link className='engine-tab' to="/EquipmentEngineGeneralTab">General</Link>
                <Link className='engine-tab' style={{ background: 'grey', color: 'white', paddingTop: '10px' }} to="/EquipmentEngineOilTab">Oil</Link>
                <Link className='engine-tab' to="/EquipmentEngineOBDTab">OBD-II</Link>
                <Link className='engine-tab' to="/EquipmentEngineFilterTab">Filter</Link>
                <Link className='engine-tab' to="/EquipmentEngineSummaryTab">Tire Summary</Link>
              </div>

              <div className="engine-general-tab">
                <div className="general-top-header">
                  <p className="general-heading">Graph</p>
                  <div className="general-checks">
                    <input type="checkbox" className='check1-1' /> <span>Oil Usage Hours Left</span>
                    <input type="checkbox" className='check1-2' />  <span>Tempreature Max</span>
                    <input type="checkbox" className='check1-3' /> <span> Tempreature Low</span>
                    <input type="checkbox" className='check1-4' /> <span> Oil Pressure Max</span>
                    <input type="checkbox" className='check1-4' /> <span>Oil Pressure Low</span>
                  </div>
                </div>
                <div className="general-graph">
                  <p className="overGraph">Its a graph between cost vs site for a month, 3 month and 6 month</p>
                  <Line options={options} data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EquipmentEngineOilTab
