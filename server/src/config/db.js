const { Sequelize } = require("sequelize");

module.exports = new Sequelize("stiky-notes-app", "postgres", null, {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
});
