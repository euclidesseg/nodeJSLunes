import express from 'express'
import { ControladorHabitaciones } from '../controllers/ControladorHabitaciones.js'
import { ControladorReservas } from '../controllers/ControladorReserva.js'

let controladorHabitaciones=new ControladorHabitaciones()

//VOY A SEPARAR Y PERSONALIZAR LAS RUTAS DE CADA SERVICIO
//DEL API REST
export let rutas=express.Router()

rutas.get('/buscarhabitaciones',controladorHabitaciones.buscandoHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitaciones.buscandoHabitacion)
rutas.post('/registrarhabitacion',controladorHabitaciones.registrandoHabitacion)
rutas.put('/editarhabitacion/:idhabitacion',controladorHabitaciones.editandoHabitacion)

//CREAMOS LA INSTANCIA PARA LAS RESERVAS....
let controladorReservas = new ControladorReservas()

rutas.get('/buscareserva/:idreserva', controladorReservas.buscandoReserva)
rutas.get('/buscareservas', controladorReservas.buscandoReservas)
rutas.post('/creareservas', controladorReservas.creandoReservas)
rutas.put('/editareserva/:idreserva',controladorReservas.editandoReserva)