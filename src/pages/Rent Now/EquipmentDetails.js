import React from "react";
import './EquipmentDetails.css'
import DatePicker from "react-datepicker";

const EquipmentDetails = () => {
    return (
        <>
            <div className="EquipmentDetails">
                <div className="EquipmentNav">
                    <div className="EquipmentNavbar">
                        <div className="Title">
                            <h4>Rent Now</h4>
                        </div>
                        <div className="EquipmentPresenter">
                            <p>Home ></p>
                            <p> Rent Now ></p>
                            <p>Equipment Capacity</p>
                        </div>
                    </div>
                </div>
                <div className="EquipmentName">
                    <div className="EquipmentAllDetail">
                        <div className="NameofEquipment">
                            <h4>Equipment Name</h4>
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="Container1">
                            <div className="div">
                                <span>Category:</span>
                                <p>Earth Moving Equipments</p>
                            </div>
                            <div className="div">
                                <span>Subcategory:</span>
                                <p>Dozer</p>
                            </div>
                            <div className="div">
                                <span>Manufacturer:</span>
                                <p>Manufacturer Company Name</p>
                            </div>
                            <div className="div">
                                <span>Model:</span>
                                <p>Model</p>
                            </div>
                            <div className="div">
                                <span>Value:</span>
                                <p> XXXXX-XXXX</p>
                            </div>
                            <div className="div">
                                <span>Capacity Per Hour:</span>
                                <p>92</p>
                            </div>
                            <div className="div">
                                <span>Engine Power</span>
                                <p>37</p>
                            </div>
                            <div className="div">
                                <span>Weight:</span>
                                <p>9.7</p>
                            </div>
                            <div className="div">
                                <span>Capacity:</span>
                                <p>024</p>
                            </div>
                            <div className="div">
                                <span>Bucket Capacity:</span>
                                <p>rowing Request</p>
                            </div>
                        </div>
                        <div className="RentalRate">
                            <div className="RentalRates">
                                <span>Rental Rates</span>
                            </div>
                            <div className="Container1">
                                <div className="div">
                                    <span>Hourly:</span>
                                    <p>XXXX-XXXXX <span>inr</span></p>
                                </div>
                                <div className="div">
                                    <span>Daily:</span>
                                    <p>XXXX-XXXXX <span>inr</span></p>
                                </div>
                                <div className="div">
                                    <span>Weekly:</span>
                                    <p>XXXX-XXXXX <span>inr</span></p>
                                </div>
                                <div className="div">
                                    <span>Monthly:</span>
                                    <p>XXXX-XXXXX <span className="span">inr</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="BorrowingRequest">
                    <h5>Borrowing Request</h5>
                    <div className="Request ">
                        <div className="Datecontainer ">
                            <span >Date:</span>
                            <div className="d-flex flex-row flex-wrap">
                                <DatePicker className="input-contain" placeholderText='fromdate' />
                            </div>
                            <span>-</span>
                            <div className=" d-flex flex-row">
                                <DatePicker className="input-contain" placeholderText='todate' />
                            </div>
                            <span>Time Duration borrowing equipment as per the selected date</span>
                        </div>
                    </div>
                    <div className="Submitbutton">
                        <button className="button">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EquipmentDetails;