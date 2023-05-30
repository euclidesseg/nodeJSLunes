import {ServicioReserva} from '../services/ServicioReservas.js'
import { ServicioHabitacion } from '../services/ServicioHabitacion.js';
import { modeloReserva } from '../models/reservaModel.js';
import { modeloHabitacion } from '../models/habitacionModel.js';

export class ControladorReservas{
    constructor(){}

    async creandoReservas(req,res){
        let reservaService = new ServicioReserva()
        let objetoHabitacion = new ServicioHabitacion();
        let datosReserva = new modeloReserva();
        datosReserva=req.body
        let habitacion = await objetoHabitacion.buscarPorId(datosReserva.idhabitacion);

        let fechainicioreserva = new Date(datosReserva.fechainicio).getTime()
        let fechafinalreserva = new Date(datosReserva.fechafinal).getTime()
        let dias = fechafinalreserva-fechainicioreserva
        // dias = dias/(1000*60*60*24)
        // Math.round(dias)
        // let costo= dias*parseInt(habitacion.precio)
        try{

            if (fechainicioreserva > fechafinalreserva){
                return res.status(400).json({
                    "mensaje":"la fecha de inicio no puede ser mayor de la fecha final"
                })
            }else if(datosReserva.numeroadultos + datosReserva.numeroniños > habitacion.numeropersonas){
                return res.status(400).json({
                    "mensaje":"El número de personas excede la capacidad de la habitación"
                })
            }

            if ( habitacion === null ) {
                return res.status(400).json({
                    "mensaje":"No se puedo encontrar la habitacion a reservar"
                })
            }else{
               if(habitacion.estado != true){
                return res.status(400).json({
                    "mensaje":"No se puedo reservar, no esta disponible"
                })
               }else{

                await reservaService.reservar(datosReserva)
                await modeloHabitacion.findByIdAndUpdate(datosReserva.idhabitacion, { estado: false,})


                console.log(datosReserva)
                res.status(200).json({
                    "mensaje":"La habitacion se encuntra disponible. Exito agreando una reserva..."
                })
               }
            }
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