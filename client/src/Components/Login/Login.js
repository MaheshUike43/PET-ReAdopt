import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'


export default function Login() {
  return (
    <div>
      <div className='loginform container'>
        <form className='row justify-content-center'>
          <div className="box">
            <h1 className=''>User Login</h1>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="Email" id="email" className='form-control' />
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" name="Password" id="password" className='form-control' />
            <button type="submit" id='submitBtn' className='btn btn-success m-0 mt-4 w-100'>Login</button>
            <div className='d-flex'>
              <div className='mt-2'>
                <Link to='/' className='text-danger'>Forget Password</Link>
              </div>
              <div className='mt-2 d-flex flex-column align-items-end' id='ac'>
                I don't have account
                <div>
                  <Link to='/register'>Register Here</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}
