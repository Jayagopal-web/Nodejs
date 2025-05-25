const express = require('express'); 

const router = express.Router();

router.get('/add-product',(req,res)=>{
    res.send("<h1>Add Product</h1><form action='/admin/store-product' method='POST'><input type='text' name='message'><input type='submit' value='Submit'></form>");
});

router.post('/store-product',(req,res)=>{
    console.log("RES", req.body.message);
    res.send('<h1>Product Submitted</h1>');
});

module.exports = router;