const request = require('supertest');
const app = require('../../app');

describe('Jobs API', () => {
  it('should unpaid jobs', async () => {
    const res = await request(app).get('/jobs/unpaid').set('profile_id', 1);
    expect(res.statusCode).toEqual(200);
    expect(JSON.stringify(res.body)).not.toContain('"paid": true');
  });

  it('should pay a job', async () => {
    const res = await request(app).post('/jobs/1/pay').set('profile_id', 3);
    expect(res.statusCode).toEqual(201);
  });

  it('should not found the job', async () => {
    const res = await request(app).post('/jobs/100/pay').set('profile_id', 3);
    expect(res.statusCode).toEqual(400);
  });
});
