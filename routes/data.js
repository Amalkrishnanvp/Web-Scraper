const express = require("express");
const router = express.Router();

/* POST data */
router.post("/", (req, res, next) => {
  const givenUrl = req.body.givenUrl;
  console.log(`Hello: ${givenUrl}`);
});

module.exports = router;
