const express = require('express');

const router = express.Router();

const db = require('../models');

router.get('/', (req, res) => {
    const context = {cars: db.Cars};
    res.render('cars/index', context);
});

//New car route

router.get('/new', (req, res) => res.render('cars/new'));

/*router.post('/addcar', (req, res) => {
    
    req.body._id = db.Car.length;
    db.Cars.push(req.body);
    res.redirect('/cars');
});*/



module.exports = router;