const express = require("express");
const enemyControllers = require("../controllers/enemy");

const router = express.Router();

router.get("/", enemyControllers.getAllEnemies);
router.post("/", enemyControllers.createEnemy);
router.get("/:id", enemyControllers.getOneEnemy);
router.patch("/:id", enemyControllers.editEnemy);
router.delete("/:id", enemyControllers.deleteEnemy);

module.exports = router;
