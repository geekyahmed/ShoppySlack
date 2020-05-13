const express = require('express')
const bodyParser = require('body-parser')
const handlebars = require("express-handlebars")
const app = express()

app.get('/', (req, res)=>{
  res.send('Hello from the server side')
})
