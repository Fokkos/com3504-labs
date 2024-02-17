var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'COM3504/6504 Lab Class' });
});

router.get('/welcome', function(req, res, next){
  const login = true;
  res.render('welcome', { title: 'My cat web page', login: login, name: "" });
})

router.post('/welcome', function(req, res){
    const username = req.body.username;
    let set_login = true;
    if (username === "Paula"){
        set_login = false;
    }
    const login = set_login;
    res.render('welcome', { title: 'My cat web page', login: login, name: username });

})


module.exports = router;
