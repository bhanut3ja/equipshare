import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css';
import { useFormik } from 'formik';
import { resetSchema } from './Validation';

const initialValues = {
  email: "", captcha: ""
}

const ResetPass = () => {

  const { errors, values, handleBlur, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: resetSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  })
  return (
    <div>
      <div className="Login-Component mb-5">
        <div className="Logo-Component">
          <h1 className='Logo'>Logo</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="Form-Component">
            <p className='Heading'>Forgot Password</p>
            <input type="text" className='InputFields' placeholder='Enter your registered Email here' name='email'
              value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {<p className='validation-text'>{errors.email}</p>}
            <Link to='/resetpass'><button className='LoginButton'>Submit</button></Link>
            <div className="RememberFooter">
              <Link to="/login" className='ForgotPass'>Back To Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPass;