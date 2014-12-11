var express = require('express');
var router = express.Router();

var User  = require('../models/users');


router.get('/', function(req, res) {
  User.find(function(err, bears) {
    if (err)
      res.send(err);

    res.json(bears);
  });
});

router.get('/:id', function(req, res) {

  User.findById(req.params.id, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });

});

router.post("/", function(req, res){
  var user = new User({ name : req.body.username , password: req.body.password , email: req.body.email });
  user.save(function (err,resSave) {
    if (err) {
      console.log('error');
    } else {
      res.json(resSave);
      console.log(' res --- '+ resSave);
    }
  });
});



module.exports = router;
