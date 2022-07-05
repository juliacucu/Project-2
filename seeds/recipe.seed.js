const mongoose = require('mongoose');
const Movie = require('../models/Recipe.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/project-2';

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


Recipe.create(recipes)
  .then(recipesFromDB => {
    console.log(`Created ${recipesFromDB.length} recipe`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));