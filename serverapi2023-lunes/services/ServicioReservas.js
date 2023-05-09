import { modeloReserva } from '../models/reservaModel.js'

export class ServicioReserva{
    constructor(){}

    async reservar(datosReserva){
        let reservaNueva = new modeloReserva(datosReserva)
        return await reservaNueva.save(reservaNueva)
    }

    async getByid(idreserva){
        let reserva = await modeloReserva.findById(idreserva)
        return reserva
    }

    async getAll(){
        let reservas = await modeloReserva.find()
        return reservas
    }

    async update(idReserva, datosReserva){
        let reservaNueva = new modeloReserva(datosReserva)
        return await modeloReserva.findByIdAndUpdate(idReserva, datosReserva)
    }
}
