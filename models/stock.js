const { max } = require('lodash');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Stock = new Schema({
  
    libelle: {type:String},
    min :{type:Number ,default: 3},
    max :{type:Number ,default: 4} ,
    },{
    collection: 'Stock'})

module.exports = mongoose.model('Stock', Stock)