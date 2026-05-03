require('dotenv').config();

const { createServer } = require('./infrastructure/http/server');
const { sequelize } = require('./infrastructure/database/sequelize');

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const app = createServer();

    app.listen(PORT, () => {
      console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo iniciar el servidor:', error);
    process.exit(1);
  }
}

bootstrap();
