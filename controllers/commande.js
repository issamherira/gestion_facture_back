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

commandeRoute.get("/challenge", function(req, res) {

  var challengeId = req._id;

  var isSolved = function(challengeId, callback){  // <<=== pass callback here
      console.log("in the aggregation: ", challengeId); // returns challengeId
      Commande.aggregate([
            
                 
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

  //line below should return something like: []
  // or [ { _id: 56f5544bc171b1b8663bb15f, userName: 'John' } ]
  //console.log("is solved is: ", isSolved(challengeId));

  isSolved(challengeId, function(err, results) {
      if (err) {
          // return error here using res
      } else {
          // do something with results and 
          // return it using res
      }
  }); 
});
module.exports = commandeRoute;