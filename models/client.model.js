const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Client = new Schema({
    type:{type:String},
    siteweb:{type:String},
    sociale:{type:String},
    matricule:{type:String},
    civilite:{type:String},
    nom: { type: String },
    prenom: { type: String },
    adresse: { type: String },
    email: { type: String },
    telephone: { type: Number },
    fax:{type:Number}

},{
    collection: 'Clients'})

module.exports =  mongoose.model('Client', Client)