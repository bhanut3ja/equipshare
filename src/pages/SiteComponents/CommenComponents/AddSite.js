import React from "react";
import './AddSite.css';
import { Link } from "react-router-dom";
const AddSite = ()=>{
    return(
      <div className="AddSites">
      <div className="AddSite">
       <div className="Title">
        <h4>Add Site</h4> 
       </div>
       <div className="SitePresenter">
         <Link to="/AddNewUser" className="Link"> <button>Add / Done</button></Link>
         <Link to="/Edit" className="Link"> <button>Edit</button></Link>
       </div>
       </div>
      </div>
    )
}

export default AddSite;