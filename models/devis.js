const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Devis = new Schema({
  codedevi :String,
    code_client:String,
    date:String,
    note:String,
    produits:[{
        codeproduit :String,
        tva:String,
        pu:Number,
        qte:String,
        totht:Number

    }],
    tottva:Number,
      totttc:Number,
      wtotht:Number,
statut:String

    

  
    })

module.exports = mongoose.model('Devis', Devis)