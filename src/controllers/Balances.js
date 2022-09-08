"use strict";

const controllers = {
  deposit: async (req, res) => {
    const { Profile } = req.app.get("models");
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
        message: "The user does not exist",
      });
    }

    if (profile.balance <= profile.balance) {
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
      res.status(400).json({
        status: 400,
        message: "The profile balance is lower than the price of the job",
      });
    }
  },
};

module.exports = controllers;
