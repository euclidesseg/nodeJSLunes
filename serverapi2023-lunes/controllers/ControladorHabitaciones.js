import { ServicioHabitacion } from "../services/ServicioHabitacion.js"


export class ControladorHabitaciones{
    constructor(){}
    async registrandoHabitacion(peticion,respuesta){
        let habitacionService = new ServicioHabitacion()
        //los codigos de respuestas del protocolo http de vamos al inspeccionador y despues al network
        try{
            let datosHabitacion=peticion.body
            await habitacionService.registrar(datosHabitacion)
            respuesta.status(200).json({
                "mensaje":"Exito agreando datos..."
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operacion"+error
            })
        }
    }
    async buscandoHabitacion(peticion,respuesta){
       let habitacionService = new ServicioHabitacion()

        try{
            let idHabitacion=peticion.params.idhabitacion
            
            respuesta.status(200).json({
                "habitacion":await habitacionService.buscarPorId(idHabitacion)
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operacion"+error
            })
        }
    }
    async buscandoHabitaciones(peticion,respuesta){
        let habitacionService = new ServicioHabitacion()

        try{
            respuesta.status(200).json(
                await habitacionService.buscarTodas()
            )
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operacion"+error
            })
        }
    }
    async editandoHabitacion(peticion,respuesta){
        let habitacionService = new ServicioHabitacion()

        let idHabitacion=peticion.params.idhabitacion
        let datosHabitacion=peticion.body
        try{
            await habitacionService.editar(idHabitacion, datosHabitacion)
            respuesta.status(200).json({
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operacion"+error
            })
        }
    }
}