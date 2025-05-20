const {
  getAllUsers,
  signUp,
  signIn,
  updateUser,
  updateAvatar,
  currentUser,
  logoutUser,
  verifyMail,
  forgotPassword,
  resetPassword,
  changePassword,
} = require("../controllers/user.controller");
const { authentification } = require("../middlewares/authMiddleware");
const { loginLimiter } = require("../middlewares/rateLimitMiddleware");

const router = require("express").Router();

router.get("/", getAllUsers);

router.get("/verifyMail/:token", verifyMail);

router.post("/", signUp);

router.post("/login", loginLimiter, signIn);

router.post("/forgot", forgotPassword);

router.post("/reset", resetPassword);

router.post("/change", authentification, changePassword);

router.put("/", authentification, updateUser);

router.put("/avatar", authentification, updateAvatar);

router.get("/current", authentification, currentUser);

router.delete("/deleteToken", authentification, logoutUser);

module.exports = router;

// localhost:3000/user
