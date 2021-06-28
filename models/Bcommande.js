const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Bcommande = new Schema({
  codeBcommande :{type:String},
    code_client:{type:String},
    comm:{type:String},
    date:{type:String},
    dateexpe:{type:String},
    dateliv: {type:String},
    note:{type:String},
    lcomms:[{
      codeBcommande:{type:String},
        codeproduit :{type:String},
        tva:{type:String},
        pu:{type:Number},
        qte:{type:String},
        totht:{type:Number}

    }],
    tottva:{type:Number},
      totttc: {type:Number},
      Ttotht: {type:Number},
      statut:{type:String}

    

  
    },{
    collection: 'Bcommande'})

module.exports = mongoose.model('Bcommande', Bcommande)