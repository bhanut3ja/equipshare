import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css';
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, login } from '../../ReduxTwo/Actions/Action';

const Login = () => {

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [error, SetError] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [])

  const HandleLogin = (e) => {
    e.preventDefault();
    const user = {
      email, password
    }
    dispatch(login(user));
  }

  if (auth.authenticate) {
    navigate(`/Dashboard`);
  }

  return (
    <>
      <div className="Login-Component mb-5">
        <div className="Logo-Component">
          <h1 className='Logo'>Logo</h1>
        </div>
        <form  >
          <div className="Form-Component">
            <p className='Heading'>Login with Equipshare</p>
            <input type="mail" className='InputFields' placeholder='email@address.com' name='email'
              value={email} onChange={(e) => SetEmail(e.target.value)} />
            {/* {<p className='validation-text'>{errors.email}</p>} */}
            <br />
            <input type="text" className='InputFields' placeholder='password' name='password'
              value={password} onChange={(e) => SetPassword(e.target.value)} />
            {/* {<p className='validation-text'>{errors.password}</p>} */}

            <div className="Captcha">
              <div className="CaptchaComponent">DS5R8XH</div>
              <input type="text" className='CaptchaInput' placeholder='Enter Captcha' name='captcha' />
            </div>
            {/* {<p className='validation-text'>{errors.captcha}</p>} */}
            <button className='LoginButton' onClick={HandleLogin} >Login</button>

            <div className="RememberFooter">
              <p style={{ fontSize: "13px" }}><i className="fa fa-check-circle" aria-hidden="true"></i> Remember me</p>
              <Link to="/forgetpass" className='ForgotPass'>Forgot Password?</Link>
            </div>
            <div className="RememberFooter">
              <Link to="/signup" className='ForgotPass'>Create an Account</Link>
            </div>
          </div>
        </form>
      </div>
      {/* <pre>{JSON.stringify(formValue, undefined, 2)}</pre> */}
    </>
  )
}

export default Login