import React from 'react'
import './AddEquipment.css';

const AddEquipment = () => {
    return (
        <>
            <div className="add-equipment">
                <div className="add-equipment-header">
                    <h2 className="add-header">Add Equipment</h2>
                    <p className="add-equip-routing">Home &gt; Equipments &gt; AddEquipment</p>
                </div>

                <div className="equip-dropdown-container">
                    <div className="drop">
                        <label className="drop-label">Category:</label>
                        <select className="drop-sec">
                            <option value="">selectcategory</option>
                            <option value="">selectcategory</option>
                            <option value="">selectcategory</option>
                            <option value="">selectcategory</option>
                        </select>
                    </div>
                    <div className="drop">
                        <label className="drop-label">SubCategory:</label>
                        <select className="drop-sec">
                            <option value="">selectcategory</option>
                            <option value="">selectcategory</option>
                            <option value="">selectcategory</option>
                            <option value="">selectcategory</option>
                        </select>
                    </div>
                    <div className="drop">
                        <label className="drop-label">Company:</label>
                        <select className="drop-sec">
                            <option value="">companyname</option>
                            <option value="">companyname</option>
                            <option value="">companyname</option>
                            <option value="">companyname</option>
                        </select>
                    </div>
                    <div className="drop">
                        <label className="drop-label">Model:</label>
                        <select className="drop-sec">
                            <option value="">modelname/no.</option>
                            <option value="">modelname/no.</option>
                            <option value="">modelname/no.</option>
                            <option value="">modelname/no.</option>
                        </select>
                    </div>
                </div>

                <div className="equipment-basic-info">
                    <div className="basic-info-heading">
                        <p className="info-heading">Basic Info</p>
                    </div>
                    <div className="basic-info-content">
                        <div className="basic-content-1">
                            <div className="basic-labels">
                                <label htmlFor="" className="basic-label">Manufacturer:</label><br />
                                <label htmlFor="" className="basic-label">Value:</label><br />
                                <label htmlFor="" className="basic-label">Engine Power:</label><br />
                                <label htmlFor="" className="basic-label">Capacity:</label>
                            </div>

                            <div className="basic-fields">
                                <label htmlFor="" className="basic-field">Manufacturer Company Name</label><br />
                                <label htmlFor="" className="basic-field">XXXXXX-XXXXXX</label><br />
                                <label htmlFor="" className="basic-field">92</label><br />
                                <label htmlFor="" className="basic-field">9.7</label>
                            </div>
                        </div>
                        <div className="basic-content-2">
                            <div className="basic-labels">
                                <label htmlFor="" className="basic-label">Capacity Per Hour:</label><br />
                                <label htmlFor="" className="basic-label">Weight:</label><br />
                                <label htmlFor="" className="basic-label">Bucket Capacity:</label>
                            </div>
                            <div className="basic-fields">
                                <label htmlFor="" className="basic-field">30 CuM/Hr</label><br />
                                <label htmlFor="" className="basic-field">37</label><br />
                                <label htmlFor="" className="basic-field">0.234</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="equipment-location-images">
                    <div className="location-images-heading">
                        <p className="location-image-header">Location & Images</p>
                    </div>
                    <div className="location-section">
                        <div className="basic-labels">
                            <label htmlFor="" className="basic-label">Site:</label><br />
                            <label htmlFor="" className="basic-label">Upload Photo:</label>
                        </div>
                        <div className="basic-fields">
                            <select className="basic-field" style={{ width: '363px', padding: '5px', color: '#c1bdbd' }}>
                                <option value="">select site</option>
                                <option value="">select site</option>
                                <option value="">select site</option>
                                <option value="">select site</option>
                            </select><br />
                            <label htmlFor="" style={{ border: '0.5px solid #959595', paddingTop: '20px', paddingBottom: '20px', paddingLeft: '25px', paddingRight: '25px', borderRadius: '4px', cursor: 'pointer' }} className="basic-field"><i class="fa fa-plus" aria-hidden="true"></i></label>
                        </div>
                    </div>
                </div>

                <div className="equipment-dues-docs">
                    <div className="dues-docs-header">
                        <p className="dues-docs-heading">Dues & Documents</p>
                    </div>

                    <div className="dues-checks">
                        <div className="due1"><input type="checkbox" className="dues" />RTO</div>
                        <div className="due2"><input type="checkbox" className="dues" />PUC</div>
                        <div className="due3"><input type="checkbox" className="dues" />Fitness</div>
                        <div className="due4"><input type="checkbox" className="dues" />Third Party Insurance</div>
                    </div>

                    <div className="upload-docs">
                        <p className="upload-label">Upload Document: <span className='upload-icon'><i class="fa fa-plus" aria-hidden="true"></i></span></p>
                        <p className="upload-label">Upload Document: <span className='upload-icon'><i class="fa fa-plus" aria-hidden="true"></i></span></p>
                    </div>

                    <div className="upload-all-buttons">
                        <div className="upload-btn-1">
                            <button className="back-btn">Back</button>
                        </div>
                        <div className="upload-btn-2">
                            <button className="sub-btn">Submit</button>
                        </div>
                    </div>
                </div>

                <div className="equipment-asset">
                    <div className="equipment-asset-heading">
                        <p className="equipment-asset-header">Asset Brief</p>
                    </div>
                    <div className="asset-content-1">
                        <div className="basic-info-content">
                            <div className="basic-content-1">
                                <div className="basic-labels">
                                    <label htmlFor="" style={{ marginTop: '25px' }} className="basic-label">Equipment Name:</label><br />
                                    <label htmlFor="" style={{ marginTop: '25px' }} className="basic-label">Year:</label><br />
                                    <label htmlFor="" style={{ marginTop: '25px' }} className="basic-label">Company Asset No.:</label><br />
                                    <label htmlFor="" style={{ marginTop: '25px' }} className="basic-label">IOT ID:</label>
                                </div>

                                <div className="basic-fields">
                                    <input type="text" style={{ padding: '5px' }} className="basic-field" placeholder='Manufacturer Company Name' /><br />
                                    <select name="" id="" style={{ width: '210px', padding: '5px' }} className="basic-field">
                                        <option value="">select data</option>
                                        <option value="">select data</option>
                                        <option value="">select data</option>
                                        <option value="">select data</option>
                                    </select><br />
                                    <input type="text" style={{ padding: '5px' }} className="basic-field" placeholder='Manufacturer Company Name' /><br />
                                    <input type="text" style={{ padding: '5px' }} className="basic-field" placeholder='Manufacturer Company Name' />
                                </div>
                            </div>
                            <div className="basic-content-2">
                                <div className="basic-labels">
                                    <label htmlFor="" style={{ marginTop: '25px' }} className="basic-label">Equipment Serial No.:</label><br />
                                    <label htmlFor="" style={{ marginTop: '25px' }} className="basic-label">Hours of Operation:</label><br />
                                    <label htmlFor="" style={{ marginTop: '25px' }} className="basic-label">Asset:</label><br />
                                    <label htmlFor="" style={{ marginTop: '25px' }} className="basic-label">Equipment Profile Photo:</label>
                                </div>
                                <div className="basic-fields">
                                    <input type="text" style={{ padding: '5px' }} className="basic-field" placeholder='Manufacturer Company Name' /><br />
                                    <input type="text" style={{ padding: '5px' }} className="basic-field" placeholder='Manufacturer Company Name' /><br />
                                    <div className="basic-field">
                                        <input type="checkbox" />Owned
                                        <input type="checkbox" />Leased
                                        <input type="checkbox" />Rented
                                    </div><br />
                                    <p className="asset-icon"><i class="fa fa-plus" aria-hidden="true"></i></p>
                                </div>
                            </div>
                        </div>

                        <div className="asset-btn">
                            <button className="asset-button">Next</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddEquipment
