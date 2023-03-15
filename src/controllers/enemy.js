const Enemy = require("../models/enemy");

const getOneEnemy = (req, res) => {
  const enemyId = req.params.id;
  Enemy.findById({ _id: enemyId })
    .then((enemy) => {
      res.status(200).json({ Enemy: enemy });
    })
    .catch((error) => {
      res.status(400).json({ message: `Erro ao mostrar dado ${error}` });
    });
};

const getAllEnemies = (req, res) => {
  Enemy.find()
    .then((enemies) => {
      res.status(200).json({ Enemies: enemies });
    })
    .catch((error) => {
      res.status(400).json({ message: `Erro ao mostrar dado ${error}` });
    });
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
  const enemyId = req.params.id;
  Enemy.findByIdAndRemove({ _id: enemyId })
    .then((enemy) => {
      res.status(200).json({ Enemy: enemy });
    })
    .catch((error) => {
      res.status(400).json({ message: `Erro ao deletar dado ${error}` });
    });
};

const editEnemy = (req, res) => {
  const enemyId = req.params.id;
  Enemy.findByIdAndUpdate(enemyId, { ...req.body })
    .then((enemy) => {
      res.status(200).json({ Enemy: req.body });
    })
    .catch((error) => {
      res.status(400).json({ message: `Erro ao deletar dado ${error}` });
    });
};

module.exports = {
  getOneEnemy,
  getAllEnemies,
  createEnemy,
  deleteEnemy,
  editEnemy,
};
