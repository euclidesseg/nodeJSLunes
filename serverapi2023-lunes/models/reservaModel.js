import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Reserva = new Schema(
    {
        nombrecliente: {
            type: String,
            required: true,

        },
        apellidocliente: {
            type: String,
            required: true,
        },
        fechainicio: {
            type: Date,
            required: true
        },
        fechafinal:{
            type:Date,
            required:true
        },
        numeroadultos:{
            type:Number,
            required:true
        },
        numeroniños:{
            type:Number,
            required:true
        },
        total:{
            type:String,
            required:true,
        },
        idhabitacion:{
            type:String,
            required:true
        }
    }
)

export const modeloReserva = mongoose.model('Reservas',Reserva)