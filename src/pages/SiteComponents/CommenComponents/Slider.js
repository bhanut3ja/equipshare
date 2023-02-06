import React ,{ useState} from "react";
import './Slider.css';
import {Link} from 'react-router-dom';
 
const Slider = ()=>{
  
    return(
      <div className="Slider">
       
       <div className="Topics">
       <Link to='/Site' className="Link"  ><h3  >Company Site</h3></Link>
        <Link to='/Users' className="Link"  ><h3  >Users</h3></Link>
       <Link to='/EquipmentSiteSummary' className="Link"  ><h3  >Site Summary</h3></Link>
       </div>
       </div>
       
    )
}

export default Slider;