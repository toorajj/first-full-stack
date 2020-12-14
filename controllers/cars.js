const express = require('express');

const router = express.Router();

const db = require('../models');

router.get("/", function (req, res) {
    db.Car.find({}, function (error, allCar) {
        if (error) {
            console.log(error);
            return res.send("Internal Server Error");
        } else {
            const context = {
                cars: allCar,
            };
            return res.render("cars/index", context);
        }
    });
});

//New car route

router.get('/new', (req, res) => res.render('cars/new'));

router.post('/addCar', (req, res) => {
    db.Car.create(req.body, function (error, createdCar) {
        if (error) {
            console.log(error);
            return res.send("Internal Server Error");
        } else {
            console.log("Added Car", createdCar);
            return res.redirect("/cars");
        }
    });
});



module.exports = router;