var express = require('express');
var router = express.Router();
var SiteTitle = 'Rebirth Entertainment';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: SiteTitle });
});

/* GET home page. */
router.get('/vision', function(req, res, next) {
  res.render('vision', { title: SiteTitle });
});

/* GET home page. */
router.get('/weddings', function(req, res, next) {
  res.render('weddings', { title: SiteTitle });
});

/* GET home page. */
router.get('/corporate-events', function(req, res, next) {
  res.render('corporate-events', { title: SiteTitle });
});

/* GET home page. */
router.get('/school-events', function(req, res, next) {
  res.render('school-events', { title: SiteTitle });
});

module.exports = router;
