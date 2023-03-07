// Una promesa es una funcion asyncrona que facilita su escritura 
// 

function procesoUno(nombreUsuario) {

    let promesa = new Promise((resuelve, rechaza) => {
        setTimeout(() => {
            //lo que hace la funcion 1
            if (nombreUsuario === "ADMIN") {
                resuelve("exito")
            } else {
                rechaza("falla")
            }
        }, 2000);
    })
    return promesa
}

procesoUno("ADMIN")
.then((respuesta) => console.log(respuesta)) // camino de exito 
.catch((respuesta) => console.log(respuesta))// camino de rechazo

