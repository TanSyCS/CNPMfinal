const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 30,
      unique: true,
    },

    email: {
      type: String,
      minlength: 10,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    mssv: {
      type: String,
      required: true,
      maxlength: 7,
    },
    rewrite_password: {
      type: String,
      minlength: 6,
    },
    khoa: {
      type: String,
    },
    dob: {
      type: Date,
    },
    sdt: {
      type: String,
      maxlength: 11,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
