const router = require('express').Router()
const Recipe = require('../models/Recipe.model');
//Listing recipes
router.get("/recipes", (req, res, next) => {
    MovieModel.find()
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
  router.get('/recipes/:id', (req, res, next) =>{
    MovieModel.findById(req.params.id)
    .then((response) =>{
        console.log(response)
        res.render('recipes/recipe-details.hbs', {response})
    })
    .catch((error) => next(error));
})











module.exports = router