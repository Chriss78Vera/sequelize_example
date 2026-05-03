const { Router } = require('express');

function createMascotaRoutes(mascotaController) {
  const router = Router();

  router.get('/', mascotaController.getAll);
  router.get('/:id', mascotaController.getById);
  router.post('/', mascotaController.create);
  router.put('/:id', mascotaController.update);
  router.delete('/:id', mascotaController.delete);

  return router;
}

module.exports = createMascotaRoutes;
