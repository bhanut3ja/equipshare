import React from "react";
 import './SiteSummaryDetails.css';
import EquipmentTable from "./EquipmentTable";
import SiteNavbar from "../CommenComponents/SiteNavbar";
import Slider from "../CommenComponents/Slider";
import SelectSite from "./SelectSite";
import SiteSummaryDetails from "./SiteSummaryDetails";
const Equipment =() =>{
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
             <EquipmentTable/>
          </div>
          </div>
        </div>
        </div>
         
        </>
    )
}
export default Equipment;