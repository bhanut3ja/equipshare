import React from "react";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Autocomplete from '@mui/material/Autocomplete';
import './EditForm.css';
 


const EditForm = ()=>{

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 }
    ]
    return(
        <>
        <div className="EditSites">
      <div className="EditSite">
       <div className="Title">
        <h4>EditSite</h4>
       </div>
        
       </div>
      </div>
      <div className="EditForms">
      <div className="EditForm">
       <div className="Title">
       <div className="Textfield">
       <p>SiteName:</p>
       <TextField label="SiteName" id="outlined-size-normal" color="grey"    size="small" />
       </div>
       <div className="field">
       <p>Type of Site:</p>
        <div className="CheckBox">
        <FormControlLabel
            control={
              <Checkbox name="RMC Plant" color="default" />
            }
            label="RMC Plant"
          />
          <FormControlLabel
            control={
              <Checkbox name="Contraction Site" color="default" />
            }
            label="Contraction Site"
          />
          <FormControlLabel 
            control={
              <Checkbox name="Yard" color="default"/>
            }
            label="Yard"
          />
        </div>
       </div>
       <div className="Textfield">
       <p>Site User:</p>
       <Autocomplete
      disablePortal
      id="combo-box-demo"
      color="grey"
      sx={{width:250}}
      options={top100Films}
      renderInput={(params) => <TextField {...params} color="grey" label="Site User" size="small" />}
    />
       </div>
        
       </div>
       <div className="Title">
       <div className="Textfield">
       <p>SiteAddress:</p>
       <TextField label="SiteAddress" id="outlined-size-normal"  color="grey" size="small" />
       </div>
       <div className="Textfield">
       <p>City:</p>
       <Autocomplete
      disablePortal
      color="grey"
      id="combo-box-demo"
      sx={{width:250}}
      options={top100Films}
      renderInput={(params) => <TextField {...params} color="grey" id="outlined" label="City" size="small" />}
    />
       </div>
       <div className="Textfield">
       <p>State:</p>
       <Autocomplete
      disablePortal
      color="grey"
      id="combo-box-demo"
      sx={{width:250}}
      options={top100Films}
      renderInput={(params) => <TextField {...params} color="grey" id="outlined" label="State" size="small" />}
    />
       </div>
       <div className="Textfield">
       <p>Request for Wallet:</p>
       <TextField label="Request for Wallet" id="outlined-size-normal" color="grey"  size="small" />
       </div>
       </div>
       </div>
       <div className="button">
        <button>Cancel</button>
        <button>Update</button>
       </div>
      </div>
      </>
    )
}

export default EditForm;