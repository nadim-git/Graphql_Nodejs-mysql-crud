const Sequelize = require("sequelize");

const sequelize = new Sequelize("dummy_db", "root", "Nadim@db123", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("server connected");
  })
  .catch((err) => {
    console.log(`Error occured ${err}`);
  });

module.exports = sequelize;
