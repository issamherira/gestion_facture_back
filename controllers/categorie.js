const express = require('express');
const app = express();
const categorieRoute = express.Router();

// categorie model
let Categorie = require('../models/categorie');

// Add Categorie
categorieRoute.route('/create').post((req, res, next) => {
    Categorie.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All categorie
categorieRoute.route('/').get((req, res) => {
    Categorie.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single categorie
categorieRoute.route('/read/:id').get((req, res) => {
    Categorie.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update categorie
categorieRoute.route('/update/:id').put((req, res, next) => {
    Categorie.findByIdAndUpdate(req.params.id, {
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

// Delete categorie
categorieRoute.route('/delete/:id').delete((req, res, next) => {
    Categorie.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = categorieRoute;