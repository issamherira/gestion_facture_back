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
clientRoute.get("/challenge", function(req, res) {

  var challengeId = req._id;

  var isSolved = function(challengeId, callback){  // <<=== pass callback here
      console.log("in the aggregation: ", challengeId); // returns challengeId
      Client.aggregate([
            
                 
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
module.exports = clientRoute;