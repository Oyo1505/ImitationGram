const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require('cors');
const mongoose = require('mongoose');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const passport = require("passport");
const router = express.Router();
const PORT = process.env.PORT || 5000;
require('dotenv').config();



const app = express();
const dev = app.get('env') !== 'production';

app.use(cors());
app.use(express.json());
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

/*MONGODB*/
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch((error) => {
        console.log("Connection failed!");
        console.log(error);
    });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established sccessfully');
})
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
const usersRouter = require('./routes/users');
const imagesRouter = require('./routes/images');

app.use('/users', usersRouter);
app.use('/images', imagesRouter);

if (!dev) {
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));


    // the __dirname is the current directory from where the script is running
    app.use(express.static(path.join(__dirname, '/client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname + '/client/build/index.html'), function(err) {
            if (err) {
                res.status(500).send(err)
            }
        });
        /*ROUTE*/
        app.get('/kaamelott', (req, res) => {
            console.log('in kaamelott..')
        });
        router.get('/imitationgram', function(req, res) {
            app.get('/imitationgram', (req, res) => {
                res.send('imitationgram');
            });
        });


    });
}

if (dev) {
    app.use(morgan('dev'));

}

/*MAIL*/
app.post('/api/form', (req, res) => {

    const htmlEMail = `
		<h3>Nouveau Meassage</h3>
		<ul>
			<li>Name : ${req.body.name}</li>
			<li>Email : ${req.body.email}</li>

		</ul>
		<h3>Message </h3>
		<p>${req.body.message}</p>
		`
    // step 1
    /*GMAIL API*/
    var transport = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        secure: false,
        port: 465,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    // step 2 
    let mailOptions = {
        from: `${req.body.name}`, // sender address
        to: process.env.EMAIL, // list of receivers
        subject: "Mail de formulaire de contact du CV", // Subject line
        text: 'Premier Contact', // plain text body
        html: htmlEMail // html body
    };
    // step 3/
    transport.sendMail(mailOptions, (err, info) => {
        if (err) { return console.log(err) }
        console.log('message sent', info);
        console.log('message URL %s', nodemailer.getTestMessageUrl(info))
    });

});


module.exports = router;
app.listen(PORT, () => {
    console.log(`Server listend on the port ${PORT}`);
})