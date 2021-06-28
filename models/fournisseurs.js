const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Fournisseur = new Schema({
    code:{type:Number},
    sociale:{type:String},
    siteweb:{type:String},
    matricule:{type:String},
    civilite:{type:String},
    nom: { type: String },
    prenom: { type: String },
    adresse: { type: String },
    email:{type:String},
    telephone:{type:Number},
    fax:{type:Number}
    },{
    collection: 'Fournisseurs'})

module.exports = mongoose.model('Fournisseur', Fournisseur)