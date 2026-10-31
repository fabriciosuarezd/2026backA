const express = require('express')
const router = express.Router()
const {getTareas, createTareas, updateTarea, deleteTarea} = require('../controllers/tareasController')

const protect = require('../middleware/authMiddleware')

router.get('/', protect, getTareas)
router.post('/', protect, createTareas)

router.put('/:id', protect, updateTarea)
router.delete('/:id', protect, deleteTarea)

module.exports = router




