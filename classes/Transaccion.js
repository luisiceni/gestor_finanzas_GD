export default class Transaccion {
    //array estático para almacenar el historial de objetos creados
  static historial = [];

  constructor(id, tipo, descripcion, monto, categoria) {
    this.id = id;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.monto = monto;
    this.categoria = categoria;

    // Cada objeto creado se registra automáticamente en el historial
    Transaccion.historial.push(this);
  }
}