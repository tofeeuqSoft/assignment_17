const mongoose = require("mongoose");

const UserShema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: false },
    phoneNumber: { type: String, required: false },
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.model("users", UserShema);
module.exports = User;
