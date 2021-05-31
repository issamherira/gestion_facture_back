const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Commande = new Schema({
    code_client:{type:String},
    date:{type:Date},
    dateexpe:{type:Date},
    dateliv: {type:Date},
    note:{type:String},
    produits:[{
        produit :{type:String},
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