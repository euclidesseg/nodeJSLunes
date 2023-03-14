// function pagos(venta){
//    let salario = 3500000;
//    let comision = 1500000;
//    let deduciones = 0.05;
//    let resultadoSalario = parseInt(salario + comision);
//    let total = resultadoSalario * deduciones;
//    let resultadoFinal = resultadoSalario - total;

//    return resultadoFinal;
// }

// let totalPagos = pagos(2);

// console.log("El pago de un vendedor mensual es de: "+totalPagos+ " pesos");

let todoPagos =(venta) => (3500000+(1500000*venta))-((3500000 + (1500000*venta))*0.05);

let totalPagos = todoPagos(2);

console.log("El pago de un vendedor mensual es de: "+totalPagos+ " pesos");