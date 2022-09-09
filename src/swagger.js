const contractsSwagger = require('./open-api/contracts.swagger');
const jobsSwagger = require('./open-api/jobs.swagger');
const adminSwagger = require('./open-api/admin.swagger');
const balancesSwagger = require('./open-api/balances.swagger');

const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'API documentation',
    description: 'All API\'s documentation',
    termsOfService: '',
    contact: {
      name: 'Marius Capatina',
      email: 'capmarius@gmail.com',
      url: 'https://www.linkedin.com/in/mariuscapatina/',
    },
    license: {
      name: 'MIT',
    },
  },
  paths: {
    '/contracts': {
      get: contractsSwagger.getAllContracts,
    },
    '/contracts/{id}': {
      get: contractsSwagger.getContract,
    },
    '/jobs/unpaid': {
      get: jobsSwagger.getUnpaidJobs,
    },
    '/job/{job_id}/pay': {
      post: jobsSwagger.payJob,
    },
    '/balances/deposit/{id}': {
      post: balancesSwagger.deposit,
    },
    '/admin/best-profession': {
      post: adminSwagger.getBestProfession,
    },
    '/admin/best-clients': {
      post: adminSwagger.getHighestPaidClients,
    },
  },
};

module.exports = swaggerDocument;
