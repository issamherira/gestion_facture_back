const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Categorie = new Schema({
    code: {type:String},
    libelle: {type:String}
    },{
    collection: 'Categorie'})

module.exports = mongoose.model('Categorie', Categorie)