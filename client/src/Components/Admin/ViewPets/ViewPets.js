import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import '../ViewPets/viewpets.css';

export default function ViewPets() {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const [selectedPetType, setSelectedPetType] = useState('');

    useEffect(() => {
        const displayPetsDetails = async () => {
            try {
                const response = await axios.get("http://localhost:5000/allPetsDetail");
                const petsData = response.data.allpets;
                setPets(petsData);
                console.log(petsData) // Update the state with the fetched pets data
            } catch (error) {
                console.error(error);
            }
        };

        displayPetsDetails();
    }, []);

    const deletePet = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/pet/delete/${id}`);
            alert("Deleted");
            // Get the latest list of pets from the api
            const response = await axios.get("http://localhost:5000/allPetsDetail");
            const petsData = response.data.allpets;
            setPets(petsData);
        } catch (error) {
            console.error(error);
        }
    };
    

    // Filter pets based on the selected pet type
    const filteredPets = selectedPetType ? pets.filter((pet) => pet.pet_type === selectedPetType) : pets;

    const handlePetTypeChange = (e) => {
        setSelectedPetType(e.target.value);
    };

    return (
        <div className='container'>
            <div className="row">
                <h1 id='viewpets-title'>All Pets</h1>
                <div className="filter-container">
                    <label htmlFor='petTypeSelect' className='form-label'>
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
                <table className="table table-bordered border-dark mt-5">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#</th>
                            <th scope="col">Pet Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Breed</th>
                            <th scope="col">Age</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {filteredPets.map((pet, index) => {
                        return (
                            <tbody>
                                <tr className='text-center'>
                                    <th scope="row" key={pet._id}>{index + 1}</th>
                                    <td><img className='pet-img' src={pet.photo} alt="..." /></td>
                                    <td>{pet.pet_name}</td>
                                    <td>{pet.breed}</td>
                                    <td>{pet.age}</td>
                                    <td>{pet.status}</td>
                                    <td className=''>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button id="btn-ad-view" className="btn" onClick={() => navigate(`/user/petprofile?petid=${pet._id}`)}>VIEW</button>
                                            <button id="btn-ad-edit" className="btn" onClick={() => navigate(`/admin/updatepet?petid=${pet._id}`)}>EDIT</button>
                                            <button id="btn-ad-delete" className="btn" onClick={() => deletePet(pet._id)}>DELETE</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        </div>
    )
}
