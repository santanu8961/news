var express = require('express');
var router = express.Router();

/* GET users login */
router.get('/login', function(req, res, next) {
  res.render('./admin/login');
});
// post blog
router.get('/post', function(req, res, next) {
  res.render('./admin/post');
});
module.exports = router;
