import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Pets/Pets.css';
import Header from '../Header/UserHeader';

export default function Pets() {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [selectedPetType, setSelectedPetType] = useState('');

  useEffect(() => {
    const displayPetsDetails = async () => {
      try {
        const response = await axios.get("http://localhost:5000/allPetsDetail");
        const petsData = response.data.allpets;
        setPets(petsData); // Update the state with the fetched pets data
      } catch (error) {
        console.error(error);
      }
    };

    displayPetsDetails();
  }, []);


  // Filter pets based on the selected pet type
  const filteredPets = selectedPetType ? pets.filter((pet) => pet.pet_type === selectedPetType) : pets;

  const handlePetTypeChange = (e) => {
    setSelectedPetType(e.target.value);
  };

  return (
    <div className="container" id='pets'>
      <div className='row'>
        <Header />
        <h1 className="pt-4 fw-bolder text-center" id='title'>
          Pets for Adoption
        </h1>
        <div className="filter-container">
          <label htmlFor="petTypeSelect" className="form-label">
            Select Pet Type:
          </label>
          <select
            className="form-select"
            id="petTypeSelect"
            value={selectedPetType}
            onChange={handlePetTypeChange}
          >
            <option value="">All</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Cow">Cow</option>
            <option value="Bird">Bird</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="row mt-3">
          {filteredPets.map((pet, index) => (
            <div className="col-lg-4 mb-4" key={pet._id}>
              <div className="card">
                <img src={pet.photo} className="card-img-top img-fluid px-3 pt-3" alt="..." id="pet-img" />
                <div className="card-body">
                  <h4 className="card-title">{pet.pet_name}</h4>
                  <p className="card-text">
                    <b>Breed: </b> {pet.breed}
                  </p>
                  <p className="card-text">
                    <b>Age: </b> {pet.age}
                  </p>
                  <p className="card-text">
                    <b>Gender: </b> {pet.gender}
                  </p>
                  <p className="card-text">
                    <b>Status: </b> {pet.status}
                  </p>
                  <div className="d-flex justify-content-between">
                    <button id="btn-adopt" className="btn ms-0" onClick={() => navigate(`/user/adopt?petid=${pet._id}`)}>ADOPT</button>
                    <button id="btn-view" className="btn" onClick={() => navigate(`/user/petprofile?petid=${pet._id}`)} > VIEW </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
