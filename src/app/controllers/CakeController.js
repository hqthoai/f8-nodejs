const Cake = require("../models/Cake");
const { multipleMongooseToObject } = require("../../util/mongoose");

class CakeController {
  // [GET] /cakes/:slug
  show(req, res, next) {
    Cake.findOne({ slug: req.params.slug })
      .then((Cake) => {
        res.render("cakes/show", {
          cake: mongooseToObject(cake),
        });
      })
      .catch((err) => {
        next;
        // xử lý các lỗi ở đây
        // res.status(400).json({ error: "ERROR!!" });
      });
  }

  // [GET] /cakes/all-cake
  showAll(req, res, next) {
    Cake.find({})
      .then((cakes) => {
        res.render('cakes/all-cake', {
          cakes: multipleMongooseToObject(cakes),
        });
      })
      .catch(next);
    
  }

  // [GET] /cakes/create
  create(req, res, next) {
    res.render("cakes/create");
  }
  // [POST] /cakes/store
  store(req, res, next) {
    const cake = new Cake(req.body);
    cake
      .save()
      .then(() => {
        res.redirect("manage-cake");
      })
      .catch((error) => {});
  }

  // [GET] /cakes/manage
  manageCake(req, res, next) {
    //res.json(res.locals._sort);
    let cakeQuery = Cake.find({});
    if (req.query.hasOwnProperty("_sort")) {
      cakeQuery = cakeQuery.sort({
        [req.query.column]: req.query.type,
      });
    }
    Cake.find({})
      .then((cakes) => {
        res.render("cakes/manage-cake", {
          cakes: multipleMongooseToObject(cakes),
        });
      })
      .catch(next);
  }
}

module.exports = new CakeController();
