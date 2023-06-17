const User = require('../models/User');
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');

class UserController {
  // [GET] /users/:slug
  show(req, res, next) {
    User.findOne({ slug: req.params.slug })
      .then((user) => {
        res.render('users/show', {
          user: mongooseToObject(user),
        });
      })
      .catch((err) => {
        next;
        // xử lý các lỗi ở đây
        // res.status(400).json({ error: "ERROR!!" });
      });
  }

  // [GET] /users/create
  create(req, res, next) {
    res.render('users/create');
  }
  // [POST] /users/store
  store(req, res, next) {
    const user = new User(req.body);
    user.save()
        .then(() => {
          res.redirect("manage-user");
        })
        .catch((error) => {});;
  };

  // [GET] /users/manage
  manageUser(req,res, next){
    //res.json(res.locals._sort);
    let userQuery = User.find({});
    if (req.query.hasOwnProperty('_sort')){
      userQuery = userQuery.sort({
        [req.query.column]: req.query.type
      });
    }
    User.find({})
      .then(users => {
        res.render('users/manage-user', {
          users: multipleMongooseToObject(users),
        });
      })
      .catch(next);

  };

  // [GET] /users/:id/edit
  edit(req,res, next){
    User.findById(req.params.id)
    .then(user => {
      res.render('users/edit', {
        user: mongooseToObject(user),
      });
    })
    .catch(next);
  }

  // [PUT] /users/:id
  update(req,res, next){
    User.updateOne({_id: req.params.id}, req.body)
    .then(() =>res.redirect('manage-user'))
    .catch(next);
  }

  // [DELETE] /users/:id
  delete(req,res, next){
    User.delete({_id:req.params.id})
    .then(() =>res.redirect('back'))
    .catch(next);
  }

  // [DELETE] /users/:id/force
  forceDelete(req,res, next){
    User.deleteOne({_id:req.params.id})
    .then(() =>res.redirect('back'))
    .catch(next);
  }

  // [GET] /users/trash-user
  trashUsers(req,res, next){
    User.findDeleted({})
    .then(users => {
      res.render('users/trash-user', {
        users: multipleMongooseToObject(users),
      });
    })
    .catch(next);
  }

    // [PATCH] /users/:id/restore
    restore(req,res, next){
      User.restore({_id: req.params.id})
      .then(() =>res.redirect('back'))
      .catch(next);
    }

}

module.exports = new UserController();
