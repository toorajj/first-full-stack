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

//New Get
router.get("/new", (req, res) => res.render("cars/new"));

//create -Post
router.post("/", function (req, res) {
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

//Show - Get
router.get("/:id", function (req, res) {
    const id = req.params.id;

    db.Car.findById(id, function (error, foundCar) {

        if (error) {
            console.log(error);
            return res.send("Internal Server Error");
        } else {
            const context = {
                car: foundCar
            };

            return res.render("cars/show", context);
        }

    });

});

//Delete - Delete
router.delete("/:id", function (req, res) {
    const id = req.params.id;
    db.Car.findByIdAndDelete(id, function (error, deletedCar) {
        if (error) {
            console.log(error);
            return res.send("Internal Server Error!");
        } else {
            return res.redirect("/cars");
        }
    });
});

//Edit - Get
router.get("/:id/edit", function (req, res) {
    const id = req.params.id;
    db.Car.findById(id, function (error, foundCar) {
        if (error) {
            console.log(error);
            return res.send("internal Server Error!");
        } else {
            const context = {car: foundCar}
            return res.render("cars/edit", context);
        }
    });
});

//Update - Put / Patch
router.put("/:id", function (req, res) {
    const id = req.params.id;
    db.Car.findByIdAndUpdate(
        id, {
            $set: {
                ...req.body
            }
        }, {
            new: true
        },
        function (error, updatedCar) {
            if (error) {
                console.log(error);
                return res.send("Internal Server Error!");
            } else {
                return res.redirect(`/cars/${updatedCar._id}`);
            }
        }
    )
});





module.exports = router;