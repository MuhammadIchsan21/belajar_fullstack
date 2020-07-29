const express = require("express");
const router = express.Router();

// @route Get api/profile
// @desc Test route
// @access public / private

router.get("/", (req, res) => res.send("profile route"));

//export route
module.exports = router;
