const express = require('express');
const app = express();
const BcommandeRoute = express.Router();

// Bcommande model
let Bcommande = require('../models/Bcommande');

// Add Bcommande
BcommandeRoute.route('/create').post((req, res, next) => {
    Bcommande.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Bcommande
BcommandeRoute.route('/').get((req, res) => {
    Bcommande.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Bcommande
BcommandeRoute.route('/read/:id').get((req, res) => {
    Bcommande.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
BcommandeRoute.route('/update/:id').put((req, res, next) => {
    Bcommande.findByIdAndUpdate(req.params.id, {
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

// Delete Bcommande
BcommandeRoute.route('/delete/:id').delete((req, res, next) => {
  Bcommande.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = BcommandeRoute;