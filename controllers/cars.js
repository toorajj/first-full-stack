const { response } = require('express');
const express = require('express');

const router = express.Router();

const db = require('../models');

router.get("/", function (request, response) {
    db.Car.find({}, function (error, allCar) {
        if (error) {
            console.log(error);
            return response.send("Internal Server Error");
        } else {
            const context = {
                cars: allCar,
            };
            return response.render("cars/index", context);
        }
    });
});

//New car route

router.get('/new', (req, res) => res.render('cars/new'));

router.post('/addcar', (req, res)=> {
    req.body._id = db.Cars.length;
    db.Cars.push(req.body);
    res.redirect('/cars');
});



module.exports = router;