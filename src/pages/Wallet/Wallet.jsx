import React, { useState } from "react";
import "./Wallet.scss";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BalanceInput from "./BalanceInput";
import NavTab from "./NavTab";
import ManageWallet from './ManageWallet';
import PaymentTable from './PaymentTable';
import LedgerTable from "./LedgerTable";
import DropdownButton from "./DropdownButton";


const tab1Links = [
  {
    name: 'Payment',
    id: 'nav-payment-tab',
    data_bs_target: '#nav-payment',
    aria_controls: 'nav-payment',
  },
  {
    name: 'Asset Outstanding',
    id: 'nav-asset-tab',
    data_bs_target: '#nav-asset',
    aria_controls: 'nav-asset',
  },
  {
    name: 'Initiate Payment',
    id: 'nav-initiate-payment-tab',
    data_bs_target: '#initiate-payment',
    aria_controls: 'nav-initiate-payment',
  },
  {
    name: 'Manage Wallet',
    id: 'nav-manage-wallet-tab',
    data_bs_target: '#manage-wallet',
    aria_controls: 'nav-manage-wallet',
  },
]
const tab1Content = [
  {
    id: 'nav-payment',
    aria_labeldby: 'nav-payment-tab',
    content: <PaymentTable />
  },
  {
    id: 'nav-asset',
    aria_labeldby: 'nav-asset-tab',
    content: 'This is assset'
  },
  {
    id: 'initiate-payment',
    aria_labeldby: 'nav-initiate-payment-tab',
    content: 'This is initiate-payment'
  },
  {
    id: 'manage-wallet',
    aria_labeldby: 'nav-manage-wallet-tab',
    content: <ManageWallet />
  },
]
const tab2Links = [
  {
    name: 'Critical Outstanding',
    id: 'nav-critical-outstanding-tab',
    data_bs_target: '#nav-critical-outstanding',
    aria_controls: 'nav-critical-outstanding',
  },
  {
    name: 'Pending Transaction',
    id: 'nav-pending-transaction-tab',
    data_bs_target: '#nav-pending-transaction',
    aria_controls: 'nav-pending-transaction',
  },
  {
    name: 'Ledger',
    id: 'nav-ledger-tab',
    data_bs_target: '#ledger',
    aria_controls: 'nav-ledger',
  },
]
const tab2Content = [
  {
    id: 'nav-critical-outstanding',
    aria_labeldby: 'nav-critical-outstanding-tab',
    content: 'This is critical outstanding'
  },
  {
    id: 'nav-pending-transaction',
    aria_labeldby: 'nav-pending-transaction-tab',
    content: 'This is pending transaction'
  },
  {
    id: 'ledger',
    aria_labeldby: 'nav-ledger-tab',
    content: <LedgerTable />
  },
]



const Wallet = () => {
  const [startDate, setStartDate] = useState(new Date());


  return (
    <>
      <div className="wallet-wrapper">
        <div className="wallet-header">
          <h6>Wallet</h6>
          <div className="breadcrumb-wrapper" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item " aria-current="page">Wallet</li>
            </ol>
          </div>
        </div>
        <hr />
        <div className="date-button-wrapper">
          <div className="date-button-left">
            <div className="date-wrap">
              <label>Date:</label>
              <DatePicker className='datepicker border px-2' placeholderText='fromdate' onChange={(date) => setStartDate(date)} />
              <p className="p-0 m-0">-</p>
              <DatePicker className='datepicker border px-2' placeholderText='todate' onChange={(date) => setStartDate(date)} />
            </div>
            <Button variant="secondary">Get Details</Button>
          </div>
          <div className="date-button-right ">
            <Button variant="secondary">Refill Wallet</Button>
          </div>
        </div>

        <div className="balance-wrapper">
          <BalanceInput label={'Rental Revenue'} />
          <i className="fa-solid fa-minus"></i>
          <BalanceInput label={'Rental Cost'} />
          <i className="fa-solid fa-equals"></i>
          <BalanceInput label={'Rental Balance(INR)'} />
        </div>

        <div className="nav-tab-1 my-4 container-fluid">
          <NavTab tabLinks={tab1Links} tabContent={tab1Content} />
        </div>
        <div className="nav-tab-2 my-4 container-fluid">
          <div className="row w-100 d-flex justify-content-end">
            <DropdownButton className='col-2 border' name='Site' />
            <DropdownButton className='col-2 border' name='Site name' />
          </div>
          <NavTab tabLinks={tab2Links} tabContent={tab2Content} />

        </div>

      </div>
    </>
  );
};

export default Wallet;
