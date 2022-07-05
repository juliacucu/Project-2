const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: String,
  level: {
    type: String,
    enum: ['Easy', 'Medium', 'Pro Chef']
  },
  dishType: {
    type: String,
    enum: ['Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Dessert', 'Other']
  },
  duration: Number,
  creator: String,
  created: {
    type: Date,
    default: new Date()
  },
  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg'
  },
  ingredients: [ String ],
  steps: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;