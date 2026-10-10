const getTareas = (req,res) => {
    res.status(200).json({mesg: "getTarea"})
}

const createTareas = (req,res) => {
    res.status(201).json({mesg: "createTareas"})
}
const updateTarea = (req,res) => {
    res.status(200).json({mesg: `updateUsarios ${req.params.id}`})
}
const deleteTarea = (req,res) => {
    res.status(200).json({mesg: `deleteUsarios ${req.params.id}`})
}

module.exports = {getTareas, createTareas, updateTarea, deleteTarea}