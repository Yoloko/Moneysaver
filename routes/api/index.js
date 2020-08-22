const router = require("express").Router();
const budgetRoutes = require("./savings");

// Book routes
router.use("/budget", budgetRoutes);

module.exports = router;
