"use strict";
const { Op } = require("sequelize");

const controllers = {
  getBestProfession: async (req, res) => {
    const { Contract, Job } = req.app.get("models");
    const { start, end } = req.params;
    const contract = await Contract.findOne({
      where: {
        id,
        [Op.or]: [
          { ContractorId: req.profile.id },
          { ClientId: req.profile.id },
        ],
      },
    });
    if (!contract) return res.status(404).end();
    res.json(contract);
  },
  getBestClients: async (req, res) => {
    const { Contract, Profile } = req.app.get("models");
    const { start, end, limit } = req.params;
    const contracts = await Contract.findAll({
      where: {
        status: {
          [Op.not]: "terminated",
        },
        [Op.or]: [
          { ContractorId: req.profile.id },
          { ClientId: req.profile.id },
        ],
      },
    });
    if (!contracts) return res.status(404).end();
    res.json(contracts);
  },
};

module.exports = controllers;
