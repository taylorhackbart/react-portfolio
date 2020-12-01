const User = require("../models/model.js");

module.exports = {
  create: function(req, res){
    console.log("here")
    User
    .create(req.body)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  }
}