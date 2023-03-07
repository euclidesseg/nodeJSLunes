// necesito ir a netflix y autenticarme

function procesoUno(nombreUsuario, procesoDos){
    setTimeout( () => {
        if(nombreUsuario === "ADMIN"){
            procesoDos("Exito", null)//llamando a la funcion callback
        }else{
            procesoDos(null, "Falla")
        }
    }, 2000);
}

procesoUno("ADMIN", function(resuelvo, rechazo){ // declartando la funcion callback
    if(resuelvo){
        console.log("Bienvenido a netflix");
    }else{
        console.log("Revisa tus datos");
    }
})