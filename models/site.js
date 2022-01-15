const mongoose = require("mongoose");

const site = new mongoose.Schema({
  siteName: { type: String },
  location: { type: String },
  reports: { type: mongoose.Types.ObjectId, ref: "Report" },
});

site.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Site = mongoose.model("Site", site);

module.exports = Site;
