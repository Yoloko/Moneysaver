const router = require("express").Router();
const bookRoutes = require("./savings");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
