const express = require('express');
const app = express();
const ProjetRoute = express.Router();

// Projet model
let Projet = require('../models/Projet');

// Add Projet
ProjetRoute.route('/create').post((req, res, next) => {
    Projet.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Projet
ProjetRoute.route('/').get((req, res) => {
    Projet.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Projet
ProjetRoute.route('/read/:id').get((req, res) => {
    Projet.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
ProjetRoute.route('/update/:id').put((req, res, next) => {
    Projet.findByIdAndUpdate(req.params.id, {
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

// Delete Projet
ProjetRoute.route('/delete/:id').delete((req, res, next) => {
  Projet.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
ProjetRoute.get("/challenge", function(req, res) {

  var challengeId = req._id;

  var isSolved = function(challengeId, callback){  // <<=== pass callback here
      console.log("in the aggregation: ", challengeId); // returns challengeId
      Projet.aggregate([
            
                 
                  {
                    $count: "count"
                  } ,
                 
              ],
              function(err, results){
                  console.log("this is the result: ", results); // logs a result if the there is one, and [] if there is no result.
                  callback(err, results); // <<=== call callback here to return
                  res.json(results);

              });
  };


  isSolved(challengeId, function(err, results) {
      if (err) {
       
      } else {
          
      }
  }); 
});
module.exports = ProjetRoute;