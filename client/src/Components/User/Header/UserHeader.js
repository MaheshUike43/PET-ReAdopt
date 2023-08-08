import React, { useEffect, useState } from 'react'
import './UserHeader.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from './pet-logo.png'

export default function UserHeader() {

  const navigate = useNavigate();
  // const location = useLocation();


  const logout = (e) => {
    e.preventDefault();
    try {

      // localStorage.removeItem('user');
      localStorage.clear()
      console.log("Logout Success")
      navigate("/home");
      navigate(0);
      // console.log(location.pathname)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='header container'>
      <div className='row'>
        <div className='col-lg-3'>
          <img className='img-fluid m-0' id='logo-img' src={logo} alt="..." />
        </div>
        <div className='col-lg-9 float-end'>
          <nav className="navbar navbar-expand-lg" id='menu'>
            <div className="navbar-nav">
              <Link className="nav-link" to='/user/pets'>Pets</Link>
              <Link className="nav-link" to='/user/contact'>Contact</Link>
              <button className='btn btn-dark' onClick={logout}>
                Logout
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div >
  )
}
