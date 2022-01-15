const mongoose = require("mongoose");

const user = new mongoose.Schema({
  firstName: { type: String, select: false },
  lastName: { type: String, select: false },
  userName: { type: String },
  password: { type: String, select: false },
  email: { type: String, select: false },
  phone: { type: String, select: false },
  reports: [{ type: mongoose.Types.ObjectId, ref: "Report" }],
});
user.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
const User = mongoose.model("User", user);

module.exports = User;
