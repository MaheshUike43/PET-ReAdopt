import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './updateuser.css'
import Header from '../Header/AdminHeader';

export default function UpdateUser() {
    const [user, setUser] = useState({});
    const search = useLocation().search;
    const searchParams = new URLSearchParams(search);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/user/${searchParams.get('userid')}`
                );
                setUser(response.data.user);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserDetails();
    }, []); // Empty dependency array to run only once when component mounts

    const updateUserDetails = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:5000/user/update/${searchParams.get('userid')}`,
                user);
            alert('Updated Successfully');
            console.log('Updated Successfully');
            navigate('/admin/allusers');
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    return (
        <div className="container" id='updateuserform'>
            <form className="row justify-content-center" onSubmit={updateUserDetails}>
            <Header />
                <div className="" id='update-user-card'>
                    <div className="" id="user">
                        <h4 id='editusertitle'>Edit User Details</h4>
                        <input
                            type="text"
                            name="_id"
                            className="form-control"
                            value={user._id || ''}
                            required
                            hidden
                            disabled
                        />
                        <div className='d-flex'>
                            <div className='col-lg-12'>
                                <label htmlFor="name" className="form-label mt-0">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="form-control"
                                    value={user.name || ''}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    value={user.email || ''}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="phone_number" className="form-label">
                                    Mobile Number
                                </label>
                                <input
                                    type="text"
                                    name="phone_number"
                                    id="phone_number"
                                    className="form-control"
                                    value={user.phone_number || ''}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="address" className="form-label">
                                    Address
                                </label>
                                <textarea
                                    name="address"
                                    id="address"
                                    className="form-control"
                                    value={user.address || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" id='update-btn' className="btn btn-primary w-100 ms-0">
                        Update User Details
                    </button>
                </div>
            </form>
        </div>
    );
}
