const express = require("express");
const router = express.Router();
const admUser = require("../controllers/admControlers");

router.get("/adm", admUser.search);
router.post("/adm/createuser", admUser.createdUser);
router.delete("/adm/deleteuser/:id", admUser.deletedUser);
router.put("/adm/createuser/:id", admUser.updatedUser);
router.get("/adm/:id",admUser.searchedSpecif)

module.exports = router;
