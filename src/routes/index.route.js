const toturialRouter = require('./toturial.route')
const siteController = require('./site.route')
function route (app){
    // ---ACTION ---> DISPATCHER ---> FUNCTION HANDLER ( Controller )   
    app.use('/toturial',toturialRouter)

    app.use('/', siteController);
}

module.exports =  route;
