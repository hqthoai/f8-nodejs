const mongoose = require('mongoose');
//const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true, 
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
  }
);


User.plugin(mongooseDelete, { 
  deletedAt : true ,
  overrideMethods: 'all' 
});

module.exports = mongoose.model('User', User);
