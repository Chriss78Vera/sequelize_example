function createMascotaController(mascotaUseCases) {
  return {
    async getAll(req, res, next) {
      try {
        const mascotas = await mascotaUseCases.getMascotas();
        res.json(mascotas);
      } catch (error) {
        next(error);
      }
    },

    async getById(req, res, next) {
      try {
        const mascota = await mascotaUseCases.getMascotaById(req.params.id);
        res.json(mascota);
      } catch (error) {
        next(error);
      }
    },

    async create(req, res, next) {
      try {
        const mascota = await mascotaUseCases.createMascota(req.body);
        res.status(201).json(mascota);
      } catch (error) {
        next(error);
      }
    },

    async update(req, res, next) {
      try {
        const mascota = await mascotaUseCases.updateMascota(req.params.id, req.body);
        res.json(mascota);
      } catch (error) {
        next(error);
      }
    },

    async delete(req, res, next) {
      try {
        await mascotaUseCases.deleteMascota(req.params.id);
        res.status(204).send();
      } catch (error) {
        next(error);
      }
    }
  };
}

module.exports = createMascotaController;
