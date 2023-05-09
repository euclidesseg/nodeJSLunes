import {ServicioReserva} from '../services/ServicioReservas.js'

export class ControladorReservas{
    constructor(){}

    async creandoReservas(req,res){
        let reservaService = new ServicioReserva()
        try{
            let datosReserva=req.body
            await reservaService.reservar(datosReserva)
            res.status(200).json({
                "mensaje":"Exito agreando una reserva..."
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva"+error
            })
        }
    }
    async buscandoReserva(req,res){
        let reservaService = new ServicioReserva()

        try{
            let idreserva=req.params.idreserva
            
            res.status(200).json({
                "mensaje":"Exito buscando la habitacion...",
                "reserva":await reservaService.getByid(idreserva)
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion "+error
            })
        }
    }
    async buscandoReservas(req,res){
        let reservas = new ServicioReserva()
        try{
            res.status(200).json({
                "mensaje":"Exito buscando las reservas de los clientes....",
                "reservas": await reservas.getAll()
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva "+error
            })
        }
    }
    async editandoReserva(req,res){
        let reservaService = new ServicioReserva()

        let datosReserva=req.body;
        let idReserva=req.params.idreserva;
        try{
            await reservaService.update(idReserva, datosReserva)
            res.status(200).json({
                "mensaje":"Exito editando..."
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion"+error
            })
        }
    }

}