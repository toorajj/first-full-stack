// External Modules
const express = require("express");
const methodOverRide = require("method-override");

//Internal Modules
const db = require("./models");
const controllers = require ("./controllers");

//Intance Module
const app = express();

//System Variables
const PORT = 3001;

//View Engine
app.set("view engine", "ejs");

//Middleware
app.use(express.urlencoded({ extended: true}));
app.use(methodOverRide("_method"));

// logger
app.use(function (req, res, next) {
    console.log(req.url, req.method);
    next();
});

// Controllers
app.use("/cars", (controllers.cars));

//Home Route
app.get("/", (req, res) => res.render("home"));



// 404 route
app.get(function (req, res) {
	res.send("404 the page is not found.");
});

//Server Bind
app.listen(PORT, function () {
    console.log(`Server is live at http"//localhost:${PORT}/`);
});