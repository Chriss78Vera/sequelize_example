class MascotaUseCases {
  constructor(mascotaRepository) {
    this.mascotaRepository = mascotaRepository;
  }

  getMascotas() {
    return this.mascotaRepository.findAll();
  }

  async getMascotaById(id) {
    const mascota = await this.mascotaRepository.findById(id);

    if (!mascota) {
      const error = new Error('Mascota no encontrada');
      error.statusCode = 404;
      throw error;
    }

    return mascota;
  }

  createMascota(data) {
    this.validateMascota(data);
    return this.mascotaRepository.create(data);
  }

  async updateMascota(id, data) {
    await this.getMascotaById(id);
    this.validateMascota(data, false);
    return this.mascotaRepository.update(id, data);
  }

  async deleteMascota(id) {
    await this.getMascotaById(id);
    await this.mascotaRepository.delete(id);
  }

  validateMascota(data, requireAllFields = true) {
    const requiredFields = ['nombre', 'raza', 'tipo', 'peso', 'edad', 'vacunado'];

    if (requireAllFields) {
      const missingFields = requiredFields.filter((field) => data[field] === undefined || data[field] === null);

      if (missingFields.length > 0) {
        const error = new Error(`Campos requeridos faltantes: ${missingFields.join(', ')}`);
        error.statusCode = 400;
        throw error;
      }
    }

    if (data.nombre !== undefined && String(data.nombre).trim() === '') {
      this.throwValidationError('El nombre no puede estar vacio');
    }

    if (data.peso !== undefined && Number(data.peso) < 0) {
      this.throwValidationError('El peso debe ser mayor o igual a 0');
    }

    if (data.edad !== undefined && Number(data.edad) < 0) {
      this.throwValidationError('La edad debe ser mayor o igual a 0');
    }

    if (data.vacunado !== undefined && typeof data.vacunado !== 'boolean') {
      this.throwValidationError('Vacunado debe ser boolean');
    }
  }

  throwValidationError(message) {
    const error = new Error(message);
    error.statusCode = 400;
    throw error;
  }
}

module.exports = MascotaUseCases;
