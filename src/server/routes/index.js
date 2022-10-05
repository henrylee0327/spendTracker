const express = require("express");
const router = express.Router();
const cardRoutes = require("./card-routes");

router.use("/api/card", cardRoutes);

module.exports = router;
