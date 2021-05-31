const express = require('express');
const app = express();
const stockRoute = express.Router();

// produit model
let Stock = require('../models/stock');

// Add produit
stockRoute.route('/create').post((req, res, next) => {
    Stock.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All produit
stockRoute.route('/').get((req, res) => {
    Stock.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Fournisseur
stockRoute.route('/read/:id').get((req, res) => {
    Stock.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
stockRoute.route('/update/:id').put((req, res, next) => {
    Stock.findByIdAndUpdate(req.params.id, {
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

// Delete produit
stockRoute.route('/delete/:id').delete((req, res, next) => {
    Stock.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = stockRoute;