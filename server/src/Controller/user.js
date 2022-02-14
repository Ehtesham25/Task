import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/users.js";

export const signIn = async (req, res) => {

  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      res.status(404).json({ message: "User doesn't exist!!" });
    } else {
      const isPasswordMatch = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordMatch)
        return res.send(404).json({ message: "Invalid Credentials!!" });
      const accessToken = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        "myNameIsKhan"
      );
      res.status(202).send({ profileObj: existingUser, accessToken });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName, confirmPassword } =
    req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(449).json({ message: "User is already Exist!!" });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "password don't match!!" });
    const hashedPassword = await bcrypt.hash(password, 12);

    const profileObj = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const accessToken = jwt.sign(
      { email: profileObj.email, id: profileObj._id },
      "myNameIsKhan"
    );
  
    res.status(201).json({ profileObj, accessToken });
  } catch (error) {
    res.status(500).json({ error });
  }
};
