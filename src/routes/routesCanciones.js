const express = require("express");
const router = express.Router();

const validacionCanciones = require('../middlewares/validacionCanciones');
const cancionesController = require("../controllers/cancionesController");

router.get('/', cancionesController.mostrarTodas) //(GET) que muestre un listado de las canciones con sus propiedades
router.post('/', validacionCanciones, cancionesController.crearRegistro) //(POST) para crear un nuevo registro de una canción
router.get('/:id', cancionesController.mostrarCancion) //(GET) que muestre una canción 
router.put('/:id', validacionCanciones, cancionesController.editarCancion) //(PUT) para editar una canción
router.delete('/:id', cancionesController.eliminarCancion) //(DELETE) para eliminar una canción 

module.exports = router;