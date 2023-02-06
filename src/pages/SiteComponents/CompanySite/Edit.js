import React from "react";
import SiteNavbar  from "../CommenComponents/SiteNavbar";
import '../CommenComponents/Pages.css'
import Slider from "../CommenComponents/Slider";
import EditForm from "../CompanySite/EditForm";
import AgentsTable from "../CompanySite/AgentsTable";
const Edit =()=>{
    return(
        <div className="Site" >
       <SiteNavbar/>
       <Slider/>
       <EditForm/>
       <AgentsTable/>
        </div>
    );
}
export default Edit;