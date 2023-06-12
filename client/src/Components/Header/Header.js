import React, { useEffect, useState } from 'react'
import '../Header/Header.css'
import { Link, useNavigate } from 'react-router-dom'

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
      <div className='logo'>
        <img className='img-fluid' src='https://media.istockphoto.com/id/1445196818/photo/group-of-cute-pets-on-white-background-banner-design.jpg?b=1&s=170667a&w=0&k=20&c=iQ527QsrVbpECw-3b8GQVw0YD5FhBoorJzFPYQSw_40=' alt='Logo' />
      </div>
      <div className='col-lg-12'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid justify-content-around">
            <div className="navbar-nav">
              <Link className="nav-link" to='/'>Home</Link>
              <Link className="nav-link" to='/pets'>Pets</Link>
              <Link className="nav-link" to='/addpets'>Add Pets</Link>
              <Link className="nav-link" to='/adopt'>Adopt</Link>
              <Link className="nav-link" to='/rescue'>Rescue</Link>
              <Link className="nav-link" to='/contact'>Contact</Link>
              <button className='btn btn-primary' onClick={() => SignIn()}>
                {isLoggedIn ? "Log Out" : "Log In"}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div >
  )
}
