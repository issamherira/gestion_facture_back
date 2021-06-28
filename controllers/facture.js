const express = require('express');
const app = express();
const FactureRoute = express.Router();

// Facture model
let Facture = require('../models/Facture');

// Add Facture
FactureRoute.route('/create').post((req, res, next) => {
    Facture.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Facture
FactureRoute.route('/').get((req, res) => {
    Facture.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Facture
FactureRoute.route('/read/:id').get((req, res) => {
    Facture.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
FactureRoute.route('/update/:id').put((req, res, next) => {
    Facture.findByIdAndUpdate(req.params.id, {
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

// Delete Facture
FactureRoute.route('/delete/:id').delete((req, res, next) => {
  Facture.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
FactureRoute.get("/count", function(req, res) {

  var challengeId = req._id;

  var isSolved = function(challengeId, callback){  // <<=== pass callback here
      console.log("in the aggregation: ", challengeId); // returns challengeId
      Facture.aggregate([                      
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
          // do something with results and 
          // return it using res
      }
  }); 
});
FactureRoute.get("/challenge", function(req, res) {

  var challengeId = req._id;

  var isSolved = function(challengeId, callback){  // <<=== pass callback here
      console.log("in the aggregation: ", challengeId); // returns challengeId
      Facture.aggregate([
            
                 
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
FactureRoute.get("/statut", function(req, res) {

  var challengeId = req._id;

  var isSolved = function(challengeId, callback){  // <<=== pass callback here
      console.log("in the aggregation: ", challengeId); // returns challengeId
      Devis.aggregate([
                  //var isSolved = User.aggregate([
                 
                    {
                      $match: {statut: "envoyer"}
                     
                    },
                    {
                      $count: "envoyer", 
                    }
                 
              ],
              function(err, results){
                  console.log("this is the result: ", results); // logs a result if the there is one, and [] if there is no result.
                  callback(err, results); // <<=== call callback here to return
                  res.json(results);

              });
  };

 

  isSolved(challengeId, function(err, results) {
      if (err) {
          // return error here using res
      } else {
          // do something with results and 
          // return it using res
      }
  }); 
});
module.exports = FactureRoute;