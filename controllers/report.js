const Report = require("./../models/report");

const createReport = async (req, res) => {
  try {
    const newReport = await Report.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        report: newReport,
      },
    });
  } catch (err) {
    res.status(400).json({
      sattus: "fail",
      message: err,
    });
  }
};

const getReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        report,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find();

    res.status(200).json({
      status: "success",
      results: reports.length,
      data: {
        reports,
      },
    });
  } catch (err) {
    res.status(404).json({
      statu: "fail",
      message: console.error(err),
    });
  }
};

const updateReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        report,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const deleteReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);

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

module.exports = {
  createReport,
  deleteReport,
  updateReport,
  getReport,
  getAllReports,
};
