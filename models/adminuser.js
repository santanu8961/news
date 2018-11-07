"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* artcomment array-------------------------------------
var artcomment = new mongoose.Schema({ 
abc : String,
bcd : String,
date : { type: Date, default: Date.now},
lastModDate: {type: Date},
newUser  : { type: Boolean, default: false },
userID: Number    
},
});
--------------------------------------------------------------*/

module.exports = mongoose.model('adminuser', {

            name: String,
            email: String,
            phone: Number,
            msg: String

        });