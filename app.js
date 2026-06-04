const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    message: 'API DevSecOps - Node.js en Azure App Service',
    status: 'running',
    timestamp: new Date().toISOString(),
  });
});

// Ruta de salud (health check) — requerida por Azure App Service
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Ruta de ejemplo
app.get('/api/info', (req, res) => {
  res.json({
    app: 'devsecops-ci-demo',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo global de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Ruta insegura simulada para Evidencia 4
app.get('/peligro', (req, res) => {
  eval(req.query.code);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;
