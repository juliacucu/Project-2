const router = require("express").Router();
const Recipe = require("../models/Recipe.model");
// Require necessary (isLoggedOut and isLiggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

// Add a new recipe
router.get("/create", (req, res, next) => {
  res.render("recipes/new-recipe.hbs");
});

//Listing recipes
router.get("/", (req, res, next) => {
  Recipe.find()
    .then((recipesFromDB) => {
      console.log("Retrieved recipes from DB:", recipesFromDB);
      res.render("recipes/recipes.hbs", {
        recipe: recipesFromDB,
      });
    })
    .catch((error) => {
      console.log("Error while getting recipes from the DB", error);
    });
});

//Recipe details by ID
router.get("/:id", isLoggedIn, (req, res, next) => {
  Recipe.findById(req.params.id)
    .then((response) => {
      console.log(response);
      res.render("recipes/recipe-details.hbs", response);
    })
    .catch((error) => next(error));
});

router.post("/create", isLoggedIn, (req, res, next) => {
  const {
    title,
    level,
    dishType,
    duration,
    creator,
    created,
    image,
    ingredients,
    steps
  } = req.body;

  Recipe.create({
    title,
    level,
    dishType,
    duration,
    creator,
    created,
    image,
    ingredients,
    steps
  })
    .then((createdRecipe) => res.redirect("/recipes"))
    .catch((error) => next(error));
});

router.post("/add-favorite", isLoggedIn, (req, res) => {
const query = ({   
  title,
  level,
  dishType,
  duration,
  creator,
  created,
  image,
  ingredients,
  steps} = req.body);
});


module.exports = router;
