const express = require('express');
const app = express();
const commandeRoute = express.Router();

// Commande model
let Commande = require('../models/commande');

// Add commande
commandeRoute.route('/create').post((req, res, next) => {
    Commande.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Commande
commandeRoute.route('/').get((req, res) => {
    Commande.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Commande
commandeRoute.route('/read/:id').get((req, res) => {
    Commande.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
commandeRoute.route('/update/:id').put((req, res, next) => {
    Commande.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete commande
commandeRoute.route('/delete/:id').delete((req, res, next) => {
  Commande.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = commandeRoute;