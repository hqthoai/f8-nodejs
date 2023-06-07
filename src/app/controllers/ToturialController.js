
class ToturialController {

    // [GET] /toturial
    index(req,res){
       res.render('toturial');
    }
    // [GET] /toturial/:slug
    show(req, res){       
        res.send("NODEJS!");
    }
}

module.exports = new ToturialController;
