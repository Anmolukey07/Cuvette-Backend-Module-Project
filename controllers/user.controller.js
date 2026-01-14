const User = require("../models/user.model");
const generateToken = require("../utils/generateToken");

exports.registerUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ token: generateToken(user._id) });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await user.matchPassword(password)) {
    res.json({ token: generateToken(user._id) });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
};