var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add', function(req, res, next) {
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);
    let result = num1 + num2;
    console.log(result)
    return res.json({result: result})
});

module.exports = router;
