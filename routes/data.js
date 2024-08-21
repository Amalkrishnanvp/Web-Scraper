const express = require("express");
const router = express.Router();

/* POST data */
router.post("/", (req, res, next) => {
  res.send("Everything is ok");
});

module.exports = router;
