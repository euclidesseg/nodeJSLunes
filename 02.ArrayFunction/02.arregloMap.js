
let carrito = [
    { nombre: `Monitor de 20 pulgadas`, precio: 500 },
    { nombre: `televisor de 45 pulgadas`, precio: 700 },
    { nombre: `tablet samsung`, precio: 400 },
    { nombre: `celular iphon`, precio: 700 },
    { nombre: `computador portati`, precio: 1000 },
    { nombre: `consola de videojuegos`, precio: 900 }
];

carrito.forEach(function (producto) {
    // Debido a que estamos trallendo al tiempo cada objeto no es necesarioo tener la misma sintaxis que forlup
    // console.table(`${producto.nombre} - precio: ${producto.precio}`);

})
let nuevoArreglo = carrito.map(function (producto) {
    producto.precio = 150000;
    return `precio:${producto.nombre} - precio: ${producto.precio}`;

})
console.log(nuevoArreglo);
