// External Modules
const express = require("express");

//Intance Module
const app = express();

//System Variables
const PORT = 3001;

//Server Bind
app.listen(PORT, function(){
    console.log(`Server is live at http"//localhost:${PORT}/`);
});