const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareasModel')

const getTareas = asyncHandler(async(req,res) => {
    const tareas = await Tarea.find({})
    res.status(200).json(tareas)
})

const createTareas = asyncHandler(async(req,res) => {
    
    if(!req.body.descripcion) {
        res.status(400)
        throw new Error("Debes teclear una descripción")
    }

    const tarea = await Tarea.create({
        descripcion: req.body.descripcion
    }) 

    res.status(201).json(tarea)
})

const updateTarea = asyncHandler(async(req,res) => {

    //primero verificamos que la tarea existe
    const tarea = await Tarea.findById(req.params.id)

    if(!tarea) {
        res.status(404)
        throw new Error("La tarea especificada no existe")
    }

    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(tareaUpdated)
})

const deleteTarea = asyncHandler(async(req,res) => {
    res.status(200).json({mesg: `deleteUsarios ${req.params.id}`})
})

module.exports = {getTareas, createTareas, updateTarea, deleteTarea}