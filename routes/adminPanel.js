var express = require('express');
var router = express.Router();
var blogController=require('../controller/blogController');

var verifyAdmin=require('../middleware/verifyAdmin')
/* GET home page. */
router.get('/adminPanel/:token',verifyAdmin,blogController.adminpanel
)


module.exports=router