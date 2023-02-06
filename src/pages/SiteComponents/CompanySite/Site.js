import React from "react";
import SiteNavbar  from "../CommenComponents/SiteNavbar";
import '../CommenComponents/Pages.css'
import Slider from "../CommenComponents/Slider";
import SiteForm from "../CompanySite/SiteForm";
import AddSite from "../CommenComponents/AddSite";
const Site =()=>{
    return(
        <div className="Site" >
       <SiteNavbar/>
       <Slider/>
       <AddSite/>
       <SiteForm/>
        </div>
    );
}
export default Site;