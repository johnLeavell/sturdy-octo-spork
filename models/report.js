const mongoose = require("mongoose");

const report = new mongoose.Schema(
  {
    summary: { type: String },
    ph: { type: Number },
    temp: { type: Number },
    userName: { type: mongoose.Types.ObjectId, ref: "User" },
    siteName: { type: mongoose.Types.ObjectId, ref: "Site"}
  },
  { timestamps: { createdAt: "created_at" } }
);

report.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
const Report = mongoose.model("Report", report);

module.exports = Report;
