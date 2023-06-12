import userModel from "../../models/userModel.js";
import bcrypt from "bcrypt";

const updateUser = async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                res.status(500).send({ success: false, message: "User Not Found" });
            }
        }
        try {
            const update = await userModel.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).send({ success: true, message: "User is updated successfully", update });
        } catch (error) {
            res.status(500).send({ success: false, message: "User Not Found" });
        }
    }else {
        res.status(403).send({ success: false, message: "You can only update your details" });
    }
}

export default updateUser
