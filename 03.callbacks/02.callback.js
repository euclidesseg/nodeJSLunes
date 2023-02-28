// un callback es una funcio que se manda como parametro de otra o de la funcio principal
// declarando la funcion principal
function principal(numeros, callBack){
    setTimeout(() => {
        let suma = 0;
        numeros.forEach((numero) => {
            suma = suma + numero
        });
        callBack(suma)// llmando la funcion callback ingresado por la funcion principal
    }, 500);
}

let arreglo = [1,2,3,4,5]
principal(arreglo, function(suma){ // declarando el callback
    console.log(`la sumatoria final es ${suma}`)
})