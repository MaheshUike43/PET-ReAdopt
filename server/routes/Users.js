import express from "express";
import userDetails from "../controllers/User/userDetails.js";
import updateUser from "../controllers/User/updateUser.js";
import deleteUser from "../controllers/User/deleteUser.js";
import allUsers from "../controllers/User/allUsers.js";

const userroute = express.Router()

//GET ALL USER DETAILS
userroute.get("/users", allUsers);

//GET USER DETAILS
userroute.get("/user/:id", userDetails);

//UPDATE USER DETAILS
userroute.put("/user/update/:id", updateUser)

//DELEET USER DETAILS
userroute.delete("/user/delete/:id", deleteUser)

export default userroute;


