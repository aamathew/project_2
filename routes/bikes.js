var express = require('express');
var router = express.Router();
const bikesCtrl = require("../controllers/bikes")

router.get("/", bikesCtrl.index)
router.get("/new", bikesCtrl.new)
router.get("/:id/edit", bikesCtrl.edit)
router.post("/", bikesCtrl.create)
router.delete("/:id", bikesCtrl.delete)
router.put("/:id", bikesCtrl.update)


module.exports = router;
