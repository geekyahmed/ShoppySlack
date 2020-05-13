const express = require('express')
const bodyParser = require('body-parser')
const handlebars = require("express-handlebars")
const config = require('./config/configuration')
const mongoose = require('mongoose')
const expressSession  = require('express-session')
const { db: { host, port, name} } = config
const connectionString = `mongodb://${host}:${port}/${name}`


const app = express()

//Configure MongoDB Database
mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(response => {
      console.log('MongoDB Database IS Running Successfully')
    })
    .catch(err => {
      console.log('MongoDB Database Connection Failed')
    });

//Setting Up Express Session
app.use(expressSession({secret : 'johnnywick'}))


app.get('/', (req, res)=>{
	res.send('Hello from the server side')
})

app.listen(config.app.port, (req, res)=>{
	console.log(`Server Is Live At Port ` + config.app.port)
})
