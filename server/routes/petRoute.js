import express from "express";
import petDetails from "../controllers/Pet/petDetails.js";
import addPets from "../controllers/Pet/addPets.js";
import allPet from "../controllers/Pet/allPet.js";
import updatePet from "../controllers/Pet/updatePet.js";
import deletePet from "../controllers/Pet/deletePet.js";

const petRoute = express.Router()

//Add Pet
petRoute.post("/pets", addPets)

//Selected Pet Details 
petRoute.get("/petsDetail/:id", petDetails)

//All Pet Details
petRoute.get("/allPetsDetail", allPet)

//update Pets
petRoute.put("/pet/update/:id", updatePet)

//update Pets
petRoute.delete("/pet/delete/:id", deletePet)

export default petRoute;