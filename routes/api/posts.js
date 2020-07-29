const express = require("express");
const router = express.Router();

// @route Get api/posts
// @desc Test route
// @access public / private

router.get("/", (req, res) => res.send("Posts route"));

//export route
module.exports = router;
