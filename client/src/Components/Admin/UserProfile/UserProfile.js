import React, { useEffect, useState } from 'react'
import './userprofile.css'
import { useLocation } from 'react-router'
import axios from 'axios';
import Header from '../Header/AdminHeader';

export default function UserProfile() {
    const [user, setUser] = useState([]);
    const search = useLocation().search;
    const searchParams = new URLSearchParams(search);

    useEffect(() => {
        const userDetails = async () => {
            try {
                const fetchUser = await axios.get(
                    `http://localhost:5000/user/${searchParams.get('userid')}`
                );
                setUser(fetchUser.data.user);
            } catch (error) {
                console.log(error);
            }
        };
        userDetails();
    }, []);
    return (
        <div className="container" id='User-profile'>
            <div className="row justify-content-center">
                <Header />
                <h4 id='user-info-title'>About <span id='username'>{user.name}</span></h4>
                <div className='col-lg-12 card' id='user-card'>
                    <div className='card-body'>
                        <h6 className='visually-hidden'>{user._id}</h6>
                        <h5 className='card-title' >Name: {user.name}</h5>
                        <h5 className='card-title'>Email: {user.email}</h5>
                        <h5 className='card-title'>Contact Number: {user.phone_number}</h5>
                        <h5 className='card-title'>Address: {user.address}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
