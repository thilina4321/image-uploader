const Product = require('../modal/product')
const file = require('../middleware/file')

exports.getProduct = (req,res,next)=>{

  Product.find().then((product)=>{
    res.status(200).json({
      products:product
    })
  }).catch(err=>console.log(err))


}

exports.postProduct = (req,res,next)=>{

  const fileData = req.body
  const url = req.protocol + '://' + req.get('host')
  console.log(fileData);

  if(!req.file){
    return req.status(401).json({
      error:'please upload a photo'
    })
  }

  const product = new Product({
    name:fileData.name,
    imageFile: url + '/images/' + req.file.filename
  })

  product.save().then(()=>{
    res.status(201).json({
      message:'Successful',
    })
  }).catch(err=>console.log(err))
}
