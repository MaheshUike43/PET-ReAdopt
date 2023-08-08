import React, { useContext, useEffect, useState } from 'react'
import './AdminHeader.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from './pet-logo.png'
import image from './Pets_Bg.jpg'

export default function AdminHeader() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear()
    console.log("Logout Success")
    navigate("/home");
    navigate(0);
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
              <Link className="nav-link" to='/admin/addpets'>Add Pets</Link>
              <Link className="nav-link" to='/admin/allpets'>Pets</Link>
              <Link className="nav-link" to='/admin/allusers'>Users</Link>
              <Link className="nav-link" to='/admin/allrequests'>Adoption Request</Link>
              <button className='btn btn-dark' onClick={() =>logout()}>
                Logout
              </button>
            </div>
          </nav>
        </div>
        {/* <div className='row justify-content-center'>
            <img className='img-fluid' src={image} id='home-img' alt="..." />
            <h1 className='slogan'>Open Your Heart, Open Your Home <br /> Adopt a Rescue Pet</h1>
        </div> */}
      </div>
    </div >
  )
}
