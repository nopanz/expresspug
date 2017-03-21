var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/registration', function(req, res, next) {
  res.render('registration', { title: 'Email Verification', link:'shitsu', name: 'Rey Anthony Aleonar'});
});

router.get('/newreg', function(req, res, next) {
  res.render('new/registration', { title: 'Email Verification', confirmationLink:'shitsu', name: 'Rey Anthony Aleonar'});
});

router.get('/newbuy', function(req, res, next) {
  res.render('new/buy-order-receipt', { title: 'Email Verification', confirmationLink:'shitsu', name: 'Rey Anthony Aleonar'});
});

router.get('/newwel', function(req, res, next) {
  res.render('new/welcome', { title: 'Email Verification', confirmationLink:'shitsu', name: 'Rey Anthony Aleonar'});
});

router.get('/newsel', function(req, res, next) {
  res.render('new/sell-order-receipt', { title: 'Email Verification', confirmationLink:'shitsu', name: 'Rey Anthony Aleonar'});
});

router.get('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'Email Verification', confirmationLink:'shitsu', name: 'Rey Anthony Aleonar'});
});
router.get('/buy', function(req, res, next) {
  res.render('buy-order-receipt', { title: 'Email Verification', confirmationLink:'shitsu', name: 'Rey Anthony Aleonar'});
});

router.get('/sel', function(req, res, next) {
  res.render('sell-order-receipt', { title: 'Email Verification', confirmationLink:'shitsu', name: 'Rey Anthony Aleonar'});
});
router.get('/passreset', function(req, res, next) {
  res.render('passwordreset', { title: 'Email Verification', siteHost:'shitsu', passwordResetHash: 'ReyAnthonyAleonar',fromIp:'127.0.0.1'});
});

module.exports = router;
