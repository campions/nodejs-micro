const getBestProfession = {
  tags: ['Admin'],
  description: 'Returns the best profession by a period time',
  parameters: [
    {
      in: 'query',
      name: 'start',
      required: true,
      description: 'The start date',
      schema: {
        type: 'string',
      },
    },
    {
      in: 'query',
      name: 'end',
      required: true,
      description: 'The end date',
      schema: {
        type: 'string',
      },
    },
  ],
  operationId: 'getBestProfession',
  responses: {
    200: {
      description: 'A profession.',
      content: {
        'application/json': {
          profession: {
            type: 'string',
            description: 'The profession',
          },
        },
      },
    },
    404: {
      description: 'Contract not found',
    },
  },
};
const getHighestPaidClients = {
  tags: ['Admin'],
  description: 'Returns a list of the highest paid clients.',
  operationId: 'getHighestPaidClients',
  parameters: [
    {
      in: 'query',
      name: 'start',
      required: true,
      description: 'The start date',
      schema: {
        type: 'string',
      },
    },
    {
      in: 'query',
      name: 'end',
      required: true,
      description: 'The end date',
      schema: {
        type: 'string',
      },
    },
    {
      in: 'query',
      name: 'limit',
      required: false,
      description: 'The number of jobs by default is 2',
      schema: {
        type: 'integer',
      },
    },
  ],
  responses: {
    200: {
      description: 'Clients list',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'Client id',
                },
                fullName: {
                  type: 'string',
                  description: 'The name of the client',
                },
                price: {
                  type: 'string',
                  description: 'The sum of the prices for the job',
                },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Clients not found',
    },
  },
};

module.exports = {
  getBestProfession,
  getHighestPaidClients,
};
