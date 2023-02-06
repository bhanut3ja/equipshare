import React from "react";
import SiteNavbar  from "../CommenComponents/SiteNavbar";
import '../CommenComponents/Pages.css'
import Slider from "../CommenComponents/Slider";
import NewUsers from "../CompanySite/NewUsers";
import UsersRights from "../CompanySite/UsersRights";
const Users =()=>{
    return(
        <div className="Site" >
       <SiteNavbar/>
       <Slider/>
       <NewUsers/>
       <UsersRights/>
        </div>
    );
}
export default Users;