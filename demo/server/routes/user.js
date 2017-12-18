var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource' });
});

router.post('/login', function(req, res, next) {
  var param = {
  	userEmail:req.body.email,
  	userPwd: req.body.userPwd
  }
  let setjson = function () {
  		res.cookie('userEmail',param.userEmail,{
  			path:'/',
  			maxAge:1000*60*60
  		});
  		req.session.user = param;
  		res.json({
  			status:'0',
  			msg:'',
  			result:{
  				userEmail:param.userEmail
  			}
  		})
  } 
}

module.exports = router;
