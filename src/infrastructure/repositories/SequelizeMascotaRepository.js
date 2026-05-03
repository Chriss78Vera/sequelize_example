const MascotaRepository = require('../../domain/ports/MascotaRepository');
const Mascota = require('../../domain/entities/Mascota');
const MascotaModel = require('../database/models/MascotaModel');

class SequelizeMascotaRepository extends MascotaRepository {
  async findAll() {
    const mascotas = await MascotaModel.findAll({ order: [['id', 'ASC']] });
    return mascotas.map((mascota) => this.toDomain(mascota));
  }

  async findById(id) {
    const mascota = await MascotaModel.findByPk(id);
    return mascota ? this.toDomain(mascota) : null;
  }

  async create(data) {
    const mascota = await MascotaModel.create(data);
    return this.toDomain(mascota);
  }

  async update(id, data) {
    const mascota = await MascotaModel.findByPk(id);
    await mascota.update(data);
    return this.toDomain(mascota);
  }

  async delete(id) {
    const mascota = await MascotaModel.findByPk(id);
    await mascota.destroy();
  }

  toDomain(model) {
    return new Mascota(model.get({ plain: true }));
  }
}

module.exports = SequelizeMascotaRepository;
