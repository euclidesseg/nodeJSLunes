function crearEstudiante(nombre, planeta, edad, estatura,clasificarEstudiante){
    setTimeout( function() {
        let estudiante = {
            nombre: nombre,
            edad: edad,
            planeta: planeta,
            estatura: estatura
        }
        clasificarEstudiante(estudiante.edad)
     }, 2000);
}

crearEstudiante("pedro", "marte", 18, 185, function(edad){
    if(edad < 15 ){
        console.log(`su edad es menor a 15`)
    }else console.log(`su edad es igual o mayor a 15`)
})

