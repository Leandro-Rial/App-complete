const { Router } = require("express");
const router = Router();

const {
  renderSignUpForm,
  renderSigninForm,
  signup,
  signin,
  logout,
} = require("../controllers/users.controller");


// SIGN UP
router.get("/users/signup", renderSignUpForm);
router.post("/users/signup", signup);


// SIGN IN
router.get("/users/signin", renderSigninForm);
router.post("/users/signin", signin);


// LOG OUT
router.get("/users/logout", logout);

module.exports = router;
