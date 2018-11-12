var express = require('express');
var router = express.Router();
const adminuser = require('../models/adminuser')

/* GET front page. */
router.get('/', function(req, res, next) {
  adminuser.find((err,doc)=>{
    console.log(doc);
    if (err){ throw err};
     res.render('./user/index',{'postdata':doc});
    
  })
});

// about us
router.get('/contact_us', function(req, res, next) {
  res.render('./user/Contact_us');
});

// // single post page 
// router.get('/single', function(req, res) {
//   // console.log('into single');
//   adminuser.find((err,doc)=>{
//     if (err){ throw err};
//      res.render('./user/single',{'postdata':doc});
//     console.log(doc);
//   })
// });

// Save data
router.post('/savepost', function(req, res, next) {
  console.log(postdata);
  var post_time = new Date().toJSON().slice(0,10);
  var postdata = new adminuser({
                  'name':req.body.name,
                  'phone':req.body.phone,
                  'msg':req.body.msg,
                  'short-msg':req.body.short_msg,
                  'email':req.body.email,
                  'date':post_time,
                  'blogtitle':req.body.blogtitle
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

// dynamic single-post
router.get('/single/:_id',function(req,res,next){
  var id = req.params._id;
  // console.log(id);
  adminuser.findOne({'_id':id},(err,doc)=>{
    // console.log(doc)
      if(err){
          res.render('./user/single',{doc:[]});
      } else {
          // console.log("result inside /blog-post");
          // console.log(doc);
          res.render('./user/single.ejs',{'postdata':doc});
      }
  });
  
});
module.exports = router;
