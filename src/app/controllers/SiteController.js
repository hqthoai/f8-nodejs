const User = require("../models/User");
const Cake = require("../models/Cake");
const {multipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
  // [GET] /
  index(req, res) {
    Cake.find()
    .then((cakes) => {
      // xử lý các tài liệu được trả về ở đây
      res.render('home',{
        cakes : multipleMongooseToObject(cakes)
      })
    })
    .catch((err) => {
      // xử lý các lỗi ở đây
      res.status(400).json({ error: "ERROR!!" });
    });

  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }

  cart(req, res) {
    res.render("cart");
  }
}

module.exports = new SiteController();
