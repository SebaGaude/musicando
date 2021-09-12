const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get('/canciones', mainController.mostrarTodas) //(GET) que muestre un listado de las canciones con sus propiedades
router.post('/canciones', mainController.crearRegistro) //(POST) para crear un nuevo registro de una canción
router.get('/canciones/:id', mainController.mostrarCancion) //(GET) que muestre una canción 
router.put('/canciones/:id', mainController.editarCancion) //(PUT) para editar una canción
router.delete('/canciones/:id', mainController.eliminarCancion) //(DELETE) para eliminar una canción 
router.get('/albumes/canciones', mainController.mostrarAlbumes) //(GET) listado de álbumes en donde cada álbum tenga a su vez un listado de las canciones


module.exports = router;