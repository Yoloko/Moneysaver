const db = require("../models");

// Defining methods for the booksController
module.exports = {

  findInc_ExpById: function(req, res) {
    db.UserMoney
      .find(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInc_ExpById: function(req, res) {
    db.UserMoney
      .find(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
savings: {
  create: function(req, res) {
    db.UserMoney
      .create(req.body)
  
      .then(dbModel => res.json(dbModel),console.log(req.body,"hello"))   
       
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.UserMoney
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.UserMoney
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
