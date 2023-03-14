let distancia =  (x1,y1,x2,y2) => Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y1-y2,2));;

let bolsita = distancia(1,1,2,3);

console.log(bolsita + ' UA');