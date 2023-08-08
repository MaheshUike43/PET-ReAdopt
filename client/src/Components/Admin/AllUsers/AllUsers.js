import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import './allusers.css';
import Header from '../Header/AdminHeader';
// import { useNavigate } from 'react-router-dom/cjs/react-router-dom.min';

export default function AllUsers() {
    // const navigate = useNavigate();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const displayAllUsers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/users");
                console.log(response.data);
                const UsersData = response.data.allusers;
                setUsers(UsersData);
                console.log(UsersData) // Update the state with the fetched pets data
            } catch (error) {
                console.error(error);
            }
        };

        displayAllUsers();
    }, []);

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/user/delete/${id}`);
            alert("Deleted");
            // Get the latest list of pets from the api
            const response = await axios.get("http://localhost:5000/users");
            const UsersData = response.data.allusers;
            setUsers(UsersData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='container'>
            <div className="row">
                <Header />
                <h1 id='viewusers-title'>All Users</h1>
                <table className="table table-bordered border-dark mt-3">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact Number</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {users.map((user, index) => {
                        return (
                            <tbody>
                                <tr className='text-center'>
                                    <th scope="row" key={user._id}>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone_number}</td>
                                    <td>{user.address}</td>
                                    <td className=''>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            {/* <button id="btn-ad-view" className="btn" onClick={() => navigate(`/admin/userprofile?userid=${user._id}`)}>VIEW</button>
                                            <button id="btn-ad-edit" className="btn" onClick={() => navigate(`/admin/updateuser?userid=${user._id}`)}>EDIT</button> */}
                                            <button id="btn-ad-view" className="btn" onClick={() => navigate(`/admin/userprofile?userid=${user._id}`)}>VIEW</button>
                                            <button id="btn-ad-edit" className="btn" onClick={() => navigate(`/admin/updateuser?userid=${user._id}`)}>EDIT</button>
                                            <button id="btn-ad-delete" className="btn" onClick={() => deleteUser(user._id)}>DELETE</button>
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
