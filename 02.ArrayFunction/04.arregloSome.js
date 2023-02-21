let inmuebles = [
    {id:1, nombre: 'EL VIP', direccion:'cll 100'},
    {id:2, nombre: 'PROVENZA', direccion:'cll 10'},
    {id:3, nombre: 'EL RAUDAL', direccion:'cll 105'}
]

// me devuelve todos los que tengan el nombre
let resultado1 = inmuebles.filter((inmueble) =>{
    return inmueble.nombre === `EL VIP`
})
// me devuelve el primero que encuentre
let resultado2 = inmuebles.find((inmueble) =>{
    return inmueble.nombre = `EL VIP`
})
// me devuelve un boleaano
let resultado3 = inmuebles.some((inmueble) =>{
    return inmueble.nombre === `EL VIP`
})