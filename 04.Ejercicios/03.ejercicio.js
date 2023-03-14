// function temperatura(max,mini){

//     let dias = 5;
//     let resultadoTemperatura = max + mini;
//     let resultadoDias = dias*2;
//     let total = resultadoTemperatura/resultadoDias;
//     let temperaturaMedia = total / 24;

//     return temperaturaMedia;
// }

// let resultado = temperatura(396.5,199.8);

// console.log('El temperatura media es de: '+resultado+ ' grados Celcius');

//FUNCION DE FLECHA....

let temperatura = (max,mini) => ((max+mini)/(5*2) / 24);

let resultado = temperatura(396.5,199.8);

console.log('El temperatura media es de: '+resultado+ ' grados Celcius');





