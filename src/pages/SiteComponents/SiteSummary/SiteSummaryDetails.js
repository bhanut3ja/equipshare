import React from "react";
import './SiteSummaryDetails.css';
import { Link } from "react-router-dom";
const SiteSummaryDetails = () =>{
    return(
        <>
             
        
          <div className="buttton">
          <div className="Hover">
            <Link to='/EquipmentSiteSummary' className="Link"><button>Equipment</button></Link>
            </div>
            <div className="Hover">
            <Link to='/Invoices' className="Link"><button>Invoices</button></Link>
            </div>
            <div className="Hover">
            <Link to='/Statement' className="Link"> <button>Statement</button></Link>
            </div>
            <div className="Hover">
            <Link to='/Geofence' className="Link"> <button>Geofence</button></Link>
            </div>
          </div>
           
       
        </>
    )
}
export default SiteSummaryDetails;