import { Routes, Route } from "react-router-dom";
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import ResetPass from '../components/Auth/ResetPass';
import ForgetPass from "../components/Auth/ForgetPass";

function UnAuthRoute() {
  return (
    <div className="UnAuthRoute">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgetpass' element={<ResetPass />} />
        <Route path='/resetpass' element={<ForgetPass />} />
      </Routes>
    </div>


  );
}

export default UnAuthRoute;