var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/filecreate', function(req, res) {
  console.log(req.query);
});

module.exports = router;
