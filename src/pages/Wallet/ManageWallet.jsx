import React from "react";
import { Button } from "react-bootstrap";

const ManageWallet = () => {
  return (
    <div className="container p-4">

        <div className="py-2 row w-50 m-auto d-flex justify-content-center align-items-center">
          <label className="col-3">First Site:</label>
          <p className="col-5 m-0">Current Wallet Amount</p>
          <input className="col-4 p-1 px-2" type="text" placeholder="Enter New Amount" />
        </div>

        <div className="py-2 row w-50 m-auto d-flex justify-content-center align-items-center">
          <label className="col-3">Second Site:</label>
          <p className="col-5 m-0">Current Wallet Amount</p>
          <input className="col-4 p-1 px-2" type="text" placeholder="Enter New Amount" />
        </div>

        <div className="py-2 row w-50 m-auto d-flex justify-content-center align-items-center">
          <label className="col-3">Third Site:</label>
          <p className="col-5 m-0">Current Wallet Amount</p>
          <input className="col-4 p-1 px-2" type="text" placeholder="Enter New Amount" />
        </div>

        <div className="py-2 row w-50 m-auto d-flex justify-content-center align-items-center">
          <label className="col-3">Fourth Site:</label>
          <p className="col-5 m-0">Current Wallet Amount</p>
          <input className="col-4 p-1 px-2" type="text" placeholder="Enter New Amount" />
        </div>
        <div className="row w-25 my-2 mx-auto">
          <Button className="col-5 mx-2" variant="secondary px-4">Reset</Button>
          <Button className="col-5 mx-2" variant="secondary px-4">Update</Button>
        </div>

        

    </div>
  );
};

export default ManageWallet;
