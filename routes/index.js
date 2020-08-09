var express = require('express');
var router = express.Router();
var joker = require('give-me-a-joke');
/* GET home page. */



router.get('/', function(req, res, next) {

  joker.getRandomDadJoke((joke)=>{
    console.log(joke);
    res.render('index', {joke});
  })
  
});



module.exports = router;
