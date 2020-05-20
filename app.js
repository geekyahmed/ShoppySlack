const express = require('express')
const path = require('path')
const config = require('./config/configuration')
const mongoose = require('mongoose')
const session  = require('express-session')
const defaultController = require('./controllers/defaultController');
const defaultRoutes =require('./routes/defaultRoutes');
const { db: { host, port, name} } = config
const connectionString = `mongodb://${host}:${port}/${name}`
const app = express()

//Configuring Express
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))


//Configure MongoDB Database
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology:true })
    .then(response => {
      console.log('MongoDB Database Running Successfully')
    })
    .catch(err => {
      console.log('MongoDB Database Connection Failed')
    });


//Setting Up Express Session
app.use(session({
	secret : 'johnnywick',
	resave: false,
	saveUninitialized: false
}))


app.get('/', (req, res)=>{
	res.send('<h1>Welcome To ShoppySlack API</h1>')
})

app.use('/api', defaultRoutes);

app.listen(config.app.port, (req, res)=>{
	console.log(`Server Is Live At Port ` + config.app.port)
})
