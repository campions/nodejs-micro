const { Op, fn, col } = require('sequelize');

const controllers = {
  getBestProfession: async (req, res) => {
    const { Contract, Job, Profile } = req.app.get('models');
    const { start: startDate, end: endDate } = req.query;
    const job = await Job.findOne({
      where: {
        paymentDate: {
          [Op.between]: [startDate, endDate],
        },
      },
      attributes: [[fn('max', col('price')), 'maxPrice']],
      include: [
        {
          model: Contract,
          include: [
            {
              model: Profile,
              as: 'Client',
            },
          ],
        },
      ],
    });
    if (!job) return res.status(404).end();
    res.json({
      status: 200,
      profession: job.Contract.Contractor.profession,
    });
  },

  getBestClients: async (req, res) => {
    const { Contract, Job, Profile } = req.app.get('models');
    const { start: startDate, end: endDate, limit } = req.query;
    const contracts = await Job.findAll({
      where: {
        paymentDate: {
          [Op.between]: [startDate, endDate],
        },
      },
      order: [['price', 'ASC']],
      limit: limit || 2,
      include: [
        {
          model: Contract,
          include: [
            {
              model: Profile,
              as: 'Contractor',
            },
            {
              model: Profile,
              as: 'Client',
            },
          ],
        },
      ],
    });
    if (!contracts) return res.status(404).end();

    res.json(
      contracts.map((contract) => ({
        id: contract.Contract.ClientId,
        fullName: `${contract.Contract.Client.firstName} ${contract.Contract.Client.lastName}`,
        paid: contract.price,
      })),
    );
  },
};

module.exports = controllers;
