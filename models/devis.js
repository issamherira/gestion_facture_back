const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Devis = new Schema({
    numero :{type:Number},
    code_client:{type:String},
    date:{type:String},
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


    

  
    },{
    collection: 'Devis'})

module.exports = mongoose.model('Devis', Devis)