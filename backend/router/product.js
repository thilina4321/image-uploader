const express = require('express')

const router = express.Router()
const productController = require('../controller/product')
const checkFile = require('../middleware/file')

router.post('/image', checkFile, productController.postProduct)
router.get('/image', productController.getProduct)


module.exports = router
