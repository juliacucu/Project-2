const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/profile", isLoggedIn, (req, res, next) =>{
console.log(req.user)
  User.findById(req.user._id)
  .populate('favorites')
  .then((user) => {
    console.log(user)
    res.render("user/user-profile", {user: user});
  })
})

module.exports = router;