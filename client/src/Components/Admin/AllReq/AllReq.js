import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './allreq.css';
import AdminHeader from '../Header/AdminHeader';

export default function AllReq() {
    // const navigate = useNavigate();
    const navigate = useNavigate();
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const displayAllReqs = async () => {
            try {
                const response = await axios.get("http://localhost:5000/adopt-request/allreq", {
                    headers: {
                        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesstoken
                    }
                });
                console.log(response.data);
                const ReqsData = response.data.allRequest;
                setRequests(ReqsData);
                console.log(ReqsData) // Update the state with the fetched pets data
            } catch (error) {
                console.error(error);
            }
        };

        displayAllReqs();
    }, []);

    const deleteReqs = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/adopt-request/delete/${id}`, {
                headers: {
                    token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesstoken
                }
            });
            alert("Deleted");
            // Get the latest list of pets from the api
            const response = await axios.get("http://localhost:5000/adopt-request/allreq", {
                headers: {
                    token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesstoken
                }
            });
            const ReqsData = response.data.allRequest;
            setRequests(ReqsData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='container'>
            <div className="row">
                <AdminHeader />
                <h1 id='viewusers-title'>Adoption Requests</h1>
                <table className="table table-bordered border-dark mt-3">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Pet</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {requests.map((reqs, index) => {
                        return (
                            <tbody>
                                <tr className='text-center'>
                                    <th scope="row" key={reqs._id}>{index + 1}</th>
                                    <td>{reqs.name}</td>
                                    <td>{reqs.pet_name}</td>
                                    <td><img className='pet-img' src={reqs.photo} alt="..."/></td>
                                    <td className=''>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            {/* <button id="btn-ad-view" className="btn" onClick={() => navigate(`/admin/userprofile?userid=${reqs._id}`)}>VIEW</button>
                                            <button id="btn-ad-edit" className="btn" onClick={() => navigate(`/admin/updateuser?userid=${reqs._id}`)}>EDIT</button> */}
                                            <button id="btn-ad-view" className="btn" onClick={() => navigate(`/admin/viewreqs?userid=${reqs._id}`)}>VIEW</button>
                                            <button id="btn-ad-edit" className="btn" onClick={() => navigate(`/admin/updatereq?userid=${reqs._id}`)}>EDIT</button>
                                            <button id="btn-ad-delete" className="btn" onClick={() => deleteReqs(reqs._id)}>DELETE</button>
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
