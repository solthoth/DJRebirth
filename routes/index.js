var express = require('express');
var router = express.Router();
var SiteTitle = 'Rebirth Entertainment';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: SiteTitle });
});

/* GET home page. */
router.get('/vision', function(req, res, next) {
  res.render('vision', { title: 'Our Vision' });
});

/* GET home page. */
router.get('/weddings', function(req, res, next) {
  res.render('weddings', { title: 'Weddings' });
});

/* GET home page. */
router.get('/corporate-events', function(req, res, next) {
  res.render('corporate-events', { title: 'Corporate Events' });
});

/* GET home page. */
router.get('/school-events', function(req, res, next) {
  res.render('school-events', { title: 'School Events' });
});

/* GET home page. */
router.get('/private-parties', function(req, res, next) {
  res.render('private-parties', { title: 'Private Parties' });
});

module.exports = router;
