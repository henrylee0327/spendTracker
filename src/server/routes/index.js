const express = require("express");
const router = express.Router();
const cardRoutes = require("./card-routes");

router.use("/card", cardRoutes);

module.exports = router;
