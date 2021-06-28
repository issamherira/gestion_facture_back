const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Facture = new Schema({
  codefacture:{type:String},
    code_client:{type:String},
    date:{type:String},
    dateexpe:{type:String},
    dateliv: {type:String},
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
    collection: 'Facture'})

module.exports = mongoose.model('Facture', Facture)