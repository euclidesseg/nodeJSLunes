function calcularDistancia(x1, x2, y1, y2){
    
    return Math.sqrt(Math.pow(x2 - x1 ,2) + Math.pow( y2 - y1 ,2));
}
 let distanciaCalculada = calcularDistancia(2,3,9,7)
console.log(distanciaCalculada);
