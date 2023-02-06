import React from "react";
import './SelectSite.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const SelectSite = ()=>{

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
      <div className="SelectSites">
      <div className="SelectSite">
       <div className="Title">
       <div>
        <h4>Select Site :</h4>
        </div>
        <div>
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      sx={{ width:250}}
      color="grey"
      options={top100Films}
      renderInput={(params) => <TextField {...params} color="grey" label="Site Name" size="small" />}
    />
    </div>
       </div>
        
       </div>
      </div>
    )
}

export default SelectSite;