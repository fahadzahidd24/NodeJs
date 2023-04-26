const express = require('express');
const router = express.Router();
const pathDir = require('../util/path');
const path = require('path')
const adminData = require('./admin')

router.get('/',(req,res,next)=>{
    res.render('shop', {prods: adminData.products, pageTitle: 'Shop', path: '/'})
})

module.exports = router;