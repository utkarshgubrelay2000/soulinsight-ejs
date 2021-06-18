var express = require('express');
var router = express.Router();
const registerController=require('../controller/registerController')
/* GET home page. */
router.get('/',registerController.homePage)
 router.get('/contact',registerController.contact)
 router.get('/about',registerController.about)
 router.get('/actions',registerController.actions)
 router.get('/b2b',registerController.b2b)
 router.get('/b2bc',registerController.b2bc)
 router.get('/culture',registerController.culture)
 router.get('/emotional',registerController.emotional)
 router.get('/genises',registerController.genises)
 router.get('/human',registerController.human)
 router.get('/fusion',registerController.fusion)
 router.get('/OurSpeciality',registerController.OurSpeciality)
 router.get('/ourphilosophy',registerController.ourphilosophy)
// router.get('/whyus',registerController.why_us)
// router.get('/privacy',registerController.privacy)
// router.post('/subscribe',registerController.subscribe)

// router.get('/success',registerController.paymentSuccess)




module.exports=router