class Mascota {
  constructor({ id, nombre, raza, tipo, peso, edad, vacunado }) {
    this.id = id;
    this.nombre = nombre;
    this.raza = raza;
    this.tipo = tipo;
    this.peso = peso;
    this.edad = edad;
    this.vacunado = vacunado;
  }
}

module.exports = Mascota;
