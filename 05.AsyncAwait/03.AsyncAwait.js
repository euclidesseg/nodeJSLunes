
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

async function llamandoAlaPromesa(){
    console.log("Estamos marcando....")
    try{
        let respuesta = await procesoUno("ADMIN")
        console.log(respuesta)
    }catch(error){
        console.log(respuesta);
    }
}
llamandoAlaPromesa()