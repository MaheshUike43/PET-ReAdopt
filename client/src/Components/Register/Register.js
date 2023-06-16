import React, { useState } from 'react';
import '../Register/register.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    phone_number: '',
    address: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { name, email, password, cpassword, phone_number, address } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== cpassword) {
      alert("Password not match")
    }

    try {
      await axios.post('http://localhost:5000/register', formData);
      setFormData({
        name: '',
        email: '',
        password: '',
        cpassword: '',
        phone_number: '',
        address: ''
      });
      alert('User Registration Successful');
      navigate('/login')
    } catch (error) {
      alert('Email already registered');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='regform container'>
      <form className='row justify-content-center' onSubmit={handleSubmit}>
        <div className='box1'>
          <h1 id='reg-title'>Registration</h1>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='form-control'
            value={name}
            onChange={handleChange}
            required
          />

          <div className='row'>
            <div className='col-lg-6'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='form-control'
                value={email}
                onChange={handleChange}
                required
              />
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <div className='password-input d-flex'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  id='password'
                  className='form-control'
                  value={password}
                  minLength={8}
                  maxLength={20}
                  onChange={handleChange}
                  required
                />
                <span className='password-toggle py-2 px-3' onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
            </div>
            <div className='col-lg-6'>
              <label htmlFor='phone_number' className='form-label'>
                Mobile Number
              </label>
              <input
                type='tel'
                name='phone_number'
                id='phone_number'
                className='form-control'
                value={phone_number}
                maxLength={10}
                onChange={handleChange}
                required
              />
              <label htmlFor='cpassword' className='form-label'>
                Confirm Password
              </label>
              <div className='password-input d-flex'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='cpassword'
                  id='cpassword'
                  className='form-control'
                  value={cpassword}
                  minLength={8}
                  maxLength={20}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <label htmlFor='address' className='form-label'>
            Address
          </label>
          <textarea
            name='address'
            id='address'
            className='form-control'
            value={address}
            onChange={handleChange}
            required
          />
          <div className='d-flex justify-content-between'>
            <button type='submit' id='regBtn' className='btn m-0 mt-4 me-3 w-50'>
              Sign up
            </button>
            <button id='closeBtn' onClick={() => navigate('/login')} className='btn m-0 ms-3 mt-4 w-50'>
              Cancel
            </button>
          </div>
          <div className='mt-2'>
            Already registered?
            <div>
              <Link to='/login'>Sign In</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

