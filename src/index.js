const express = require ('express');
const morgan = require ('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('./routes/index.route');
const app = express();
const port = 3000;

// Static files 
app.use(express.static(path.join( __dirname, 'public')));

// Handle POST method
app.use(express.urlencoded({
    extended:true
}));

// Handle XMLHttpRequest, fetch, axios, ajax
app.use(express.json());

// //HTTP logger
// app.use(morgan(`combined`))

// Template engine
app.engine('hbs', handlebars.engine({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources','views'));

// Routes init
route(app);

app.listen(port, ()=> console.log(`Running at http://localhost:${port}`));
