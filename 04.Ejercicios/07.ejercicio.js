let numeros = [2,0,6,7,9,40,50,]

function obtenerNumero (numeros){
    let numeroAcumulador = 0;

    for (let i=0; i<numeros.length; i++){

        if(numeroAcumulador === 0){
            numeroAcumulador = numeroAcumulador + numeros[i];

        }else if(numeros[i]>0 && numeros[i] <= Math.abs(numeroAcumulador)){
            numeroAcumulador = numeroAcumulador + numeros[i];

        }else if(numeros[i]<0 && - numeros[i] < Math.abs(numeroAcumulador)){
            numeroAcumulador = numeroAcumulador + numeros[i];
        }
    }
    numeroAcumulador = Math.abs(numeroAcumulador)
    console.log(numeroAcumulador)
}

obtenerNumero(numeros);
