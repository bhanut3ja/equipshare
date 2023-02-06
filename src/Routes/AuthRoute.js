
import { Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar/Sidebar";
import SidebarMobileView from "../components/SideBar/SidebarMobileView";
import { ProSidebarProvider } from 'react-pro-sidebar';
// import Navbars from "../components/NavBar/Navbar";
import Wallet from '../pages/Wallet/Wallet'
// Site 
import Site from "../pages/SiteComponents/CompanySite/Site";
import Users from "../pages/SiteComponents/CompanySite/Users";
import Edit from "../pages/SiteComponents/CompanySite/Edit";
import UserNameTable from "../pages/SiteComponents/Users/UserNameTable";
import Invoices from "../pages/SiteComponents/SiteSummary/Invoice";
import Geofence from "../pages/SiteComponents/SiteSummary/Geofence";
import Statement from "../pages/SiteComponents/SiteSummary/Statement";
import EquipmentSiteSummary from "../pages/SiteComponents/SiteSummary/EquipmentSiteSummary";
import Categories from "../pages/Rent Now/Categories";
import BoomCranesLifts from "../pages/Rent Now/BoomCranesLifts";
import ForkliftsAndMaterial from "../pages/Rent Now/ForkliftsAndMaterial";
import EquipmentDetails from "../pages/Rent Now/EquipmentDetails";

import Elogs from "../pages/E-logs/E-logs";

//Ye meine update kiya hai
import Dashboard from "../pages/Dashboard/Dashboard";
import Maps from "../pages/Map/Maps";
import Equipment from "../pages/Equipment/Equipment";
import EquipmentTripTab from '../pages/Equipment/EquipmentTripTab/EquipmentTripTab';
import EquipmentFuelTab from '../pages/Equipment/EquipmentFuelTab/EquipmentFuelTab';
import EquipmentServiceTab from '../pages/Equipment/EquipmentServiceTab/EquipmentServiceTab';
import EquipmentServiceHistoryTab from '../pages/Equipment/EquipmentServiceTab/EquipmentServiceHistoryTab';
import EquipmentServiceRequestTab from '../pages/Equipment/EquipmentServiceTab/EquipmentServiceRequestTab';
import EquipmentEngineTab from '../pages/Equipment/EquipmentEngineTab/EquipmentEngineTab';
import EquipmentEngineGeneralTab from '../pages/Equipment/EquipmentEngineTab/EquipmentEngineGeneralTab';
import EquipmentEngineOilTab from '../pages/Equipment/EquipmentEngineTab/EquipmentEngineOilTab';
import EquipmentEngineOBDTab from '../pages/Equipment/EquipmentEngineTab/EquipmentEngineOBDTab';
import EquipmentEngineFilterTab from '../pages/Equipment/EquipmentEngineTab/EquipmentEngineFilterTab.js';
import EquipmentEngineSummaryTab from '../pages/Equipment/EquipmentEngineTab/EquipmentEngineSummaryTab';
import AddEquipment from "../pages/Equipment/AddEquipment/AddEquipment";
import UpcomingServices from '../pages/Equipment/UpcomingServices/UpcomingServices';
//Ye meine update kiya hai






// import Reports from "../pages/Reports";
// import Wallet from "../pages/Wallet";
// import RentNow from "../pages/RentNow";




// Rental Routes
import Rental from "../pages/Rental/Rental";
import LendingRequest from "../pages/Rental/LendingRequest";
import BorrowingRequest from "../pages/Rental/BorrowingRequest";
import NewLendingRequest from "../pages/Rental/NewLendingRequest";
import RentalNotification from "../pages/Rental/Notification/RentalNotification";
import NotificationCancelling from "../pages/Rental/Notification/NotificationCancelling";
import NotificationForm from "../pages/Rental/Notification/NotificationForm";
import NotificationDispatch from "../pages/Rental/Notification/NotificationDispatch";


// Report Routes
import Reports from "../pages/Reports/Reports";
import ReportJobSite from "../pages/Reports/ReportJobSite";
import Footer from "../components/Footer/Footer";

function AuthRoute() {
  return (
    <div className="AuthRoute">

      {/* <Navbars /> */}


      <div className="Dash">
        <div className="SidebarIcon">
          <SidebarMobileView />
        </div>

        <div className="Sidebar">

          <ProSidebarProvider><SideBar /></ProSidebarProvider>

        </div>
        <div className="OtherComponents">
          <div className="Route-div">
            <Routes>
              {/* SideBar Routes */}

              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Wallet" element={<Wallet />} />
              <Route path="/Site" element={<Site />} />
              <Route path="/Rental" element={<Rental />} />
              <Route path="/Equipment" element={<Equipment />} />
              <Route path="/Maps" element={<Maps />} />

              <Route path="/E-logs" element={<Elogs />} />
              <Route path="/RentNow" element={<Categories />} />

              {/* others Routes */}


              {/* others Routes */}
              <Route path="/AddNewUser" element={<Users />} />
              <Route path="/Edit" element={<Edit />} />
              <Route path="/EquipmentSiteSummary" element={<EquipmentSiteSummary />} />
              <Route path="/Invoices" element={<Invoices />} />
              <Route path="/Geofence" element={<Geofence />} />
              <Route path="/Statement" element={<Statement />} />
              <Route path="/Users" element={<UserNameTable />} />
              <Route path="/RentNow1" element={<BoomCranesLifts />} />
              <Route path="/RentNow2" element={<ForkliftsAndMaterial />} />
              <Route path="/RentNow3" element={<EquipmentDetails />} />
              {/* <Route path="*" element={<> not found</>} /> */}

              {/* //Ye Routes meine add kiye hai */}
              
              <Route path="/EquipmentTripTab" element={<EquipmentTripTab />} />
              <Route path="/EquipmentFuelTab" element={<EquipmentFuelTab />} />
              <Route path="/EquipmentServiceTab" element={<EquipmentServiceTab />} />
              <Route path="/EquipmentServiceHistoryTab" element={<EquipmentServiceHistoryTab />} />
              <Route path="/EquipmentServiceRequestTab" element={<EquipmentServiceRequestTab />} />
              <Route path="/EquipmentEngineTab" element={<EquipmentEngineTab />} />
              <Route path="/EquipmentEngineGeneralTab" element={<EquipmentEngineGeneralTab />} />
              <Route path="/EquipmentEngineOilTab" element={<EquipmentEngineOilTab />} />
              <Route path="/EquipmentEngineOBDTab" element={<EquipmentEngineOBDTab />} />
              <Route path="/EquipmentEngineFilterTab" element={<EquipmentEngineFilterTab />} />
              <Route path="/EquipmentEngineSummaryTab" element={<EquipmentEngineSummaryTab />} />
              <Route path="/AddEquipment" element={<AddEquipment />} />
              <Route path="/UpcomingServices" element={<UpcomingServices />} />
              {/* //Ye Routes meine add kiye hai */}

              {/* Rental Routings */}
              <Route path="/Rental" element={<Rental />} />
              <Route path="/Rental/LendingRequest" element={<LendingRequest />} />
              <Route path="/Rental/LendingRequest/NewLendingRequest" element={<NewLendingRequest />} />
              <Route path="/Rental/BorrowingRequest" element={<BorrowingRequest />} />
              <Route path="/Rental/Notification/Acceptance" element={<RentalNotification />} />
              <Route path="/Rental/Notification/Cancellation" element={<NotificationCancelling />} />
              <Route path="/Rental/Notification/CheckList-Form" element={<NotificationForm />} />
              <Route path="/Rental/Notification/Dispatch" element={<NotificationDispatch />} />


              {/* Report Routings */}
              <Route path="/Reports" element={<Reports />} />
              <Route path="/Reports/Utilization" element={<Reports />} />
              <Route path="/Reports/Jobsite" element={<ReportJobSite />} />
              <Route path="/Reports/FuelConsumption" element={<Reports />} />
              <Route path="/Reports/Maintenance" element={<Reports />} />
              <Route path="/Reports/MapView" element={<Reports />} />

            </Routes>
          </div>
          <div className="footer-div">
            <Footer />
          </div>
        </div>

      </div>

    </div>
  );
}

export default AuthRoute;
