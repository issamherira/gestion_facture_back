const express = require('express');
const app = express();
const fournisseurRoute = express.Router();

// fournisseur model
let Fournisseur = require('../models/fournisseurs');

// Add Fournisseurs
fournisseurRoute.route('/create').post((req, res, next) => {
  Fournisseur.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Fournisseurs
fournisseurRoute.route('/').get((req, res) => {
  Fournisseur.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Fournisseur
fournisseurRoute.route('/read/:id').get((req, res) => {
  Fournisseur.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
fournisseurRoute.route('/update/:id').put((req, res, next) => {
  Fournisseur.findByIdAndUpdate(req.params.id, {
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

// Delete fournisseur
fournisseurRoute.route('/delete/:id').delete((req, res, next) => {
  Fournisseur.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = fournisseurRoute;