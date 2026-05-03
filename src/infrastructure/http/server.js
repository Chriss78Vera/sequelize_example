const express = require('express');
const cors = require('cors');

const MascotaUseCases = require('../../application/use-cases/MascotaUseCases');
const SequelizeMascotaRepository = require('../repositories/SequelizeMascotaRepository');
const createMascotaController = require('./controllers/mascotaController');
const createMascotaRoutes = require('./routes/mascotaRoutes');
const errorHandler = require('./middlewares/errorHandler');

function createServer() {
  const app = express();
  const apiPrefix = process.env.API_PREFIX || '/api';

  const mascotaRepository = new SequelizeMascotaRepository();
  const mascotaUseCases = new MascotaUseCases(mascotaRepository);
  const mascotaController = createMascotaController(mascotaUseCases);

  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({ message: 'API CRUD de mascotas funcionando' });
  });

  app.use(`${apiPrefix}/mascotas`, createMascotaRoutes(mascotaController));
  app.use(errorHandler);

  return app;
}

module.exports = { createServer };
