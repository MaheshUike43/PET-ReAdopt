import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from './pet-logo.png'

export default function Header() {

  let navigate = useNavigate();

  const [isLoggedIn, SetLoggedIn] = useState(false);

  const checkedLogin = () => {
    const userLogged = localStorage.getItem("user");
    if (userLogged) {
      SetLoggedIn(true);
    } else {
      SetLoggedIn(false);
    }
  }

  useEffect(() => {
    checkedLogin()
  })

  const SignIn = () => {
    if (isLoggedIn) {
      localStorage.removeItem("user");
      navigate("/")
    } else {
      navigate(`/login`);
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
              <Link className="nav-link" to='/admin/viewpets'>View Pets</Link>
              <Link className="nav-link" to='/admin/addpets'>Add Pets</Link>
              <button className='btn btn-dark' onClick={() => SignIn()}>
                {isLoggedIn ? "Log Out" : "Log In"}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div >
  )
}
