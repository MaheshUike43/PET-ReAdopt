import userModel from "../../models/userModel.js";

const deleteUser = async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const deleteuser = await userModel.findByIdAndDelete(req.params.id)
            res.status(200).send({ success: true, message: "Account is deleted successfully", deleteuser });
        } catch (error) {
            res.status(500).send({ success: false, message: "Account Not Found" });
        }
    } else {
        res.status(403).send({ success: false, message: "You can only delete your account" });
    }
}

export default deleteUser
