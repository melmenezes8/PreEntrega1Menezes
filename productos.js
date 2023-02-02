class Producto {
    constructor(entrada) {
        this.Nombre = entrada.Nombre;
        this.Precio = parseInt(entrada.Precio);
    }

    saleMasDe1000 () {
        return this.precio <= 1000;
    }
}