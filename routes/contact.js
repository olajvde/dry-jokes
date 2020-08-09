
var express = require('express');
var router = express.Router();
//var joker = require('give-me-a-joke');




/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.render('contact');
});

module.exports = router;
