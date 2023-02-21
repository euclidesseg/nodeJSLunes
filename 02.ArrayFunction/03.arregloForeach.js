
let equipos = [
    {nombre:"Atletico Nacional", titulos: 32},
    {nombre:"Medellin", titulos: 15},
    {nombre:"Junior", titulos: 7}
]
 let sumaTitulos = 0;
let resultado = equipos.forEach(function(equipo){
    sumaTitulos = sumaTitulos + equipo.titulos;
    console.log(`equipo: ${equipo.nombre} titulos: ${equipo.titulos}`);
})
console.log(`TITULOS: ${sumaTitulos}`);