function mainPrincipal() {
    let total = 0
    let main
    do {
        main = prompt("1-Compre un plan \n 2-Carrito total \n 3-Salir")
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