const express = require('express');
const axios = require('axios');
const fetch = require("node-fetch");
var router = express.Router();

/* GET image of the day with axios */

router.get('/axios', function(req, res, next) {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then((response) => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            res.render('index', { title: response.data.title, path: response.data.url, description: response.data.explanation });
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            res.status(500).send('Error fetching data from the server');
        });
});


/* GET quote of the day with fetch */
router.get('/fetch', function(req, res, next) {
    fetch('https://quotes.toscrape.com/random')
        .then((response) => response.text())
        .then((body) => {
            res.send(body);
        });
});


router.get ('/upload_data', function(req, res, next) {
    const url = 'https://api.restful-api.dev/objects'
    const data = {
        "name": "Cat",
        "data": {
            "year_born": 2021,
            "name": 'Orion',
            "breed": "Siberian"
        }
    };
    const customHeaders = {
        "Content-Type": "application/json",
    }
    fetch(url, {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            res.send(data);
        })
        .catch((error) => {
            console.error(error);
        });
});

router.get('/reddit', async function(req, res, next) {
    fetch('https://www.reddit.com/r/unitedkingdom/top.json?limit=10&t=year')
        .then(res => res.json())
        .then(json => console.log(json))
        .catch((error) => {
            console.error('Error fetching Reddit data:', error);
            res.status(500).send('Error fetching Reddit data');
        });
    try {
        let response = await fetch('https://www.reddit.com/r/unitedkingdom/top.json?limit=10&t=year');
        response = await response.json();
        res.status(200).json(response);
        res.render('reddit', { title: "REDDIT", data: response.data });
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Internal Server Error.`});
    }
});



module.exports = router;
