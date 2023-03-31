var express = require('express');
var router = express.Router();
var productService = require('../services/product-service')

router.get('/',(req,res)=>{
	res.send(productService.getproducts());
})

router.post('/',(req,res)=>{
	res.send( productService.addproducts(req.body));
})

router.put('/',(req,res)=>{
    res.send(productService.updateproduct(req.body));
})


router.delete('/',function(req,res){ 
	 productService.deleteproduct(req.body.id)
     res.send({result:"success",msg:"product deleted"});
})

router.post('/',(req,res)=>{
	res.send(productService.copyproducts(req.body));
})
module.exports = router;