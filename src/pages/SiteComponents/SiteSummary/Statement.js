import React from "react";
 import './SiteSummaryDetails.css';
import SiteNavbar from "../CommenComponents/SiteNavbar";
import Slider from "../CommenComponents/Slider";
import SelectSite from "./SelectSite";
import StatementTable from "./StatementTable";
import SiteSummaryDetails from "./SiteSummaryDetails";
const Statement =() =>{
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
           <StatementTable/>
           <div className="otherbutton">
        <button>Print</button>
        <button>Export to CSV</button>
       </div>
          </div>
        </div>
</div>
        </div>
        </>
    )
}
export default Statement;