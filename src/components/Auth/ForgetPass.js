import React from 'react'
import { Link } from 'react-router-dom'

const ForgetPass = () => {
    return (
        <div>
            <div className="Login-Component mb-5">
                <div className="Logo-Component">
                    <h1 className='Logo'>Logo</h1>
                </div>
                <form >
                    <div className="Form-Component">
                        <p className='Heading'>Reset Password</p>
                        <input type="email" className='InputFields' placeholder='Enter Registered Email' name='email' />
                        <br />
                        <input type="number" className='InputFields' placeholder='Enter OTP' name='email' />
                        <p className='text-end'>Resend OTP</p>


                        <input type="text" className='InputFields' placeholder='Enter Password' name='email' />
                        <br />
                        <input type="password" className='InputFields' placeholder='Confirm Password' name='email' />
                        <br />
                        {/* {<p className='validation-text'>{errors.email}</p>} */}
                        <button className='LoginButton'>Reset Password</button>
                        <div className="RememberFooter">
                            <Link to="/login" className='ForgotPass'>Back To Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgetPass