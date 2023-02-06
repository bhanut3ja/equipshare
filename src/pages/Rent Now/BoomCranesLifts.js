import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './Categories.css'
const BoomCranesLifts = () => {

  const top100Films = [
    { label: '1' },
    { label: '2' },
    { label: '3' },
    { label: '4' },
    { label: '5' },
    { label: "6" },
    { label: '7' }
  ]
  return (
    <>
      <div className="RentCategories">
        <div className="RentCategoriesNav">
          <div className="RentCategoriesNavbar">
            <div className="Title">
              <h4>Rent Now</h4>
            </div>
            <div className="RentCategoriesPresenter">
              <p>Home ></p>
              <p> Rent Now</p>
            </div>
          </div>
        </div>
        <div className="SelectRentCategories">
          <div className="SelectRentCategorie">
            <div className="Title">
              <div className="Dropdown">
                <span>City:</span>
                <div>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    sx={{width:250}}
                    color="grey"
                    options={top100Films}
                    renderInput={(params) => <TextField {...params} color="grey" label="City Name" size="small" />}
                  />
                </div>
              </div>
              <div className="Dropdown">
                <span>Site:</span>
                <div>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    sx={{width:250}}
                    color="grey"
                    options={top100Films}
                    renderInput={(params) => <TextField {...params} color="grey" label="Site Name" size="small" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Contain">
               <h4 className="topheader">Boom Cranes Lifts</h4>
               <div className="First-Div">
                  <div className="Div1">
                     <div className="tag">
                        <img src="" alt=""/>
                     </div>
                     <div className="paragraph">
                     <p>  Earth Moving Equipment</p>
                  </div>
                  </div>
                  <div className="Div1">
                     <div className="tag">
                     <img src="" alt=""/>
                     </div>
                     <div className="paragraph">
                     <p>  Arial Lifts</p>
                  </div>
                  </div>
                  <div className="Div1">
                     <div className="tag">
                     <img src="" alt=""/>
                     </div>
                     <div className="paragraph">
                     <p>Forklifts & Material Handling</p>
                  </div>
                  </div>
                  <div className="Div1">
                     <div className="tag">
                     <img src="" alt=""/>
                     </div>
                     <div className="paragraph">
                     <p>Concrete & Masonary</p>
                  </div>
                  </div>
                  <div className="Div1">
                     <div className="tag">
                     <img src="" alt=""/>
                     </div>
                     <div className="paragraph">
                     <p> Compaction</p>
                  </div>
                  </div>
                  <div className="Div1">
                     <div className="tag">
                     <img src="" alt=""/>
                     </div>
                     <div className="paragraph">
                     <p>  Power of HVSE</p>
                  </div>
                  </div>
                  
                  <div className="Div1">
                     <div className="tag">
                     <img src="" alt=""/>
                     </div>
                     <div className="paragraph">
                     <p>Safety & Shoring</p>
                  </div>
                  </div>
               </div>
               </div>
      </div>
      
    </>
  );
}
export default BoomCranesLifts;