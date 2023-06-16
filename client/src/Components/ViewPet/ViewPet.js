import React, { useEffect, useState } from 'react'
import './viewpet.css'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios';

export default function ViewPet() {
    // const navigate = useNavigate();
    const [pet, setPet] = useState([]);
    const search = useLocation().search;
    const searchParams = new URLSearchParams(search);

    useEffect(() => {
        const petDetails = async () => {
            try {
                const fetchPet = await axios.get(
                    `http://localhost:5000/petsDetail/${searchParams.get('viewpetid')}`
                );
                setPet(fetchPet.data.pet);
            } catch (error) {
                console.log(error);
            }
        };
        petDetails();
    }, []);
    return (
        <div className="mt-1 addpetform abs container">
            <form className="row justify-content-center">
                <div className='box2'>
                    <div className='' id='pet'>
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
                </div>
            </form>
        </div>
    )
}
