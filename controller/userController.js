const bcrypt = require("bcrypt");
const { User } = require("../models/index");
const jwt = require("jsonwebtoken");
const secretKey = "NOTE";
const userService = require("../services/user.services");
//error handling
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const signUpUser = catchAsync(async (req, res) => {
  const userData = req.body;
  if (!userData.username || !userData.email || !userData.password) {
    return res
      .status(400)
      .json({ error: "Please provide required information." });
  }
  const user = await userService.createUser(userData);
  if (!user) {
    return res
      .status(500)
      .json({ error: true, message: "User creation failed" });
  }
  res.status(201).json({ user, message: "User signed up successfully" });
});

const signInUser = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.findUserByEmail(email);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid Password" });
  }
  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });

  res.status(200).json({ user, token, message: "User sign-in successfully" });
});

const getAllUsers = catchAsync(async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(200).json(users);
});

const getUserById = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const user = await userService.getUserById(id);
  if (!user) {
    return next(new AppError("No user found with that ID", 404));
  }
  res.status(200).json({ user });
});
const updateUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const updatedUser = await userService.updateUser(id, req.body);
  if (!updateUser) {
    return next(new AppError("No  user found with that ID", 404));
  }
  res.status(200).json({ updatedUser });
});
const deleteUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) {
    return next(new AppError("No  user found with that ID", 404));
  }
  await user.destroy();
  res.status(200).json({ message: "User deleted successfully" });
});

module.exports = {
  signUpUser,
  signInUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
