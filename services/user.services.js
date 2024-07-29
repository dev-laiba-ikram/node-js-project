const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//events
const EventEmitter = require("events");
const userEmitter = new EventEmitter();

userEmitter.on("findUserByEmail", (user) => {
  console.log(`User found: ${user.username} (${user.email})`);
});

userEmitter.on("findAllUsers", (users) => {
  console.log("Found all Users:", users);
});

userEmitter.on("findUserById", (user) => {
  console.log(`User found: ${user.username} (${user.id})`);
});

userEmitter.on("userUpdated", (user) => {
  console.log("Task updated:", user.username);
});

userEmitter.on("userDeleted", (user) => {
  console.log("Task deleted:", user.username);
});

userEmitter.on("userCreated", (user) => {
  console.log("User created:", user);
});

const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  userData.password = hashedPassword;
  userEmitter.emit("userCreated", user);
  const user = await User.create(userData);
  return user;
};

const findUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  userEmitter.emit("findUserByEmail", user);
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll();
  userEmitter.emit("FindAllUsers", users);
  return users;
};

const getUserById = async (userId) => {
  console.log("userId", userId);
  const user = await User.findByPk(userId);
  userEmitter.emit("findUserById", user);
  return user;
};

const updateUser = async (userId, userData) => {
  const [rowsUpdated] = await User.update(userData, {
    where: { id: userId }
  });
  if (rowsUpdated === 0) {
    throw new Error("User not found or no updates were made.");
  }
  const updatedUser = await User.findByPk(userId);
  userEmitter.emit("userUpdated", updateUser);
  return updatedUser;
};

const deleteUsers = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error("User not found");
  }
  const deletedUser = await user.destroy();
  userEmitter.emit("userDeleted", deletedUser);
  return "deletedUser";
};

module.exports = {
  createUser,
  findUserByEmail,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUsers
};
