const toturialRouter = require('./toturial');
const siteController = require('./site');
const userController = require('./users');
const cakeController = require('./cakes');


function route (app){
    // ---ACTION ---> DISPATCHER ---> FUNCTION HANDLER ( Controller )   
    app.use('/toturial',toturialRouter)
    app.use('/users', userController);
    app.use('/cakes', cakeController);
    app.use('/', siteController);
}

module.exports =  route;
