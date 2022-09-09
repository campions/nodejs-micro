const request = require('supertest');
const app = require('../../app');

describe('Admin API', () => {
  it('should show best profession', async () => {
    const res = await request(app)
      .get(
        '/admin/best-profession?start=2020-08-12T19:11:26.737Z&end=2020-08-19T19:11:26.737Z',
      )
      .set('profile_id', 3);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('profession');
  });

  it('should show the best paid jobs', async () => {
    const res = await request(app)
      .get(
        '/admin/best-clients?start=2020-08-12T19:11:26.737Z&end=2020-08-19T19:11:26.737Z&limit=1',
      )
      .set('profile_id', 3);
    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toContain('terminated');
  });
});
