const express = require('express');
const app = express();
const devisRoute = express.Router();

// devis model
let Devis = require('../models/devis');

// Add Devis
devisRoute.route('/create').post((req, res, next) => {
  Devis.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Devis
devisRoute.route('/').get((req, res) => {
  Devis.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single devis
devisRoute.route('/read/:id').get((req, res) => {
  Devis.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
devisRoute.route('/update/:id').put((req, res, next) => {
  Devis.findByIdAndUpdate(req.params.id, {
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

// Delete devis
devisRoute.route('/delete/:id').delete((req, res, next) => {
  Devis.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = devisRoute;