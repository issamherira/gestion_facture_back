const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Commande = new Schema({
  codecommande :{type:String},
    code_client:{type:String},
    date:{type:String},
    dateexpe:{type:String},
    dateliv: {type:String},
    note:{type:String},
    produits:[{
        codeproduit :{type:String},
        tva:{type:String},
        pu:{type:Number},
        qte:{type:String},
        totht:{type:Number}

    }],
    tottva:{type:Number},
      totttc: {type:Number},
      wtotht: {type:Number},
      statut:{type:String}

    

  
    },{
    collection: 'Commande'})

module.exports = mongoose.model('Commande', Commande)