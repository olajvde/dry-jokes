
var express = require('express');
var router = express.Router();
var joker = require('give-me-a-joke');

// joker.getRandomJokeOfTheDay(function(joke){
//     console.log(joke)
//   });

/* GET users listing. */
router.get('/', function(req, res, next) {
   joker.getRandomDadJoke((joke)=>{
        console.log(joke);
        res.render('try', {joke});
      })
  
});


module.exports = router;

