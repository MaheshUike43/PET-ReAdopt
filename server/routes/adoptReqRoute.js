import express from "express";
import adoptReqModel from "../models/adoptReqModel.js";
import verify from "../verifyToken.js";


const Request = express.Router()

//CREATE Adoption Request
Request.post("/adopt-request", async (req, res) => {
    try {
        const { pet_id, pet_name, breed, age, gender, photo, user_id, name, email, phone_number, address } = req.body;

        // CREATE NEW ADOPTION REQUEST
        const newRequest = { pet_id, pet_name, breed, age, gender, photo, user_id, name, email, phone_number, address };
        const adoptionRequest = await adoptReqModel.create(newRequest);

        res.status(200).send({ success: true, message: "Adoption request created successfully", adoptionRequest });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Error creating adoption request" });
    }
})

//READ All Request
Request.get("/adopt-request/allreq", verify ,async (req, res) => {

    if(req.user.isAdmin){
        try {
            const allRequest = await adoptReqModel.find();
            if (allRequest) {
                res.status(200).send({ success: true, message: "Request Found", allRequest });
            } else {
                res.status(404).send({ success: false, message: "Request Not Found" });
            }
        } catch (error) {
            res.status(500).send({ success: false, message: "Internal Server Error" });
        }
    }else{
        res.status(403).json("You are not authorized");
    }

})

//READ SINGLE Request
Request.get("/adopt-request/:id",verify, async (req, res) => {
    if(req.user.isAdmin){

        try {
            const viewreq = await adoptReqModel.findById(req.params.id);
            if (viewreq) {
                res.status(200).send({ success: true, message: "Request Found", viewreq });
            } else {
                res.status(404).send({ success: false, message: "Request Not Found" });
            }
        } catch (error) {
            res.status(500).send({ success: false, message: "Internal Server Error" });
        }
    }else{
        res.status(403).json("You are not authorized");
    }
})

//UPDATE Request
Request.put("/adopt-request/update/:id",verify, async (req, res) => {
    if (req.body._id === req.params.id || req.user.isAdmin) {
        try {
            const update = await adoptReqModel.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            },{
                new:true
            });
            res.status(200).send({ success: true, message: "Request is updated successfully", update });
        } catch (error) {
            res.status(500).send({ success: false, message: "Request Not Found" });
        }
    } else {
        res.status(403).send({ success: false, message: "Internal Server Error" });
    }
})

//DELETE Request
Request.delete("/adopt-request/delete/:id",verify, async (req, res) => {
    if (req.body._id === req.params.id || req.user.isAdmin) {
        try {
            const deletereq = await adoptReqModel.findByIdAndDelete(req.params.id)
            res.status(200).send({ success: true, message: "Request is deleted successfully", deletereq });
        } catch (error) {
            res.status(500).send({ success: false, message: "Request Not Found" });
        }
    } else {
        res.status(403).send({ success: false, message: "Internal Server Error" });
    }
})

export default Request;