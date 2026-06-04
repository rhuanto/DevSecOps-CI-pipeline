const request = require('supertest');
const app = require('../app');

describe('API DevSecOps - Pruebas de integración', () => {
  
  test('GET / → responde con mensaje de estado', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('status', 'running');
    expect(res.body).toHaveProperty('timestamp');
  });

  test('GET /health → health check devuelve 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'healthy');
  });

  test('GET /api/info → devuelve información de la app', async () => {
    const res = await request(app).get('/api/info');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('app', 'devsecops-ci-demo');
    expect(res.body).toHaveProperty('version', '1.0.0');
  });

  test('GET /ruta-inexistente → devuelve 404', async () => {
    const res = await request(app).get('/ruta-que-no-existe');
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error');
  });

});
