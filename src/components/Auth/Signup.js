import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css';
import { useFormik } from 'formik';
import { signupSchema } from './Validation'

const initialValues = {
  email: "",
  password: "",
  captcha: ""
}
const Signup = () => {

  const { errors, handleBlur, handleChange, handleSubmit, values } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <>
      <div className="Login-Component mb-5">
        <div className="Logo-Component">
          <h1 className='Logo'>Logo</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="Form-Component">
            <p className='Heading'>Signup with Equipshare</p>
            <input type="text" className='InputFields' placeholder='email@address.com' name='email'
              value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {<p className='validation-text'>{errors.email}</p>}

            <input type="text" className='InputFields' placeholder='password' name='password'
              value={values.password} onChange={handleChange} onBlur={handleBlur} />
            {<p className='validation-text'>{errors.password}</p>}
            <div className="Captcha">
              <div className="CaptchaComponent">DS5R8XH</div>
              <input type="text" className='CaptchaInput' placeholder='Enter Captcha' name='captcha' value={values.captcha} onChange={handleChange} onBlur={handleBlur} />
            </div>
            {<p className='validation-text'>{errors.captcha}</p>}

            <button className='LoginButton'>Sign Up</button>
            <div className="RememberFooter">
              <Link to="/login" className='ForgotPass'>Login to an existing account?</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup;