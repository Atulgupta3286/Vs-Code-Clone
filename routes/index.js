var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/filecreate', function(req, res) {
  fs.writeFile(`./uploads/${req.query.filename}`,"",function(err){
    if(err) res.send(err);
    else res.redirect("back");
  });
});

module.exports = router;
