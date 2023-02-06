import React from "react";
 import './Graphofinvoices.css'
  import {  Line } from 'react-chartjs-2';
  import { LinearScale,Chart as ChartJS, CategoryScale, BarElement,Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement, } from "chart.js";

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

const GraphofInvoices = () =>{
    const labels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31',];
    const options = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: 'Its graph beetween Cost VS Months at a Site',
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
      const options1 = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: 'Its graph beetween Cost VS Site for a month, 3 month & 6 month',
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
    const data = {
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

    return(
        <>
         <div className="GraphofInvoices">
          <div className="Graph">
            
            <div className="equipments-utiliti">
            <div className="invoice">
              <p className="header-name"> Graph</p>
              <div className="header-radios">
              <label htmlFor="" className=".header-name1">
                <input type="radio" name="Vehicle" id="" />No. of Request</label>
                <label htmlFor="" className=".header-name1">
                <input type="radio" name="Asserts" id="" />Cancelled Request</label>
                <label htmlFor="" className=".header-name1">
                <input type="radio" name="Asserts" id="" />Order Under Request</label>
              </div>
              <select className="dropdown" name="" id="">
                <option value="Fuel Consumption">Company Limited (india)</option>
                <option value="Fuel Consumption">Company Limited (india)</option>
                <option value="Fuel Consumption">Company Limited (india)</option>
              </select>
               
            </div>

            <div className=".equipment-graph">
              <Line options={options} data={data} className="LineChart" />
            </div>
          </div>
          <div className="equipments-utiliti invoicesGraph">
          <div className="invoice">
              <p className="header-name"> Graph</p>
              <div className="header-radios">
              <label htmlFor="" className=".header-name1">
                <input type="radio" name="Vehicle" id="" /> No. of Request</label>
                <label htmlFor="" className=".header-name1">
                <input type="radio" name="Asserts" id="" />Cancelled Request</label>
                <label htmlFor="" className=".header-name1">
                <input type="radio" name="Asserts" id="" />Order Under Request</label>
              </div>
              <select className="dropdown" name="" id="">
                <option value="Fuel Consumption">Company Limited (india)</option>
                <option value="Fuel Consumption">Company Limited (india)</option>
                <option value="Fuel Consumption">Company Limited (india)</option>
              </select>
               
            </div>

            <div className=".equipment-graph">
              <Line options={options1} data={data} className="LineChart" />
            </div>
          </div>
            </div>
          </div>
          
        </>
    )
}
export default GraphofInvoices;