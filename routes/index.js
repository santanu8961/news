var express = require('express');
var router = express.Router();
const adminuser = require('../models/adminuser')

/* GET front page. */
router.get('/', function(req, res, next) {
  res.render('./user/index');
});

// about us
router.get('/contact_us', function(req, res, next) {
  res.render('./user/Contact_us');
});

// single post page
router.get('/single', function(req, res) {
  console.log('into single');
  adminuser.find((err,doc)=>{
    if (err){ throw err};
     res.render('./user/single',{'postdata':doc});
    console.log(doc);
  })
});

// Save data
router.post('/savepost', function(req, res, next) {
  console.log(req.body);
  var postdata = new adminuser({
                  'name':req.body.name,
                  'phone':req.body.phone,
                  'msg':req.body.msg,
                  'short-msg':req.body.short_msg,
                  'email':req.body.email
  });
  postdata.save(err=>{
    if(err){
      console.log(err);
    }else{
      console.log('your data has been saved');
    }
    
  })
  // req.render('./user/Contact_us');
});

module.exports = router;
