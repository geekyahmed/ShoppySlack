const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const config = require('./config/configuration')
const passport = require('passport')
const mongoose = require('mongoose')
const session  = require('express-session')
const defaultController = require('./controllers/defaultController');
const { db: { host, port, name} } = config
const connectionString = `mongodb://${host}:${port}/${name}`


const app = express()
app.use(express.static(path.join(__dirname, 'public')))


//Configure MongoDB Database
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology:true })
    .then(response => {
      console.log('MongoDB Database Running Successfully')
    })
    .catch(err => {
      console.log('MongoDB Database Connection Failed')
    });

//Configuring Routes For Controllers

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
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
	res.send('<h1>Welcome To ShoppySlack API</h1>')
})

const defaultRoutes =require('./routes/defaultRoutes');
app.use('/api', defaultRoutes);

app.listen(config.app.port, (req, res)=>{
	console.log(`Server Is Live At Port ` + config.app.port)
})
