const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Note = sequelize.define("note", {
  //   id: {
  //     type: Sequelize.INTEGER,
  //     allowNull: false,
  //     primaryKey: true,
  //     autoIncrement: true,
  //   },
  content: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Note;
