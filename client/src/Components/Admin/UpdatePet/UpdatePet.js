import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import './updatepet.css'

export default function UpdatePet() {
    const [pet, setPet] = useState({});
    const search = useLocation().search;
    const searchParams = new URLSearchParams(search);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPetDetails = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/petsDetail/${searchParams.get('petid')}`
                );
                setPet(response.data.pet);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPetDetails();
    }, []); // Empty dependency array to run only once when component mounts

    const updatePetDetails = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:5000/pet/update/${searchParams.get('petid')}`,
                pet);
            alert('Updated Successfully');
              navigate('/admin/viewpets');
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPet((prevPet) => ({
            ...prevPet,
            [name]: value,
        }));
    };

    return (
        <div className="container" id='updatepetform'>
            <form className="row justify-content-center" onSubmit={updatePetDetails}>
                <div className="update-pet-card">
                    <div className="" id="pet">
                        <h4 id='editpettitle'>Edit Pet Details</h4>
                        <input
                            type="text"
                            name="_id"
                            className="form-control"
                            value={pet._id || ''}
                            required
                            hidden
                        />
                        <div className='d-flex'>
                            <div className='clo-lg-6'>
                                <img src={pet.photo} alt="..." className="img-fluid" id="pet-image" />
                            </div>
                            <div className='ms-3 col-lg-6'>
                                <label htmlFor="pet_name" className="form-label">
                                    Pet Name
                                </label>
                                <input
                                    type="text"
                                    name="pet_name"
                                    id="pet_name"
                                    className="form-control"
                                    value={pet.pet_name || ''}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="breed" className="form-label">
                                    Breed
                                </label>
                                <input
                                    type="text"
                                    name="breed"
                                    id="breed"
                                    className="form-control"
                                    value={pet.breed || ''}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="age" className="form-label">
                                    Age
                                </label>
                                <input
                                    type="text"
                                    name="age"
                                    id="age"
                                    className="form-control"
                                    value={pet.age || ''}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="gender" className="form-label">
                                    Gender
                                </label>
                                <input
                                    type="text"
                                    name="gender"
                                    id="gender"
                                    className="form-control"
                                    value={pet.gender || ''}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="desc" className="form-label">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    name="desc"
                                    id="desc"
                                    className="form-control"
                                    value={pet.desc || ''}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="stauts" className="form-label">
                                    Status
                                </label>
                                <input
                                    type="text"
                                    name="status"
                                    id="status"
                                    className="form-control"
                                    value={pet.status || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" id='update-btn' className="btn btn-primary w-100 ms-0">
                        Update Pet Details
                    </button>
                </div>
            </form>
        </div>
    );
}
