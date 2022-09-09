const request = require('supertest');
const app = require('../../app');

describe('Balances API', () => {
  it('should deposit an amount', async () => {
    const res = await request(app)
      .post('/balances/deposit/1')
      .set('profile_id', 1)
      .send({ amount: 10 });
    expect(res.statusCode).toEqual(201);
    expect(JSON.stringify(res.body)).not.toContain('"paid": true');
  });

  it('should not found user', async () => {
    const res = await request(app)
      .post('/balances/deposit/200')
      .set('profile_id', 1)
      .send({ amount: 10 });
    expect(res.statusCode).toEqual(400);
    expect(JSON.stringify(res.body)).not.toContain('"paid": true');
  });

  it('should not found user', async () => {
    const res = await request(app)
      .post('/balances/deposit/200')
      .set('profile_id', 1)
      .send({ amount: 10 });
    expect(res.statusCode).toEqual(400);
    expect(JSON.stringify(res.body)).not.toContain('"paid": true');
  });

  it('should amount is bigger that the balance', async () => {
    const res = await request(app)
      .post('/balances/deposit/1')
      .set('profile_id', 1)
      .send({ amount: 1000 });
    expect(res.statusCode).toEqual(500);
    expect(JSON.stringify(res.body)).not.toContain('"paid": true');
  });
});
