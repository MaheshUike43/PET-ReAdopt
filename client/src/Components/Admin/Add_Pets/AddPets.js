import React, { useState } from 'react';
import './addpets.css';
import axios from 'axios';
import fb from '../../../firebase.js';
import Header from '../Header/AdminHeader';

export default function AddPets() {
    const [formData, setFormData] = useState({
        pet_type: '',
        pet_name: '',
        breed: '',
        age: '',
        gender: '',
        photo: '',
        desc: '',
        status: '',
    });

    const { pet_type, pet_name, breed, age, gender, desc, status } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [image, setImage] = useState(null); // Change initial state to null

    const handleImgChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const storageRef = fb.storage().ref();
        const imageRef = storageRef.child('images/' + image.name);

        try {
            await imageRef.put(image); // Upload the image to Firebase Storage
            const imageUrl = await imageRef.getDownloadURL(); // Get the image URL

            const petData = {
                ...formData,
                photo: imageUrl,
            };

            await axios.post('http://localhost:5000/pets', petData, {
                headers: {
                    token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesstoken
                }
            });

            setFormData({
                pet_type: '',
                pet_name: '',
                breed: '',
                age: '',
                gender: '',
                photo: '',
                desc: '',
                status: '',
            });

            setImage(null);

            alert('Pet added successfully');
        } catch (error) {
            console.log(error);
            alert('Error adding pet');
        }
    };

    return (
        <div className="container" id='addpetform'>
            <form className='row justify-content-center' onSubmit={handleSubmit}>
            <Header />
                <div className='' id='add-pet-card'>
                    <h1 id='newpettitle'>Add New Pets</h1>
                    <div className='d-flex'>
                        <div className="col-lg-6">
                            <label htmlFor='ptype' className='form-label'>
                                Category
                            </label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                id='ptype'
                                name='pet_type'
                                value={pet_type}
                                onChange={handleChange}
                                required
                            >
                                <option value='' disabled>
                                    Select Category
                                </option>
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>
                                <option value="Cow">Cow</option>
                                <option value="Bird">Bird</option>
                                <option value="Other">Other</option>
                            </select>
                            <label htmlFor='breed' className='form-label'>
                                Breed
                            </label>
                            <input
                                type='text'
                                name='breed'
                                id='breed'
                                className='form-control'
                                value={breed}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor='gender' className='form-label'>
                                Gender
                            </label>
                            <div className='d-flex'>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="flexRadioDefault1"
                                        value="Male"
                                        checked={gender === "Male"}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label m-0" htmlFor="flexRadioDefault1">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check ms-3">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="flexRadioDefault2"
                                        value="Female"
                                        checked={gender === "Female"}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label m-0" htmlFor="flexRadioDefault2">
                                        Female
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 ps-4">
                            <label htmlFor='pname' className='form-label'>
                                Pet Name
                            </label>
                            <input
                                type='text'
                                name='pet_name'
                                id='pname'
                                className='form-control'
                                value={pet_name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor='age' className='form-label'>
                                Age
                            </label>
                            <input
                                type='text'
                                name='age'
                                id='age'
                                className='form-control'
                                value={age}
                                onChange={handleChange}
                                required
                            />


                            <label htmlFor='status' className='form-label'>
                                Adoption Status
                            </label>
                            <div className='d-flex'>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="status"
                                        id="available"
                                        value="Available"
                                        checked={status === "Available"}
                                        onChange={handleChange}
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
                                        id="adopted"
                                        value="Adopted"
                                        checked={status === "Adopted"}
                                        onChange={handleChange}
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
                                        id="booked"
                                        value="Booked"
                                        checked={status === "Booked"}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label m-0" htmlFor="booked">
                                        Booked
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label htmlFor='photo' className='form-label'>
                        Image Link
                    </label>
                    <input
                        type='file'
                        name='photo'
                        id='photo'
                        accept='image/*'
                        className='form-control'
                        onChange={(e) => handleImgChange(e)}
                        required
                    />
                    <label htmlFor='desc' className='form-label'>
                        Pet Details
                    </label>
                    <textarea
                        name='desc'
                        id='desc'
                        className='form-control'
                        value={desc}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit' id='AddPetBtn' className='btn m-0 mt-4 w-100'>
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}
