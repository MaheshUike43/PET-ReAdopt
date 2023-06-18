import React, { useEffect, useState } from 'react'
import './petprofile.css'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios';

export default function PetProfile() {
    // const navigate = useNavigate();
    const [pet, setPet] = useState([]);
    const search = useLocation().search;
    const searchParams = new URLSearchParams(search);

    useEffect(() => {
        const petDetails = async () => {
            try {
                const fetchPet = await axios.get(
                    `http://localhost:5000/petsDetail/${searchParams.get('petid')}`
                );
                setPet(fetchPet.data.pet);
            } catch (error) {
                console.log(error);
            }
        };
        petDetails();
    }, []);
    return (
        <div className="container" id='pet-profile'>
            <div className="row justify-content-center">
                <h4 id='pet-info-title' >About <span id='petname'>{pet.pet_name}</span></h4>
                <div className='col-lg-12' id='pet-card'>
                    <h6 className='visually-hidden'>{pet._id}</h6>
                    <img src={pet.photo} alt="..." className='img-fluid' id='pet-image' />
                    <h5>Pet Name: {pet.pet_name}</h5>
                    <h5>Breed: {pet.breed}</h5>
                    <h5>Age: {pet.age}</h5>
                    <h5>Gender: {pet.gender}</h5>
                </div>
            </div>
        </div>
    )
}
