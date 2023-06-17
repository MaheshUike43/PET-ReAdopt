import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Login/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
  
      if (response.data.success) {
        window.alert('Login Successful..!');
        // Store the user login details in local storage
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Check if the user is an admin
        if (response.data.user.isAdmin) {
          navigate('/admin'); // Redirect to the admin menu
        } else {
          navigate('/user'); // Redirect to the user menu
        }
      } else {
        window.alert('Invalid Credentials');
      }
    } catch (error) {
      console.error(error);
      alert('Error logging in. Please try again.');
    }
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="container" id='loginform '>
        <form className="row justify-content-center" onSubmit={handleSubmit}>
          <div className="box">
            <h1 className="login-title">Login</h1>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="Email"
              id="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className='password-input d-flex'>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                className="form-control"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className='password-toggle py-2 px-3' onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
            <button type="submit" id="loginBtn" className="btn m-0 mt-4 w-100">Log In</button>
            <div className="d-flex">
              <div className="col-lg-6 mt-2 justify-content-end">
                <Link className="text-danger">
                  Forget Password
                </Link>
              </div>
              <div className="col-lg-6 mt-2 d-flex flex-column text-end " >
                I don't have an account
                <div className=''>
                  <Link to="/register">Register Here</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
