import React from "react";
import TextField from '@mui/material/TextField';
import './NewUsers.css';
import { Link } from "react-router-dom";
 


const NewUsers = () => {
     
     
    return (
        <>
        <div className="AddSites">
      <div className="AddSite">
       <div className="SitePresenter">
       <Link to="/Site" className="Link"> <button>Back to AddSite</button></Link> 
       </div>
       <div className="SitePresenter">
         <Link to="/Users" className="Link"> <button>Add / Done</button></Link>
       </div>
       </div>
      </div>
        <div className="NewUser">
        <div className="NewUsers">
        <div className="Users">
          <h3>New Users</h3>
        </div>
            <div className="Title">
                <div className="Textfield">
                    <p>SiteName:</p>
                    <TextField label="SiteName" id="outlined-size-normal" color="grey" size="small" />
                </div>
                <div className="Textfield">
                    <p>SiteAddress:</p>
                    <TextField label="SiteAddress" id="outlined-size-normal" color="grey" size="small" />
                </div>
                <div className="Textfield">
                    <p>Request for Wallet:</p>
                    <TextField label="Request for Wallet" id="outlined-size-normal" color="grey" size="small" />
                </div>
            </div>
            <div className="Title Title2">
                <div className="Textfield">
                    <p>SiteAddress:</p>
                    <TextField label="SiteAddress" id="outlined-size-normal" color="grey" size="small" />
                </div>
                <div className="Textfield">
                    <p>Request for Wallet:</p>
                    <TextField label="Request for Wallet" id="outlined-size-normal" color="grey" size="small" />
                </div>
            </div>
</div>
        </div>
        </>
    )
}

export default NewUsers;