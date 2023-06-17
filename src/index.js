const express = require ('express');
const morgan = require ('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const SortMiddleware = require('./app/middlewares/SortMiddleware');

const route = require('./routes/index');
const app = express();
const port = 3000;
const db = require('./config/db/index');


db.connect();
// Static files 
app.use(express.static(path.join( __dirname, 'public')));

// Handle POST method
app.use(express.urlencoded({
    extended:true
}));

// Custom middlewares
app.use(SortMiddleware);

// Handle XMLHttpRequest, fetch, axios, ajax
app.use(express.json());
app.use(methodOverride('_method'))

// //HTTP logger
// app.use(morgan(`combined`))

// Template engine
app.engine('hbs', handlebars.engine({
    extname:'.hbs',
    helpers:{
        sum: (a,b) => a+b,
        sortable: (field, sort) => {
            const sortType = field === sort.column ? sort.type : 'default';
        

            const icons = {
                default:'oi oi-elevator',
                asc:'oi oi-sort-ascending',
                desc:'oi oi-sort-descending',
            };
            const types = {
                default:'desc',
                asc:'desc',
                desc:'asc'
            }
            const type = types[sortType];
            const icon = icons[sortType];
            return `<a href="?_sort&column=${field}&type=${type}">
            <span class="${icon}"></span>
        </a>`;
        },
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources','views'));

// Routes init
route(app);

app.listen(port, ()=> console.log(`Running at http://localhost:${port}`));
