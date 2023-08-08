import axios from "axios";
import { createPetFailure, createPetStart, createPetSuccess, deletePetFailure, deletePetStart, deletePetSuccess, getPetFailure, getPetSuccess, getPetStart, getPetsFailure, getPetsStart, getPetsSuccess, updatePetFailure, updatePetStart, updatePetSuccess } from "./PetAction";

//pet by id
export const getPet = async (pet, dispatch) => {
    dispatch(getPetStart());
    try {
        const res = await axios.get("http://localhost:5000/petsDetail/" + pet._id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getPetSuccess(res.data.pet));
    } catch (err) {
        dispatch(getPetFailure());
    }
};

//allpets
export const getPets = async (dispatch) => {
    dispatch(getPetsStart());
    try {
        const res = await axios.get("http://localhost:5000/allPetsDetail", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getPetsSuccess(res.data));
    } catch (err) {
        dispatch(getPetsFailure());
    }
};

//create
export const createPet = async (pet, dispatch) => {
    dispatch(createPetStart());
    try {
        const res = await axios.post("http://localhost:5000/pets", pet, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createPetSuccess(res.data));
    } catch (err) {
        dispatch(createPetFailure());
    }
};

//delete
export const deletePet = async (id, dispatch) => {
    dispatch(deletePetStart());
    try {
        await axios.delete("http://localhost:5000/pet/delete/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deletePetSuccess(id));
    } catch (err) {
        dispatch(deletePetFailure());
    }
};


//UPDATE PETS
export const updateARequest = async (pet, dispatch) => {
    dispatch(updatePetStart());
    try {
        const res = await axios.put("http://localhost:8800/pet/update/" + pet._id, pet, {
            header: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesstoken
            },
        });
        dispatch(updatePetSuccess(res.data));
    } catch (error) {
        dispatch(updatePetFailure());
    }
}