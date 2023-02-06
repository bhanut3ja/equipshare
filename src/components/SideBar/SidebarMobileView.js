import React, { useState } from 'react';
import './SidebarMobileView.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CgFormatJustify } from "react-icons/cg";
import { NavLink , Link } from "react-router-dom";
import { AiOutlineDashboard } from 'react-icons/ai';
import { BiListUl, BiCreditCard } from 'react-icons/bi';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FiMapPin, FiCreditCard } from 'react-icons/fi';
import { IoWalletOutline } from 'react-icons/io5';
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs';
import { ProSidebarProvider,  Menu, MenuItem, SubMenu , sidebarClasses,menuClasses} from 'react-pro-sidebar';



function MobileView( ) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='Icon' onClick={handleShow}>
                <CgFormatJustify size={30} />
            </div>

            <Offcanvas show={show} onHide={handleClose} scroll="true" backdrop="true">
                <Offcanvas.Header closeButton className='headerofSidebar'>
                    <Offcanvas.Title>EQUIPSHERE</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                    <ProSidebarProvider>
                    <Menu rootStyles={{   [`.${menuClasses.button}`]:{ marginBottom:"0.3px",borderBottom:" 0.1px solid rgba(145, 141, 141, 0.484)",borderTop: "0.01px solid rgba(145, 141, 141, 0.484)", ":hover":{background:'rgba(155, 152, 152, 0.456)', color:'white'} } }} >
                      
                    <MenuItem   routerLink={<Link to="/Dashboard" />} icon={<AiOutlineDashboard  size={25} />}> Dashboard</MenuItem>
                        <SubMenu    icon={<BiListUl size={25} />} label="Site">
                        <MenuItem rootStyles={{   }} routerLink={<Link to="/Site" />} > Site</MenuItem>
                             
                        </SubMenu>
                        <SubMenu   icon={<BiCreditCard size={25} />} label="Rental">
                        <MenuItem rootStyles={{   }} routerLink={<Link to="/Rental" />} > Rental</MenuItem>
                             
                        </SubMenu>
                        <MenuItem   routerLink={<Link to="/Equipment" />} icon={<CiDeliveryTruck size={25} />}> Equipment</MenuItem>
                        <MenuItem   routerLink={<Link to="/Maps" />} icon={<FiMapPin size={25} />}> Maps</MenuItem>
                        <MenuItem   routerLink={<Link to="/Reports" />} icon={<FiCreditCard size={22} />}> Reports</MenuItem>
                        <MenuItem   routerLink={<Link to="/Wallet" />} icon={<IoWalletOutline size={25} />}> Wallet</MenuItem>
                        <MenuItem   routerLink={<Link to="/E-logs" />} icon={<BsReverseLayoutTextWindowReverse size={20}/>}> E-logs</MenuItem>
                        <SubMenu    icon={<BiListUl size={25} />} label="Rent Now">
                        <MenuItem    routerLink={<Link to="/RentNow" ></Link>} > Categories</MenuItem>
                        <MenuItem    routerLink={<Link to="/RentNow1" ></Link>} >Boom Cranes Lifts</MenuItem>
                        <MenuItem    routerLink={<Link to="/RentNow2" ></Link>} >Forklifts & Material Handling</MenuItem>
                        <MenuItem    routerLink={<Link to="/RentNow3"></Link>} >Equipment Capacity</MenuItem>
                        </SubMenu>
                    </Menu>
                    </ProSidebarProvider>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MobileView;