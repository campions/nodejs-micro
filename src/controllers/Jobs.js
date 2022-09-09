/* eslint-disable camelcase */

const { Op } = require('sequelize');

const controllers = {
  getUnpaidJobs: async (req, res) => {
    const { Job, Contract } = req.app.get('models');
    const { id } = req.profile;
    const jobs = await Job.findAll({
      where: {
        paid: {
          [Op.is]: null,
        },
      },
      include: [
        {
          model: Contract,
          where: {
            [Op.or]: [{ ContractorId: id }, { ClientId: id }],
          },
        },
      ],
    });

    if (!jobs) return res.status(404).end();
    res.json(jobs);
  },

  payJob: async (req, res) => {
    const { Job, Profile } = req.app.get('models');
    const { job_id } = req.params;
    const { id } = req.profile;
    const job = await Job.findOne({
      where: {
        id: job_id,
        paid: null,
      },
    });

    const profile = await Profile.findOne({
      where: {
        id,
      },
    });

    if (!job) {
      return res.status(400).json({
        status: 400,
        message: 'The job is paid or does not exist',
      });
    }

    if (job.price <= profile.balance) {
      try {
        await job.update({ paid: true });
        await profile.update({ balance: profile.balance - job.price });
        res.status(201).json({
          status: 201,
        });
      } catch (err) {
        res.status(500).end();
      }
    } else {
      res.status(500).json({
        status: 500,
        message: 'The profile balance is lower than the price of the job',
      });
    }
  },
};

module.exports = controllers;
