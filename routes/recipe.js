const router = require("express").Router();
const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");
// Require necessary (isLoggedOut and isLiggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

// Add a new recipe
router.get("/create", (req, res, next) => {
  res.render("recipes/new-recipe.hbs");
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
    steps,
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
    steps,
  })
    .then((createdRecipe) => res.redirect("/recipes"))
    .catch((error) => next(error));
});

// Update the recipe
router.get('/:id/update', (req, res, next) => {
  const { id } = req.params
  Recipe.findById(id)
    .then(recipeToEdit => {
      res.render('recipes/update.hbs', { recipe: recipeToEdit})
    })
    .catch(error => next(error));
});
router.post('/:id/update', isLoggedIn, (req, res, next) => {
  const { id } = req.params
  const { title,
    level,
    dishType,
    duration,
    creator,
    created,
    image,
    ingredients,
    steps,} = req.body;
    console.log(ingredients)

  Recipe.findByIdAndUpdate (id, { 
    title,
    level,
    dishType,
    duration,
    creator,
    created,
    image,
    ingredients,
    steps}, 
    {new: true})
    .then(updatedRecipe => res.redirect(`/favorites`))
    .catch(error => next(error));
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

//Add favorites
router.post("/add-favorite/:id", isLoggedIn, (req, res) => {
  const idRecipe = req.params.id
  console.log(idRecipe)
  User.findById(req.user._id)
    .then((userFound) => {
      if (!userFound.favorites.includes(idRecipe)) {
        User.findByIdAndUpdate(req.user._id, {
          $push: { favorites: idRecipe},
        }).then(() => {
          res.redirect("/recipes")
        });
      } else {
        User.findByIdAndUpdate(req.user._id, {
          $pull: { favorites:{ $in:[idRecipe]}},
        }).then((response) => {
          console.log(response)
          res.redirect("/recipes")
        });
      }
    })
    .catch((error) => next(error));
});

module.exports = router;