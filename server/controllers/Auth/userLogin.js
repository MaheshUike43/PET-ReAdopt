import userModel from "../../models/userModel.js";
import bcrypt from "bcrypt";

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = await user.generateAuthToken();

    res.json({ success: true, message: 'User Logged In Successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in. Please try again.' });
  }
};

export default userLogin;
