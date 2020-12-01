const router = require("express").Router();
const apiRoutes = require("./API");

// Book routes
router.use("/", apiRoutes);

module.exports = router;
