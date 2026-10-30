export default class Transaccion {
    id;
    tipo;
    descripcion;
    monto;
    categoria;

    static historial = [];

    // Bloque estático: se ejecuta automáticamente al importar la clase
    static {
        this.#cargarDesdeLocalStorage();
    }

    constructor(id, tipo, descripcion, monto, categoria) {
        this.id = id;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.monto = monto;
        this.categoria = categoria;
    }

    static crear({ id, tipo, descripcion, monto, categoria }) {
        const transaccion = new this(id, tipo, descripcion, monto, categoria);
        Transaccion.agregar(transaccion);
        return transaccion;
    }

    static agregar(transaccion) {
        Transaccion.historial.push(transaccion);
        Transaccion.#guardarEnLocalStorage();
    }

    static eliminar(id) {
        Transaccion.historial = Transaccion.historial.filter(
            (t) => t.id !== id
        );
        Transaccion.#guardarEnLocalStorage();
    }

    // Métodos privados para el manejo del LocalStorage
    static #guardarEnLocalStorage() {
        localStorage.setItem("gestor_finanzas_historial", JSON.stringify(Transaccion.historial));
    }

    static #cargarDesdeLocalStorage() {
        const datosGuardados = localStorage.getItem("gestor_finanzas_historial");
        if (datosGuardados === null) {
            Transaccion.historial = [];
        } else {
            Transaccion.historial = JSON.parse(datosGuardados);
        }
    }
}