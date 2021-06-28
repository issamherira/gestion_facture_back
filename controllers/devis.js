const express = require('express');
const { findIndex } = require('lodash');
const app = express();
const devisRoute = express.Router();
const nodemailer = require("nodemailer");

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
devisRoute.route('/e').get((req, res) => {
  Devis.findOne({}, {sort:{$natural:-1}})})

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



devisRoute.route('/api').get(function(req, res) {
          Devis.aggrgation({$group:{_id:{'codedevi':'$codedevi','wtotht':'$wtotht'},count:{$sum:1}}},function(err,  apartments) {
              if (err) res.send(err);
              res.json(apartments);
          });
      });
    
      devisRoute.get("/challenge", function(req, res) {

        var challengeId = req._id;
    
        var isSolved = function(challengeId, callback){  // <<=== pass callback here
            console.log("in the aggregation: ", challengeId); // returns challengeId
            Devis.aggregate([
                        //var isSolved = User.aggregate([
                       
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
      devisRoute.get("/statut", function(req, res) {

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
devisRoute.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has been send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});



module.exports = devisRoute;