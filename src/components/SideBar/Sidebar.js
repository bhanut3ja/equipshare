import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiListUl, BiCreditCard, BiMenu } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiMapPin, FiCreditCard } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

    const SideBar = () => {
    const { collapseSidebar } = useProSidebar();

        const [show, setShow] = useState(false);
      

  return (
    <>

<main className={show ? 'space-toggle' : null}>
      <header className={`navheader ${show ? 'space-toggle' : null}`}>
      
          <span style={{color:'white', paddingLeft:'55px'}}>EQUIPSHARE</span>
        
          <span style={{color:'white'}} className="profile-name">William Stryker</span>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
          <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
          </div>
                        
            <Menu  rootStyles={{   [`.${menuClasses.button}`]:{ marginBottom:"0.3px",borderBottom:" 0.1px solid rgba(145, 141, 141, 0.484)",borderTop: "0.01px solid rgba(145, 141, 141, 0.484)", ":hover":{background:'rgba(155, 152, 152, 0.456)', color:'white'} } }}>
                      

                    <MenuItem   routerLink={<Link to="/Dashboard" />} icon={<AiOutlineDashboard size={25}/>}> Dashboard</MenuItem>
                        <SubMenu    icon={<BiListUl size={25} />} label="Site">
                        <MenuItem rootStyles={{ background:'rgba(0, 0, 0, 0.480)' }} routerLink={<Link to="/Site" />} > Site</MenuItem>
                             
                        </SubMenu>
                        <SubMenu   icon={<BiCreditCard size={25} />} label="Rental">
                        <MenuItem rootStyles={{ background:'rgba(0, 0, 0, 0.480)' }} routerLink={<Link to="/Rental" />} > Rental</MenuItem>
                             
                        </SubMenu>
                        <MenuItem   routerLink={<Link to="/Equipment" />} icon={<CiDeliveryTruck size={25} />}> Equipment</MenuItem>
                        <MenuItem   routerLink={<Link to="/Maps" />} icon={<FiMapPin size={25} />}> Maps</MenuItem>
                        <MenuItem   routerLink={<Link to="/Reports" />} icon={<FiCreditCard size={22} />}> Reports</MenuItem>
                        <MenuItem   routerLink={<Link to="/Wallet" />} icon={<IoWalletOutline size={25} />}> Wallet</MenuItem>
                        <MenuItem   routerLink={<Link to="/E-logs" />} icon={<BsReverseLayoutTextWindowReverse size={20}/>}> E-logs</MenuItem>
                        <SubMenu    icon={<BiListUl size={25} />} label="Rent Now">
                        <MenuItem rootStyles={{ background:'rgba(0, 0, 0, 0.480)' }}   routerLink={<Link to="/RentNow" ></Link>} > Categories</MenuItem>
                        <MenuItem rootStyles={{ background:'rgba(0, 0, 0, 0.480)' }}   routerLink={<Link to="/RentNow1" ></Link>} >Boom Cranes Lifts</MenuItem>
                        <MenuItem rootStyles={{ background:'rgba(0, 0, 0, 0.480)' }}   routerLink={<Link to="/RentNow2" ></Link>} >Forklifts & Material Handling</MenuItem>
                        <MenuItem rootStyles={{ background:'rgba(0, 0, 0, 0.480)' }}   routerLink={<Link to="/RentNow3"></Link>} >Equipment Capacity</MenuItem>
                        </SubMenu>
                    </Menu>
            
          </div>
         </nav>
        </aside>
      </main>
      
    </>
  );
};
export default SideBar;
