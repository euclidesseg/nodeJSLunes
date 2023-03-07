
let alimentos = [
    "Brócoli",
    "Zanahoria",
    "Cebolla",
    "Espinaca",
    "Acelga",
    "Alcachofa",
    "Chayote",
    "Calabaza",
    "Calabacín",
    "Hormigas",
    "Grillos",
    "Chapulines",
    "Caracoles",
    "Cangrejo",
    "Pulpo",
    "Pato",
    "Cordero",
    "Conejo",
    "Ternera",
    "Tilapia"
];

tipos = ["vegetal", "Animal", "Insecto"]
let alimentosCompletos = []
function generarObgeto() {
    for (let i = 1; i <= 20; i++) {

        let nombre = alimentos[Math.floor(Math.random() * alimentos.length)]
        let tipo = tipos[Math.floor(Math.random() * tipos.length)]
        let nivelEnergia = Math.round(Math.random(1) * (100, 500))

        alimentosCompletos.push({
            nombre: nombre,
            tipo: tipo,
            nivelEnergia: nivelEnergia
        })

    }

    function obtenerVegetales(tipoAlimento, callBack) {
        setTimeout( () => {
            let alimentosVegetales = alimentosCompletos.filter( (alimento) => {
                if(alimento.tipo === "vegetal" ){
                    if(alimento.nivelEnergia > 200){
                        return alimento
                    }
                }

            })
            console.log(alimentosVegetales)
            callBack(alimentosVegetales)
        }, 5000)
        
    }
    obtenerVegetales(null, function(alimentos){
        let suma = 0
        alimentos.forEach((alimento) => {
            suma = suma + alimento.nivelEnergia
        })
        console.log(suma);
    })
}
generarObgeto()