const express = require("express");
const enemyControllers = require("../controllers/enemy");

const router = express.Router();

router.get("/", enemyControllers.getAllEnemies);
router.get("/:id", enemyControllers.getOneEnemy);
router.post("/:id", enemyControllers.createEnemy);
router.patch("/:id", enemyControllers.editEnemy);
router.delete("/:id", enemyControllers.deleteEnemy);

module.exports = router;
