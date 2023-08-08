import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './updatepet.css'
import Header from '../Header/AdminHeader';

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
            await axios.put("http://localhost:5000/pet/update/" + searchParams.get("petid"),
                pet, {
                headers: {
                    token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesstoken
                }
            });
            alert('Updated Successfully');
            navigate('/admin/allpets');
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
            <Header />
            <form className="row justify-content-center" onSubmit={updatePetDetails}>
                <div className="" id='update-pet-card'>
                    <div className="" id="pet">
                        <h4 id='editpettitle'>Edit Pet Details</h4>
                        <input
                            type="text"
                            name="_id"
                            className="form-control"
                            value={pet._id || ''}
                            required
                            hidden
                            disabled
                        />
                        <div className='d-flex'>
                            <div className='clo-lg-6'>
                                <img src={pet.photo} alt="..." className="img-fluid" id="pet-image" />
                            </div>
                            <div className='ms-3 col-lg-6'>
                                <label htmlFor="pet_name" className="form-label mt-0">
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
                                <div className='d-flex'>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id='male'
                                            value="Male"
                                            checked={pet.gender === "Male"}
                                            onChange={handleInputChange}
                                        />
                                        <label className="form-check-label m-0" htmlFor="male">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check ms-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id='female'
                                            value="Female"
                                            checked={pet.gender === "Female"}
                                            onChange={handleInputChange}
                                        />
                                        <label className="form-check-label m-0" htmlFor="female">
                                            Female
                                        </label>
                                    </div>
                                </div>
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
                                <label htmlFor="status" className="form-label">
                                    Status
                                </label>
                                <div className='d-flex'>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="status"
                                            id='available'
                                            value="Available"
                                            checked={pet.status === "Available"}
                                            onChange={handleInputChange}
                                        />
                                        <label className="form-check-label m-0" htmlFor="available">
                                            Available
                                        </label>
                                    </div>
                                    <div className="form-check ms-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="status"
                                            id='adopted'
                                            value="Adopted"
                                            checked={pet.status === "Adopted"}
                                            onChange={handleInputChange}
                                        />
                                        <label className="form-check-label m-0" htmlFor="adopted">
                                            Adopted
                                        </label>
                                    </div>
                                    <div className="form-check ms-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="status"
                                            id='booked'
                                            value="Booked"
                                            checked={pet.status === "Booked"}
                                            onChange={handleInputChange}
                                        />
                                        <label className="form-check-label m-0" htmlFor="booked">
                                            Booked
                                        </label>
                                    </div>
                                </div>
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
