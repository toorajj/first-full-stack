// External Modules
const express = require("express");
const methodOverRide = require('method-override');

//Intance Module
const app = express();

//System Variables
const PORT = 3001;

//View Engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(methodOverRide('_method'));

const db = require('./models');

//Routes
//Home
app.get('/', (req, res) => res.render('home'));
// Cars route
app.get('/cars', (req, res) => res.send(db.Cars));

// logger
app.use(function (request, response, next) {
    console.log(request.url, request.method);
    next();
});

//Server Bind
app.listen(PORT, function () {
    console.log(`Server is live at http"//localhost:${PORT}/`);
});