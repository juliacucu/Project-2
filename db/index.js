// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/project2";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });



// module.exports = (app) => {
//   app.use((req, res, next) => {
//     // this middleware runs whenever requested page is not available
//     res.status(404).render("not-found");
//   });

//   app.use((err, req, res, next) => {
//     // whenever you call next(err), this middleware will handle the error
//     // always logs the error
//     console.error("ERROR: ", req.method, req.path, err);

//     // only render if the error ocurred before sending the response
//     if (!res.headersSent) {
//       res.status(500).render("error");
//     }
//   });
// };