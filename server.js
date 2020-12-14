// External Modules
const express = require("express");
const methodOverRide = require('method-override');

//Internal Modules
const db = require('./models');
const controllers = require ('./controllers');

//Intance Module
const app = express();

//System Variables
const PORT = 3001;

//View Engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.urlencoded({ extended: true}));
app.use(methodOverRide('_method'));



// Controllers
app.use('/cars', (controllers.cars));

//Home Route
app.get('/', (req, res) => res.render('home'));


// logger
app.use(function (request, response, next) {
    console.log(request.url, request.method);
    next();
});

//Server Bind
app.listen(PORT, function () {
    console.log(`Server is live at http"//localhost:${PORT}/`);
});