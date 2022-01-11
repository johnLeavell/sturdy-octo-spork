const mongoose = require("mongoose");

const site = new mongoose.Schema({
  siteName: { type: String },
  location: { type: String },
});

const Site = mongoose.model("Site", site);

module.exports = Site;
