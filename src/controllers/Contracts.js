const { Op } = require('sequelize');

const controllers = {
  getContract: async (req, res) => {
    const { Contract } = req.app.get('models');
    const { id } = req.params;
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
  getAllContracts: async (req, res) => {
    const { Contract } = req.app.get('models');
    const contracts = await Contract.findAll({
      where: {
        status: {
          [Op.not]: 'terminated',
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
