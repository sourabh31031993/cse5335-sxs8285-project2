var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var assert = require('assert');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// get the user details from mongo db
router.get('/get-user', function(req, res, next) {
  //creating connection to mongodb
  mongodb.connect('mongodb://user:user@ds161245.mlab.com:61245/sourabh', function (err, db) {
    assert.equal(null, err);
    db.collection('BJsales').findOne({"id": parseInt(req.param('keyID'))}, {_id: 0}, function (err, item) {
      //sending response back to view
      res.json(item);
    });
  });
});