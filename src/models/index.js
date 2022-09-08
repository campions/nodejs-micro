const Sequelize = require("sequelize");
const Profile = require("./Profile");
const Contract = require("./Contract");
const Job = require("./Job");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite3",
});

// Models with sequelize
const profileSequelize = Profile(sequelize, Sequelize);
const jobSequelize = Job(sequelize, Sequelize);
const contractSequelize = Contract(sequelize, Sequelize);

// Relationships
contractSequelize.belongsTo(profileSequelize, { as: "Contractor" });
contractSequelize.belongsTo(profileSequelize, { as: "Client" });
contractSequelize.hasMany(jobSequelize);
jobSequelize.belongsTo(contractSequelize);
profileSequelize.hasMany(contractSequelize, {
  as: "Contractor",
  foreignKey: "ContractorId",
});
profileSequelize.hasMany(contractSequelize, {
  as: "Client",
  foreignKey: "ClientId",
});

module.exports = {
  sequelize,
  Profile: profileSequelize,
  Contract: contractSequelize,
  Job: jobSequelize,
};
