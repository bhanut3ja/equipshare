import React from "react";
 import './SiteSummaryDetails.css';
import GeofenceTable from "./GeofenceTable";
import SiteNavbar from "../CommenComponents/SiteNavbar";
import Slider from "../CommenComponents/Slider";
import SelectSite from "./SelectSite";
import SiteSummaryDetails from "./SiteSummaryDetails";
import GraphofInvoices from "./GraphofInvoices";
const Invoices =() =>{
    return(
      <>
      <div className="Site">
      <SiteNavbar/>
      <Slider/>
      <SelectSite/>
        <div className="SiteSummaryDetails">
        <div className="SiteSummary">
           <SiteSummaryDetails/>
          <div className="Border">
             <GraphofInvoices/>
          </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Invoices;