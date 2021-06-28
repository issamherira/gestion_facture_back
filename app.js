require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const nodemailer = require("nodemailer");


const rtsIndex = require('./routes/index.router');

const clientRoute = require('./controllers/client.controller');
const fournisseurRoute = require('./controllers/fournisseurs');
const produitRoute = require('./controllers/produit');
const categorieRoute = require('./controllers/categorie');
const stockRoute = require('./controllers/stock');
const devisRoute = require('./controllers/devis');
const commandeRoute = require('./controllers/commande');
const BcommandeRoute = require('./controllers/Bcommande');

const projetRoute = require('./controllers/projet');
const factureRoute = require('./controllers/facture');
var mailController = require('./controllers/mailer');







var app = express();

// middleware

app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);
app.use('/client', clientRoute);
app.use('/four',fournisseurRoute);
app.use('/produit',produitRoute);
app.use('/categorie',categorieRoute);
app.use('/stock',stockRoute);
app.use('/devis',devisRoute);
app.use('/commande',commandeRoute);
app.use('/Bcommande',BcommandeRoute);
app.use('/projet',projetRoute);
app.use('/facture',factureRoute);
app.use('/mail', mailController);





// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));