const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.expense
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.expense
      .find(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));  
  },
  create: function(req, res) {
    db.expense
      .create(req.body)
  
      .then(dbModel => res.json(dbModel),console.log(req.body,"hello"))   
       
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.expense
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.expense
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
 