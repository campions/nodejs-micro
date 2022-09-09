const getContract = {
  tags: ['Contracts'],
  description:
    'Returns contract by id by profile id which can be contractor or client.',
  parameters: [
    {
      in: 'path',
      name: 'id',
      required: true,
      description: 'The id of the contract',
      schema: {
        type: 'integer',
      },
    },
  ],
  operationId: 'getContract',
  responses: {
    200: {
      description: 'A contract.',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'Contract id',
              },
              terms: {
                type: 'string',
                description: 'Contract terms',
              },
              status: {
                type: 'string',
                description:
                  'Contract status which can be in progress, terminated or new',
              },
              createdAt: {
                type: 'string',
                description: 'Date of the contract when was created',
              },
              updatedAt: {
                type: 'string',
                description: 'Date of the contract when was updated',
              },
              ContractorId: {
                type: 'string',
                description: 'ID of the contractor',
              },
              ClientId: {
                type: 'string',
                description: 'ID of the client',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Contract not found',
    },
  },
};
const getAllContracts = {
  tags: ['Contracts'],
  description:
    'Returns all the contracts that are not terminated for the specific user',
  operationId: 'getContracts',
  responses: {
    200: {
      description: 'All contracts',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'Contract id',
                },
                terms: {
                  type: 'string',
                  description: 'Contract terms',
                },
                status: {
                  type: 'string',
                  description:
                    'Contract status can be in progress, terminated or new',
                },
                createdAt: {
                  type: 'string',
                  description: 'Date of the contract when was created',
                },
                updatedAt: {
                  type: 'string',
                  description: 'Date of the contract when was updated',
                },
                ContractorId: {
                  type: 'string',
                  description: 'ID of the contractor',
                },
                ClientId: {
                  type: 'string',
                  description: 'ID of the client',
                },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Contracts not found',
    },
  },
};

module.exports = {
  getContract,
  getAllContracts,
};
