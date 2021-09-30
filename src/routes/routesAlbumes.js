const express = require("express");
const router = express.Router();

const albumController = require("../controllers/albumController");

router.get('/canciones', albumController.mostrarAlbumes) //(GET) listado de álbumes en donde cada álbum tenga a su vez un listado de las canciones


module.exports = router;