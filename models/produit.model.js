const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Produit = new Schema({
    libelle:{type:String},
    codebarre:{type:String},
    categorie:{type:String},
    prixachat: { type: Number },
    tva: { type: String },
    taxe: { type: String },
   prixpublic:{type:String},
   marque:{type:String},
    reference:{type:String},
    code_four : { type: String },
    unite : { type: String },
    stock :{type:Number ,default: 0} 

  
    },{
    collection: 'Produit'})

module.exports = mongoose.model('Produit', Produit)