import React, { useEffect, useState } from 'react';
import './Adopt.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function AddPets() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/adopt-request', {
        user_id: user._id,
        name: user.name,
        phone_number: user.phone_number,
        email: user.email,
        address: user.address,
        pet_id: pet._id,
        photo: pet.photo,
        pet_name: pet.pet_name,
        breed: pet.breed,
        age: pet.age,
        gender: pet.gender,
      });

      alert('Request Submitted Successfully');
    } catch (error) {
      console.log(error);
      alert('Request Failed');
    }
  };

  const [pet, setPet] = useState({});
  const [user, setUser] = useState({});
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);

  useEffect(() => {
    const petDetails = async () => {
      try {
        const fetchPet = await axios.get(
          `http://localhost:5000/petsDetail/${searchParams.get('petid')}`
        );
        setPet(fetchPet.data.pet);

        const fetchUser = localStorage.getItem('user');
        if (fetchUser) {
          const parsedObject = JSON.parse(fetchUser);
          setUser(parsedObject);
        }
      } catch (error) {
        console.log(error);
      }
    };

    petDetails();
  }, []);

  return (
    <div className=" container" id='adoptpetform'>
      <form className="row justify-content-center" onSubmit={handleSubmit}>
        <div className='' id='adopt-pet-card'>
          <h1 className='mb-4' id='ad-req-title' >Adoption Request Form</h1>
          <div className='mb-4' id='user'>
            <h4>Adopter</h4>
            <input
              type='text'
              name='userId'
              className='form-control'
              value={user._id}
              required
              hidden
            />
            <label htmlFor='name' className='form-label'>
              Adopter Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='form-control'
              value={user.name}
              required
              disabled
            />
            <label htmlFor='mobile' className='form-label'>
              Mobile No.
            </label>
            <input
              type='tel'
              name='mobile'
              id='mobile'
              className='form-control'
              value={user.phone_number}
              required
              disabled
            />
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='form-control'
              value={user.email}
              required
              disabled
            />
            <label htmlFor='address' className='form-label'>
              Address
            </label>
            <input
              type='text'
              name='address'
              id='address'
              className='form-control'
              value={user.address}
              required
              disabled
            />
          </div>
          <div className='' id='adopt-pet'>
            <h4>Pet Details</h4>
            <input
              type='text'
              name='petId'
              className='form-control'
              value={pet._id}
              required
              hidden
            />
            <div>
              <img src={pet.photo} alt="..." className='img-fluid' id='pet-image' />
            </div>
            <label htmlFor='pname' className='form-label'>
              Pet Name
            </label>
            <input
              type='text'
              name='pet_name'
              id='pname'
              className='form-control'
              value={pet.pet_name}
              required
              disabled
            />
            <label htmlFor='breed' className='form-label'>
              Breed
            </label>
            <input
              type='text'
              name='breed'
              id='breed'
              className='form-control'
              value={pet.breed}
              required
              disabled
            />
            <label htmlFor='age' className='form-label'>
              Age
            </label>
            <input
              type='text'
              name='age'
              id='age'
              className='form-control'
              value={pet.age}
              required
              disabled
            />
            <label htmlFor='gender' className='form-label'>
              Gender
            </label>
            <input
              type='text'
              name='gender'
              id='gender'
              className='form-control'
              value={pet.gender}
              required
              disabled
            />
          </div>
          <button type='submit' id='req-btn' className='btn btn-success m-0 mt-4 w-100'>
            Submit Request
          </button>
        </div>
        </form>
    </div>
  );
}

