const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name:{type:String, required:true},
  imageFile:{type:String, required:true},
})

module.exports = mongoose.model('product', productSchema)
