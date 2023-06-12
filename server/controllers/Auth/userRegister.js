import userModel from "../../models/userModel.js";
import bcrypt from "bcrypt";

const userRegister = async (req, res) => {
    try {
        const { name, email, password, cpassword, phone_number, address } = req.body;

        if (!name || !email || !password || !cpassword || !phone_number || !address) {
            return res.status(400).send({ success: false, message: "Please fill-up all details" });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User is Already Registered" });
        } else if (password !== cpassword) {
            return res.status(400).json({ success: false, message: "Password Not Match" });
        } else {
            // Encrypt Password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create new user
            const newUser = new userModel({
                name,
                email,
                password: hashedPassword,
                cpassword: hashedPassword,
                phone_number,
                address,
            });
            const user = await newUser.save();
            res.status(200).json({ success: true, message: "User is Registered Successfully", user });
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to Registerd" });
    }
}

export default userRegister
