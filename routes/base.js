const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET user profile */
router.get("/profile", isLoggedIn, (req, res, next) =>{
  User.findById(req.user._id)
  .populate('favorites')
  .then((user) => {
    res.render("user/user-profile", {user: user});
  })
})

/* GET user favorites */
router.get("/favorites", isLoggedIn, (req, res, next) =>{
  User.findById(req.user._id)
  .populate('favorites')
  .then((user) => {
    res.render("user/favorites", {user: user});
  })
})

module.exports = router;