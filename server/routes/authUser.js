import express from "express";
import userLogin from "../controllers/Auth/userLogin.js";
import userRegister from "../controllers/Auth/userRegister.js";

const authRoute = express.Router();

// Register New User
authRoute.post("/register", userRegister);

// Login User
authRoute.post("/login", userLogin);

export default authRoute;
