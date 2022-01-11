const { Router } = require("express");
const userController = require("./../controllers/user");
const siteController = require("./../controllers/site");
const reportController = require("./../controllers/report");
const router = Router();

//user
router.get("/api/users/", userController.getAllUsers);
router.post("/api/user/", userController.createUser);
router.get("/api/user/:id", userController.getUser);
router.patch("/api/user/:id", userController.updateUser);
router.delete("/api/user/:id", userController.deleteUser);

//report
router.get("/api/report/:id", reportController.getReport);
router.post("/api/report/", reportController.createReport);
router.get("/api/reports/", reportController.getAllReports);
router.patch("/api/report/:id", reportController.updateReport);
router.delete("/api/report/:id", reportController.deleteReport);

//site
router.get("/api/site/:id", siteController.getSite);
router.post("/api/site/", siteController.createSite);
router.get("/api/sites/", siteController.getAllSites);
router.patch("/api/site/:id", siteController.updateSite);
router.delete("/api/site/:id", siteController.deleteSite);

module.exports = router;
