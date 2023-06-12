import express from "express";
import adoptRequest from "../controllers/Adopt/adoptRequest.js";
import updateReq from "../controllers/Adopt/updateReq.js";
import adoptReqDetials from "../controllers/Adopt/getRequest.js";
import allRequest from "../controllers/Adopt/allRequest.js";
import deleteReq from "../controllers/Adopt/deleteReq.js";

const Request = express.Router()

//Adoption Request
Request.post("/adopt-request", adoptRequest)

//View All Request
Request.get("/adopt-request/allreq", allRequest)

//View Request
Request.get("/adopt-request/:id", adoptReqDetials)

//Update Request
Request.put("/adopt-request/update/:id", updateReq)

//Delete Request
Request.delete("/adopt-request/delete/:id", deleteReq)

export default Request;