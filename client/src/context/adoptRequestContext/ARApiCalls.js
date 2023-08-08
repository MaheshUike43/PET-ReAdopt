import axios from "axios";
import { createARequestFailure, createARequestStart, createARequestSuccess, deleteARequestFailure, deleteARequestStart, deleteARequestSuccess, getARequestsFailure, getARequestsSuccess, getARequetsStart, updateARequestFailure, updateARequestStart, updateARequestSuccess } from "./ARAction";

//READ All Requests
export const getARequests = async (dispatch) => {
  dispatch(getARequetsStart());
  try {
    const res = await axios.get("http://localhost:5000/adopt-request/allreq", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getARequestsSuccess(res.data));
  } catch (err) {
    dispatch(getARequestsFailure());
  }
};

//CREATE Request
export const createPet = async (adoptRequest, dispatch) => {
  dispatch(createARequestStart());
  try {
    const res = await axios.post("http://localhost:5000/adopt-request", adoptRequest, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createARequestSuccess(res.data));
  } catch (err) {
    dispatch(createARequestFailure());
  }
};

//DELETE Request
export const deleteARequest = async (id, dispatch) => {
  dispatch(deleteARequestStart());
  try {
    await axios.delete("http://localhost:5000/adopt-request/delete/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteARequestSuccess(id));
  } catch (err) {
    dispatch(deleteARequestFailure());
  }
};


//UPDATE ARequest
export const updateARequest = async(AdoptRequest,dispatch) => {
    dispatch(updateARequestStart());
    try {
        const res = await axios.put("http://localhost:5000/adopt-request/update/"+AdoptRequest._id,AdoptRequest,{
            header: {
                token: "Bearer "+JSON.parse(localStorage.getItem("user")).accesstoken
            },
        });
        dispatch(updateARequestSuccess(res.data));
    } catch (error) {
        dispatch(updateARequestFailure());
    }
}