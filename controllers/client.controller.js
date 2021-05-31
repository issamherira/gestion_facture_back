const express = require('express');
const app = express();
const clientRoute = express.Router();

// Client model
let Client = require('../models/client.model');

// Add client
clientRoute.route('/create').post((req, res, next) => {
  Client.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All client
clientRoute.route('/').get((req, res) => {
  Client.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single client
clientRoute.route('/read/:id').get((req, res) => {
    
    Client.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update client
clientRoute.route('/update/:id').put((req, res, next) => {
    Client.findByIdAndUpdate(req.params.id, {
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

// Delete client
clientRoute.route('/delete/:id').delete((req, res, next) => {
  Client.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = clientRoute;