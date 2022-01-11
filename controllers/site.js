const Site = require("./../models/site");

const createSite = async (req, res) => {
  try {
    const newSite = await Site.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        site: newSite,
      },
    });
  } catch (err) {
    res.status(400).json({
      sattus: "fail",
      message: err,
    });
  }
};

const getSite = async (req, res) => {
  try {
    const site = await Site.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const getAllSites = async (req, res) => {
  try {
    const sites = await Site.find();

    res.status(200).json({
      status: "success",
      results: sites.length,
      data: {
        sites,
      },
    });
  } catch (err) {
    res.status(404).json({
      statu: "fail",
      message: console.error(err),
    });
  }
};

const updateSite = async (req, res) => {
  try {
    const site = await Site.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        site,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const deleteSite = async (req, res) => {
  try {
    const site = await Site.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = { createSite, deleteSite, updateSite, getSite, getAllSites };
