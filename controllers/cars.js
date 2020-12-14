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

router.get("/new", (req, res) => res.render("cars/new"));

router.post("/", function (req, res) {
    db.Car.create(req.body, function(error, createdCar) {
        if (error) {
            console.log(error);
            return res.send("Internal Server Error");
        } else {
            console.log("Added Car", createdCar);
            return res.redirect("/cars");
        }
    });
});
router.get("/:id", function (req, res) {
	const id = req.params.id;
	
		db.Car.findById(id, function (error, foundCar) {

			if(error){
				console.log(error);
				return res.send("Internal Server Error");
			} else {
				const context = {car: foundCar};

				return res.render("cars/show", context);
			}

		});
	
});



module.exports = router;