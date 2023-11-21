var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function (req, res) {
  fs.readdir("./uploads", { withFileTypes: true }, function (err, files) {
    res.render("index", { files: files });
  })
});

router.get('/filecreate', function (req, res) {
  fs.writeFile(`./uploads/${req.query.filename}`, "", function (err) {
    if (err) res.send(err);
    else res.redirect("back");
  });
});

router.get('/foldercreate', function (req, res) {
  fs.mkdir(`./uploads/${req.query.foldername}`, function (err) {
    if (err) res.send(err);
    else res.redirect("back");
  });
});
module.exports = router;
