const { check } = require('express-validator');

const validacionCanciones = [
    check("id").notEmpty().withMessage("Debes completar un id").bail().isNumeric().withMessage("Debes completar el id de la canción"),
    check("titulo").notEmpty().withMessage("Debes completar el título").bail().isLength({min:3}).withMessage("Deben ser como mínimo tres caracteres"),
    check("duracion").notEmpty().withMessage("Debes completar la duración").bail().isNumeric().withMessage("Debes completar con un número"),
    check("genero_id").notEmpty().withMessage("Debes completar el id del genero").bail().isNumeric().withMessage("Debes completar con un número"),
    check("album_id").notEmpty().withMessage("Debes completar el id del album").bail().isNumeric().withMessage("Debes completar con un número"),
    check("artista_id").notEmpty().withMessage("Debes completar el id del artista").bail().isNumeric().withMessage("Debes completar con un número"),
];

module.exports = validacionCanciones