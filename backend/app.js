const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

app.use(cors())
const productRouter = require('./router/product')
app.use(express.json())

app.use(productRouter)

app.use("/images",express.static(path.join(__dirname, "images")))

mongoose.connect('mongodb+srv://thilina:HR34rNApWetn2Wwr@cluster0-gjqff.mongodb.net/image',{ useUnifiedTopology: true,useNewUrlParser: true })
.then(()=>{
  console.log('Connect to the database');
  app.listen(3000)
}).catch(error=>{
  console.log('Unable to connect to the database');
})
