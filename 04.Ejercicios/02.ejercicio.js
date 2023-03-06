let naves = [
    {
        codigo: "ARQ255",
        nombrePiloto: "Sara Bel-Sun"
    },
    {
        codigo: "ARQ256",
        nombrePiloto: "Nodin Chavdri"
    },
    {
        codigo: "ARQ57",
        nombrePiloto: "Finn"
    }
]

function obtenerPiloto(claveNave){
    let piloto = naves.find( (nave) => {
        if(nave.codigo === claveNave)
        return nave.nombrePiloto
    } )
  console.log(piloto.nombrePiloto)
}
   
obtenerPiloto("ARQ57")