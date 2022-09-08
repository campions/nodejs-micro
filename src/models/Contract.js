module.exports = (sequelize, Sequelize) => {
  const Contract = sequelize.define("Contract", {
    terms: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM("new", "in_progress", "terminated"),
    },
  });
  return Contract;
};
