const request = require('supertest');
const app = require('../../app');

describe('Contracts API', () => {
  it('should show contract', async () => {
    const res = await request(app).get('/contracts/1').set('profile_id', 1);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });

  it('should not show contract', async () => {
    const res = await request(app).get('/contracts/10').set('profile_id', 1);
    expect(res.statusCode).toEqual(404);
  });

  it('should show all contracts that are not terminated', async () => {
    const res = await request(app).get('/contracts').set('profile_id', 3);
    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toContain('terminated');
  });

  it('should not ne authorized', async () => {
    const res = await request(app).get('/contracts').set('profile_id', 200);
    expect(res.statusCode).toEqual(401);
  });
});
