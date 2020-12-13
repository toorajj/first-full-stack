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
app.use( express.urlencoded({ extended: true }));
app.use( methodOverRide( '_method'));

//Routes
app.get('/', (req, res) => res.render('home'));


//Server Bind
app.listen(PORT, function(){
    console.log(`Server is live at http"//localhost:${PORT}/`);
});