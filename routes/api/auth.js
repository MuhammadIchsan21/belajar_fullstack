const express = require("express");
const router = express.Router();

// @route Get api/auth
// @desc Test route
// @access public / private

router.get("/", (req, res) => res.send("Auth route"));

//export route
module.exports = router;
