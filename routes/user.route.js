const express = require("express");
const router = express.Router();
const jwtAuthMiddleWare = require("../middleware/auth/index");

const {
  validateSignUpRequest,
  isRequestValidated
} = require("../validators/auth");
const {
  signUpUser,
  signInUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require("../controller/userController");

router.post("/sign-up", validateSignUpRequest, isRequestValidated, signUpUser);
router.post("/sign-in", validateSignUpRequest, isRequestValidated, signInUser);

router.post("/auth", jwtAuthMiddleWare, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

router.get("/getAllUsers", jwtAuthMiddleWare, getAllUsers);

router.get("/getUserById/:id", jwtAuthMiddleWare, getUserById);

router.put("/updateUsers/:id", jwtAuthMiddleWare, updateUser);

router.delete("/deleteUsers/:id", jwtAuthMiddleWare, deleteUser);

module.exports = router;
