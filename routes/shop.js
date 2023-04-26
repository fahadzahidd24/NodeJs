const express = require('express');
const router = express.Router();
const pathDir = require('../util/path');
const path = require('path')
const adminData = require('./admin')

router.get('/',(req,res,next)=>{
    console.log(adminData.products)
    res.sendFile(path.join(pathDir, 'views', 'shop.html'))
})

module.exports = router;