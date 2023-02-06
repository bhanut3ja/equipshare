import React from "react";
import './Dashboard.css';
 
import { Link } from "react-router-dom";
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
import { Bar, Line } from 'react-chartjs-2';
import Map from '../../images/Map.jpg';

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

export const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  }
}

export const data1 = {
  label: ['Category 01', 'Category 02', 'Category 03', 'Category 04', 'Category 05', 'Category 06', 'Category 07'],
  datasets: [
    {
      label: 'Categories',
      data: [10, 20, 30, 40, 50, 60, 70],
      backgroundColor: '#a6a6a6'
    }
  ]
}

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
      text: 'Chart.js Line Chart - Multi Axis',
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

const Dashboard = () => {
  return (
    <>
      <div className="main-dashboard">
        <div className="top-content">
          <h1 className="dashboard-heading">Site</h1>
          <p className="routing-content">Home &gt; Dashboard</p>
        </div>

        <div className="count">
          <div className="count-1">
            <p className="total-number">Total number of<br /><strong>IDLE EQUIPMENTS</strong></p>
            <p className="number"><strong>156</strong></p>
          </div>
          <div className="count-2">
            <p className="total-number">Total number of<br /><strong>ACTIVE SITES</strong></p>
            <p className="number"><strong>34</strong></p>
          </div>
          <div className="count-3">
            <p className="total-number">Total number of<br /><strong>USER</strong></p>
            <p className="number"><strong>18</strong></p>
          </div>
        </div>

        <div className="equipments-graphs">
          <div className="equipments-category">
            <div className="equipment-category-header">
              <label className="header-name">Equipment Category Detail</label>
              <select className="header-dropdown" name="" id="">
                <option value="Fuel Consumption">Fuel Consumption</option>
                <option value="Fuel Consumption">Fuel Consumption</option>
                <option value="Fuel Consumption">Fuel Consumption</option>
              </select>
            </div>

            <div className="equipment-category-graph">
              <Bar options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                  },
                }
              }} data={{
                label: ['Category 01', 'Category 02', 'Category 03', 'Category 04', 'Category 05', 'Category 06', 'Category 07'],
                datasets: [
                  {
                    label: 'Categories',
                    data: [10, 20, 30, 40, 50, 60, 70],
                    backgroundColor: '#a6a6a6'
                  }
                ]
              }} />
            </div>
          </div>

          <div className="equipments-utilization">
            <div className="equipment-utilization-header">
              <label className="header-name">Equipment Utilization</label>
              <div className="header-radios">
                <input type="radio" name="Vehicle" id="" />&nbsp;<label >Vehicle</label> &nbsp;
                <input type="radio" name="Asserts" id="" />&nbsp;<label >Asserts</label>
              </div>
              <select className="header-dropdown" name="" id="header-dropdown">
                <option value="Fuel Consumption">Site Category</option>
                <option value="Fuel Consumption">Site Category</option>
                <option value="Fuel Consumption">Site Category</option>
              </select>
              <select className="header-dropdown" name="" id="header-dropdown">
                <option value="Fuel Consumption">Equipment Category</option>
                <option value="Fuel Consumption">Equipment Category</option>
                <option value="Fuel Consumption">Equipment Category</option>
              </select>
            </div>

            <div className="equipment-utilization-graph">
              <Line options={options} data={data} />
            </div>
          </div>
        </div>

        <div className="from-to-time">
          <div className="date">
            <label className="date-heading">Date: <input type="date" name="" id="" /> - <input type="date" name="" id="" /></label>
            <button className="get-details">Get Details</button>
          </div>

          <div className="chart-1">
            <div className="bar-and-line">
              <p className="bar-heading">Rental Revenue</p>
              <Bar options={options1} data={data1} />
            </div>

            <div className="bar">
              <p className="bar-heading">Rental Cost</p>
              <Bar options={options1} data={data1} />
            </div>
          </div>

          <div className="chart-2">
            <div className="sample-bar">
              <p className="bar-heading">Maintainance Cost</p>
              <Bar options={options1} data={data1} />
            </div>
            <div className="sample-bar2">
              <p className="bar-heading">Safety Index</p>
              <Bar options={options1} data={data1} />
            </div>
          </div>
        </div>

        <div className="dropdown-map">
          <div className="dropdown-sections">
            <div className="section-1">
              <select name="" id="" className="dropdown-1">
                <option value="option1">Select Region</option>
                <option value="option1">option2</option>
                <option value="option1">option3</option>
                <option value="option1">option4</option>
              </select>
            </div>
            <div className="section-2">
              <select name="" id="" className="dropdown-2">
                <option value="option1">Select Company</option>
                <option value="option1">option2</option>
                <option value="option1">option3</option>
                <option value="option1">option4</option>
              </select>
            </div>
            <div className="section-3">
              <p className="site">Site No. 01<span className="city">(city)</span></p>
              <Link className="view-details" style={{fontSize: '12px'}} to="#">View Details</Link>
            </div>
            <div className="section-4">
              <p className="site">Site No. 01<span className="city">(city)</span></p>
              <Link className="view-details" style={{fontSize: '12px'}} to="#">View Details</Link>

            </div>
            <div className="section-5">
              <p className="site">Site No. 01<span className="city">(city)</span></p>
              <Link className="view-details" style={{fontSize: '12px'}} to="#">View Details</Link>
            </div>
            <div className="section-6">
              <p className="site">Site No. 01<span className="city">(city)</span></p>
              <Link className="view-details" style={{fontSize: '12px'}} to="#">View Details</Link>
            </div>
            <div className="section-7">
              <p className="site">Site No. 01<span className="city">(city)</span></p>
              <Link className="view-details" style={{fontSize: '12px'}} to="#">View Details</Link>
            </div>
          </div>

          <div className="map-section">
            <div className="map">
              <img src={Map} alt="" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
export default Dashboard;