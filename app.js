const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const hbs = require("express-handlebars")
const config = require('./config/configuration')
const passport = require('passport')
const mongoose = require('mongoose')
const session  = require('express-session')
const userController = require('./controllers/userController');
const defaultController = require('./controllers/defaultController');
const { db: { host, port, name} } = config
const connectionString = `mongodb://${host}:${port}/${name}`


const app = express()
app.use(express.static(path.join(__dirname, 'public')))


//Configure MongoDB Database
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology:true })
    .then(response => {
      console.log('MongoDB Database Is Running Successfully')
    })
    .catch(err => {
      console.log('MongoDB Database Connection Failed')
    });

//Configuring Routes For Controllers
    app.use('/', defaultController);
    app.use('/user', userController)

//Setting Up Express Session
app.use(session({
	secret : 'johnnywick',
	resave: false,
	saveUninitialized: false
}))

//Configuring passport
app.use(passport.initialize())
app.use(passport.session())

//Configure bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Configuring Handlebars For Views
app.engine('handlebars', hbs({defaultLayout: 'default' }));
app.set('view engine', 'handlebars')

app.get('/', (req, res)=>{
	res.render('default/index')
})

app.listen(config.app.port, (req, res)=>{
	console.log(`Server Is Live At Port ` + config.app.port)
})
