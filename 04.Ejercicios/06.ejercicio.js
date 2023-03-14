// let inicio =1;
// let fin = 20;

// let enteroAleatorio = inicio + Math.floor(Math.random() * fin);

// console.log(enteroAleatorio);

//----------------------

// function seleccionDatos(datos){
//     return datos[Math.floor(Math.random() * datos.length)];
// }

// let clones = [
//     {
//         edad:25,
//         codigo:'AWR345'
//     },
//     {
//         edad:30,
//         codigo:'MHO385'
//     },
//     {
//         edad:21,
//         codigo:'SSS109'
//     },
//     {
//         edad:23,
//         codigo:'RRR645'
//     },
// ]

// console.log(seleccionDatos(clones));

//------------------------

let clones =[
    {
        edad:25,
        codigo:'AWR345'
    },
    {
        edad:30,
        codigo:'MHO385'
    },
    {
        edad:21,
        codigo:'SSS109'
    },
    {
        edad:23,
        codigo:'RRR645'
    },
    {
        edad:25,
        codigo:'AAA34'
    },
    {
        edad:32,
        codigo:'III385'
    },
    {
        edad:89,
        codigo:'OOO789'
    },
    {
        edad:25,
        codigo:'EEE645'
    },
    {
        edad:50,
        codigo:'YUO789'
    },
    {
        edad:25,
        codigo:'XXF645'
    },
]

function clonesSelecionados(clones){
    let edades = 0;
    clones.forEach((clon)=>{
        if(clon.edad==25){
            edades++;
        }
    })
    return edades;
}
console.log("Las edades que se repite son: ", clonesSelecionados(clones));


