
const mapas = [
    {
        nombrePlaneta:'Mercurio',
        latitud:65,
        longitud:180,
        oxigenoNivel:102,
        agua:13600
    },
    {
        nombrePlaneta:'Venus',
        latitud:77,
        longitud:250,
        oxigenoNivel:35,
        agua:0
    },
    {
        nombrePlaneta:'Tierra',
        latitud:48,
        longitud:360,
        oxigenoNivel:541,
        agua:15700
    },
    {
        nombrePlaneta:'Marte',
        latitud:89,
        longitud:177,
        oxigenoNivel:470,
        agua:12600
    },
    {
        nombrePlaneta:'Jupiter',
        latitud:32,
        longitud:344,
        oxigenoNivel:185,
        agua:8200
    },
    {
        nombrePlaneta:'Saturno',
        latitud:98,
        longitud:256,
        oxigenoNivel:150,
        agua:7800
    },
    {
        nombrePlaneta:'Urano',
        latitud:20,
        longitud:180,
        oxigenoNivel:-560,
        agua:4600
    },
    {
        nombrePlaneta:'Nepturno',
        latitud:53,
        longitud:350,
        oxigenoNivel:98,
        agua:1600
    },
    {
        nombrePlaneta:'Pluton',
        latitud:20,
        longitud:253,
        oxigenoNivel:34,
        agua:950
    },
]

let sumaAgua = 0;
let sumaOxigeno = 0;

let planetas = mapas.forEach(function(mapa){
    sumaAgua += mapa.agua;
    sumaOxigeno += mapa.oxigenoNivel * 100;
});

console.log('La cantidad total de AGUA es de: '+sumaAgua);
console.log('EL total de OXIGENO es de: '+sumaOxigeno);


let planetas2 = mapas.find(function(mapa){
    return (mapa.oxigenoNivel<0)
});

console.log(planetas2);


let planetas3 = mapas.find(function(mapa){
    return (mapa.agua===0)
})

console.log(planetas3);