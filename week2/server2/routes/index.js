var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add', function(req, res, next) {
  let num1 = req.body.num1
  let num2 = req.body.num2;

  fetch('http://localhost:3000/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({num1: num1, num2: num2})
  }).then(r => { //cant use res twice so call it r
    r.json().then(json => {
      res.render('index', {title: "Result = " + json.result});
    })
    .catch(err => {
      console.log(err)
    })
  })
});

module.exports = router;
