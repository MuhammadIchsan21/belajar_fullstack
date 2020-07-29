const express = require("express");
const router = express.Router();

// @route Get api/users
// @desc Test route
// @access public / private

router.get("/", (req, res) => res.send("User route"));

//export route
module.exports = router;
