var express = require('express');
var router = express.Router();

/* GET front page. */
router.get('/', function(req, res, next) {
  res.render('./user/index');
});

// about us
router.get('/contact_us', function(req, res, next) {
  res.render('./user/Contact_us');
});

router.post('/savepost', function(req, res, next) {
  console.log(req.body);
  // req.render('./user/Contact_us');
});

module.exports = router;
