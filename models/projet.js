const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Projet = new Schema({
    nom:{type:String},
    codeprojet:{type:String},
    commande:{type:String},
    client:{type:String},
    datedebut:{type:String},
    datefin:{type:String},
    description: {type:String},
    statut:{type:String},
    etapes:[{
        nom :{type:String},
        datedebut:{type:String},
        datefin:{type:String},
        description:{type:String},
        tache:[{
            nom:{type:String},
            datedebut:{type:String},
            datefin:{type:String},
            description:{type:String},
             }],
        satut:{type:String}

    }],
    

    

  
    },{
    collection: 'Projet'})

module.exports = mongoose.model('Projet', Projet)