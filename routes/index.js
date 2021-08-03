var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome!' });
});

router.get('/about', (req, res, next) =>{
  res.render('about', {title: 'About me'})
});

router.get('/certifications', (req, res, next) =>{
  res.render('certifications', {title:'Certifications'})
});

router.get('/hobbies', (req, res, next) =>{
  res.render('hobbies', {title:'My Hobbies'})
});

router.get('/contact', (req, res, next) =>{
  res.render('contact', {title:'Connect!'})
});

module.exports = router;
