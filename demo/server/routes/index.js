var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  var name = req.body.username;
  var pwd = req.body.password;
  res.send('登录成功，账号密码为：'+name+"---"+pwd);
});

module.exports = router;
