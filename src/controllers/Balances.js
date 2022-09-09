const { fn, col } = require('sequelize');

const controllers = {
  deposit: async (req, res) => {
    const { Profile, Job } = req.app.get('models');
    const { userId } = req.params;
    const { amount } = req.body;
    const profile = await Profile.findOne({
      where: {
        id: userId,
      },
    });

    if (!profile) {
      return res.status(400).json({
        status: 400,
        message: 'The user does not exist',
      });
    }

    const clients = await profile.getClient();
    // W: From my point of view a profile should be unique per client/contractor
    const job = await Job.findOne({
      where: {
        ContractId: clients[0].id,
      },
      attributes: ['ContractId', [fn('sum', col('price')), 'totalAmount']],
      group: ['ContractId'],
    });

    if (amount <= job.dataValues.totalAmount * 0.25) {
      try {
        await profile.update({ balance: profile.balance + amount });
        res.status(201).json({
          status: 201,
        });
      } catch (err) {
        res.status(500).end();
      }
    } else {
      res.status(500).json({
        status: 500,
        message: 'The amount to deposit is too big!',
      });
    }
  },
};

module.exports = controllers;
