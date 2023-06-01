import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Pets.css'

export default function Pets() {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const displayPetsDetails = async () => {
      try {
        const response = await axios.get("http://localhost:5000/petsDetail");
        const petsData = response.data.pet;
        setPets(petsData); // Update the state with the fetched pets data
      } catch (error) {
        console.error(error);
      }
    };

    displayPetsDetails();
  }, []);

  return (
    <div className="mt-4 pets container bg-light">
      <h3 className='py-4 fw-bolder text-center'>Pets for Adoption</h3>
      <div className="row">
        {
          pets.map((pet, index) => {
            return (
              <div className="col-lg-4 mb-4">
                <div class="card" key={pet.id}>
                  <img src={pet.photo} className="card-img-top px-3 pt-3" alt="..." />
                  <div className="card-body ">
                    <h5 className="card-title">{pet.pet_name}</h5>
                    <p className="card-text"><b>Breed : </b> {pet.breed}</p>
                    <p className="card-text"><b>Age :  </b> {pet.age}</p>
                    <p className="card-text"><b>Gender :  </b> {pet.gender}</p>
                    <p className="card-text"><b>Description :  </b> {pet.desc}</p>
                    <p className="card-text"><b>Status :  </b> {pet.status}</p>
                    <button className="btn btn-primary m-0" onClick={() => navigate(`/adopt`)}>ADOPT</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}
