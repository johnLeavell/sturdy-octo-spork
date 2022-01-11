const mongoose = require("mongoose");

const report = new mongoose.Schema(
  {
    summary: { type: String },
    ph: { type: Number },
    temp: { type: Number },
    userId: { type: Number },
    siteId: { type: Number },
  },
  { timestamps: { createdAt: "created_at" } }
);

const Report = mongoose.model("Report", report);

module.exports = Report;
