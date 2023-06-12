import userModel from "../../models/userModel.js";

const userDetails = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (user) {
            res.status(200).send({ success: true, message: "User Found", user });
        } else {
            res.status(404).send({ success: false, message: "User Not Found" });
        }
    } catch (error) {
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
}

export default userDetails
