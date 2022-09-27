const router = require("express").Router();
const getCardRoute = require("./get-card-route");
const postCard = require("./post-card");

router.get("/get-all-card", getCardRoute);
router.post("/add", postCard);

module.exports = router;
