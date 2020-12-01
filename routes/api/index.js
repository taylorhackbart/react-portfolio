const router = require("express").Router();
const apiRoutes = require("./API");

// Book routes
router.use("/contact", apiRoutes);

module.exports = router;
