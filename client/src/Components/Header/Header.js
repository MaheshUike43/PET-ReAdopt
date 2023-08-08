import React, { useEffect, useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import logo from './pet-logo.png'

export default function Header() {

  let navigate = useNavigate();

  return (
    <div className='header container'>
      <div className='row'>
        <div className='col-lg-3'>
          <img className='img-fluid m-0' id='logo-img' src={logo} alt="..." />
        </div>
        <div className='col-lg-9 float-end'>
          <nav className="navbar navbar-expand-lg" id='menu'>
            <div className="navbar-nav">
              <button className='btn btn-dark' onClick={() => navigate("/login")}>
                Login
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div >
  )
}
