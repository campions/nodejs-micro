const getUnpaidJobs = {
  tags: ['Jobs'],
  description: 'Returns all the unpaid jobs for the specific user.',
  operationId: 'getUnpaidJobs',
  responses: {
    200: {
      description: 'A list of jobs.',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'Job id',
                },
                description: {
                  type: 'string',
                  description: 'Job description',
                },
                paid: {
                  type: 'boolean',
                  description:
                    'The paid status which can be null(unapid) or true(paid)',
                },
                paymentDate: {
                  type: 'string',
                  description:
                    'Date of the Job when was payed, null if it\'s not payed',
                },
                price: {
                  type: 'number',
                  description: 'The price of the job',
                },
                updatedAt: {
                  type: 'string',
                  description: 'Date of the Job when was updated',
                },
                ContractId: {
                  type: 'string',
                  description: 'ID of the Contract',
                },
                ClientId: {
                  type: 'string',
                  description: 'ID of the client',
                },
                Contract: {
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
      },
    },
    404: {
      description: 'No jobs found',
    },
  },
};
const payJob = {
  tags: ['Jobs'],
  description:
    'Pay respective job, if the user has the balance amount to pay it.',
  operationId: 'payJob',
  parameters: [
    {
      in: 'path',
      name: 'job_id',
      required: true,
      description: 'The id of the job to pe payed',
      schema: {
        type: 'integer',
      },
    },
  ],
  responses: {
    200: {
      description: 'Pay job',
    },
    400: {
      description: 'The job is paid or does not exist',
    },
    500: {
      description: 'The profile balance is lower than the price of the job',
    },
  },
};

module.exports = {
  getUnpaidJobs,
  payJob,
};
