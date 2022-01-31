const { isAdmin, isLoggedIn } = require("../middleware/auth");

const express = require("express"), 
 router = express.Router(),
 { createSH,showSH,editSH,deleteSH,showAllSH } = require("../middleware/superHero");
 router.route("/").get(showAllSH).post(isLoggedIn,createSH);
 router.route("/:id").get(showSH).put(isLoggedIn, editSH).delete(isLoggedIn, deleteSH);

 module.exports = router;
