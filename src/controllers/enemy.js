const Enemy = require("../models/enemy");

const getOneEnemy = (req, res) => {
  console.log("getOne");
};

const getAllEnemies = (req, res) => {
  Enemy.find()
    .then((enemies) => {
      res.status(200).json({ Enemies: enemies });
    })
    .catch((error) => console.log(error));
};

const createEnemy = async (req, res) => {
  const enemy = new Enemy(req.body);
  try {
    await enemy.save();
    return res.status(200).json(enemy);
  } catch (error) {
    return res.status(400).json({
      message: `Erro ao criar dado ${error}`,
    });
  }
};

const deleteEnemy = (req, res) => {
  console.log("delete");
};

const editEnemy = (req, res) => {
  console.log("edit");
};

module.exports = {
  getOneEnemy,
  getAllEnemies,
  createEnemy,
  deleteEnemy,
  editEnemy,
};
