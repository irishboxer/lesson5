var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson5' });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    myName: "Scott",
    age: "23",
    month: "February",
    title: "About"}
  );
});
  router.get('/random', function(req, res, next) {
    res.render('random', { random: Math.random(),
    title: "Random"});
});
module.exports = router;
