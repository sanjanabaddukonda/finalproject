var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {
    title: "Home"
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About'
  });
});

/* GET products page. */
router.get('/stats', function(req, res, next) {
  res.render('stats', { 
    title: 'Products'
  });
});

/* GET services page. */
router.get('/projectguide', function(req, res, next) {
  res.render('projectguide', { 
    title: 'projectguide'
  });
});



module.exports = router;
