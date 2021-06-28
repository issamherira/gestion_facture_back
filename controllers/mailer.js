
const multer = require('multer')

var express = require("express");
var nodemailer = require('nodemailer');
const { fileURLToPath } = require('url');
const { file } = require('googleapis/build/src/apis/file');
var router = express.Router();
const path = require("path");
const util = require('util')
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../Documents/'));
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
		cb(null, file.fieldname + '-' + uniqueSuffix);
	}
})

const upload = multer({
	storage: storage
})

router.post("/sendEmail",upload.any(), function (req, res) {
    // console.log("req.files:",req.files)
    var data= JSON.parse(req.body.form);

    console.log(data)
    console.log(util.inspect(data,false,null,true))
 
    

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'issam.herira.ti14@gmail.com', //enter your gmail account e.g xyz@gmail.com
            pass: '53446079est'//your gmail password
        }
    });


    var mailOptions = {
        from: 'issam.herira.ti14@gmail.com',  //enter your gmail account e.g xyz@gmail.com
        to:  data.name,   //receiver"s gmail address or your email address
        subject: data.object,
        attachments: [ 
            {
                filename: req.files[0].originalname,
                path: 'C:/Users/issam/Desktop/plateforme/back/Documents/'  + req.files[0].filename
            }
           
        
        ]
       
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.json(error)
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.json({msg:"Email sent successfully"})
        }
    });
})

module.exports = router;