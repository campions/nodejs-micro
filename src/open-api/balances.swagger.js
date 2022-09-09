const deposit = {
  tags: ['Balances'],
  description: 'Deposit an amount of money.',
  operationId: 'deposit',
  parameters: [
    {
      in: 'path',
      name: 'userId',
      required: true,
      description: 'The id of the user',
      schema: {
        type: 'integer',
      },
    },
  ],
  responses: {
    201: {
      description: 'Deposit successfully',
    },
    400: {
      description: 'The user does not exist',
    },
    500: {
      description: 'The amount to deposit is too big!',
    },
  },
};

module.exports = {
  deposit,
};
