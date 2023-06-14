// import React, { useState } from 'react';
// import '../Add_Pets/addpets.css'
// import axios from 'axios';
// import fb from '../../firebase.js'
// const storageRef = fb.storage().ref();

// export default function AddPets() {
//     const [formData, setFormData] = useState({
//         pet_type: '',
//         pet_name: '',
//         breed: '',
//         age: '',
//         gender: '',
//         photo: '',
//         desc: '',
//         status: '',
//     });

//     const { pet_type, pet_name, breed, age, gender, photo, desc, status } = formData;

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const [image, setImage] = useState('');

//     const handleImgChange = (e) => {
//         // e.preventDefault();
//         if (e.target.files[0]) {
//             setImage(e.target.files[0]);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const uploadimg = storageRef.child('images/' + image.name).put(image);
//         uploadimg.on(
//             'state_changed',
//             snapshot => { },
//             error => {
//                 console.log(error);
//             },
//             () => {
//                 storageRef.child('images/' + image.name).getDownloadURL().then(url => {
//                     console.log("img_url:", url)
//                     try {
//                         axios.post('http://localhost:5000/pets', formData);
//                         setFormData({
//                             pet_type: '',
//                             pet_name: '',
//                             breed: '',
//                             age: '',
//                             gender: '',
//                             photo: url,
//                             desc: '',
//                             status: '',
//                         });
//                         alert('Pet is Added Successfully');
//                     } catch (error) {
//                         alert(error);
//                     }
//                 })
//             }
//         )
//     };

//     return (
//         <div className='mt-1 addpetform abs container'>
//             <form className='row justify-content-center' onSubmit={handleSubmit}>
//                 <div className='box2'>
//                     <h1>Add New Pets For Adoption</h1>
//                     <label htmlFor='ptype' className='form-label'>
//                         Category
//                     </label>
//                     <select
//                         className="form-select"
//                         aria-label="Default select example"
//                         id='ptype'
//                         name='pet_type'
//                         value={pet_type}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option value='' disabled>
//                             Select Category
//                         </option>
//                         <option value="Cat">Cat</option>
//                         <option value="Dog">Dog</option>
//                         <option value="Cow">Cow</option>
//                         <option value="Bird">Bird</option>
//                         <option value="Other">Other</option>
//                     </select>
//                     <label htmlFor='pname' className='form-label'>
//                         Pet Name
//                     </label>
//                     <input
//                         type='text'
//                         name='pet_name'
//                         id='pname'
//                         className='form-control'
//                         value={pet_name}
//                         onChange={handleChange}
//                         required
//                     />
//                     <label htmlFor='breed' className='form-label'>
//                         Breed
//                     </label>
//                     <input
//                         type='text'
//                         name='breed'
//                         id='breed'
//                         className='form-control'
//                         value={breed}
//                         onChange={handleChange}
//                         required
//                     />
//                     <label htmlFor='age' className='form-label'>
//                         Age
//                     </label>
//                     <input
//                         type='text'
//                         name='age'
//                         id='age'
//                         className='form-control'
//                         value={age}
//                         onChange={handleChange}
//                         required
//                     />
//                     <label htmlFor='gender' className='form-label'>
//                         Gender
//                     </label>
//                     <div className='d-flex'>
//                         <div className="form-check">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="gender"
//                                 id="flexRadioDefault1"
//                                 value="Male"
//                                 checked={gender === "Male"}
//                                 onChange={handleChange}
//                             />
//                             <label className="form-check-label m-0" htmlFor="flexRadioDefault1">
//                                 Male
//                             </label>
//                         </div>
//                         <div className="form-check ms-3">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="gender"
//                                 id="flexRadioDefault2"
//                                 value="Female"
//                                 checked={gender === "Female"}
//                                 onChange={handleChange}
//                             />
//                             <label className="form-check-label m-0" htmlFor="flexRadioDefault2">
//                                 Female
//                             </label>
//                         </div>
//                     </div>
//                     <label htmlFor='photo' className='form-label'>
//                         Image Link
//                     </label>
//                     <input
//                         type='file'
//                         name='photo'
//                         id='photo'
//                         accept='image/*'
//                         className='form-control'
//                         onChange={(e) => handleImgChange(e)}
//                         required
//                     />
//                     <label htmlFor='desc' className='form-label'>
//                         Pet Details
//                     </label>
//                     <textarea
//                         name='desc'
//                         id='desc'
//                         className='form-control'
//                         value={desc}
//                         onChange={handleChange}
//                         required
//                     />
//                     <label htmlFor='status' className='form-label'>
//                         Adoption Status
//                     </label>
//                     <div className='d-flex'>
//                         <div className="form-check">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="status"
//                                 id="available"
//                                 value="Available"
//                                 checked={status === "Available"}
//                                 onChange={handleChange}
//                             />
//                             <label className="form-check-label m-0" htmlFor="available">
//                                 Available
//                             </label>
//                         </div>
//                         <div className="form-check ms-3">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="status"
//                                 id="adopted"
//                                 value="Adopted"
//                                 checked={status === "Adopted"}
//                                 onChange={handleChange}
//                             />
//                             <label className="form-check-label m-0" htmlFor="adopted">
//                                 Adopted
//                             </label>
//                         </div>
//                         <div className="form-check ms-3">
//                             <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="status"
//                                 id="booked"
//                                 value="Booked"
//                                 checked={status === "Booked"}
//                                 onChange={handleChange}
//                             />
//                             <label className="form-check-label m-0" htmlFor="booked">
//                                 Booked
//                             </label>
//                         </div>
//                     </div>
//                     <button type='submit' id='submitBtn' className='btn btn-success m-0 mt-4 w-100'>
//                         Add Pet
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }


import React, { useState } from 'react';
import '../Add_Pets/addpets.css';
import axios from 'axios';
import fb from '../../firebase.js';

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

    const { pet_type, pet_name, breed, age, gender, photo, desc, status } = formData;

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

            await axios.post('http://localhost:5000/pets', petData);

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

            alert('Pet added successfully');
        } catch (error) {
            console.log(error);
            alert('Error adding pet');
        }
    };

    return (
        <div className="mt-1 addpetform abs container">
            <form className='row justify-content-center' onSubmit={handleSubmit}>
                <div className='box2'>
                    <h1>Add New Pets For Adoption</h1>
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
                    <button type='submit' id='submitBtn' className='btn btn-success m-0 mt-4 w-100'>
                        Add Pet
                    </button>
                </div>
            </form>
        </div>
    );
}
