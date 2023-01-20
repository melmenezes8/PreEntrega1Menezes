function mainPrincipal() {
    let total = 0
    let main
    do {
        main = prompt("1-Compre un plan segun su tipo de piel \n 2-Carrito total \n 3-Salir")
        main = parseInt(main)
        switch (main) {
            case 1: total = total + comprarPlan()
                break
            case 2: alert("el total acumulado: " + total)
                total = 0
                break
            case 3: alert("salir")
                break
            default: alert("opccion invalida")
        }
    } while (main != 3)
}

function comprarPlan() {
    let accumulate = 0
    alert("SELECCIONAR SEGUN TU TIPO DE PIEL")
    alert("1-Grasas \n 2-Mixtas \n 3-Secas")
    let type = prompt("selecione el tipo de plan que va a realizar")
    type = parseInt(type)

    switch (type) {
        case 1: accumulate = 3000
            break
        case 2: accumulate = 2000
            break
        case 3: accumulate = 4000
            break
        default: alert("opcion invalida")
    }
    return accumulate
}

mainPrincipal();

// if (type==1) {acumulador + 3000}
// else (tipo==2) {acumulador + 2000}

const DermoCosmetica = [
{ producto: "Espuma facial de limpieza", tamaño: "160ml", precio: 2700 },
{ producto: "Agua micelar", tamaño: "400ml", precio: 1800 },
{ producto: "Crema hidratante de dia", tamaño: "70g", precio: 2300 },
{ producto: "Contorno de ojos", tamaño: "15g", precio: 1300 },
{ producto: "Serum hidratante", tamaño: "100ml", precio: 2000 },
{ producto: "protector solar", tamaño: "70ml", precio: 2900 },
{ producto: "tonico refrescante", tamaño: "200ml", precio: 2800 },

]

const carrito = []

let propuesta = prompt("¿Desea agregar un producto a su carrito? (si) o (no)")

while (propuesta != "si" && propuesta != "no") {
    alert("Selecione si o no")
    propuesta = prompt("¿Desea agregar un producto a su carrito? (si) o (no)")
}

if (propuesta == "si") {
    alert("Productos que te podrian interesar")
    let TodosLosProductos = DermoCosmetica.map(
        (Dermo) => Dermo.producto + " " + "$" + Dermo.precio
    );
    alert(TodosLosProductos.join(" - "))
} else if (propuesta == "no") {
    alert("Gracias por su compra")
} 

while (propuesta != "no") {
    let dermo = prompt("Iniciar compra")
    let productoAgregado = DermoCosmetica.find((item) => item.producto == DermoCosmetica)
    if (productoAgregado != undefined) {
        let unidades = parseInt(prompt("¿Cuantas unidades desea agregar?"))

        carrito.push({ nombre: DermoCosmetica, cantidad: unidades, precio: productoAgregado.precio})
        console.log(carrito)
    } else {
        alert("Sin stock")
    } 
}

propuesta = prompt("seguir agregando productos al carrito agregar / continuar")


if (propuesta === "no") {
    alert("Muchas gracias por su compra!")
    carrito.forEach((carritoTotal) => { 
        console.log("Dermo: ${carritoTotal.nombre}, unidades ${carritoTotal.cantidad}, compra finalizada ${carritoTotal.canatidad * carritoTotal.precio}")
    })
}

const total = carrito.reduce((acc, el)=> acc + el.precio * el.cantidad,0)
console.log("El total de su compra es: ${total}")

















