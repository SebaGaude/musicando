const db = require("../database/models");
const { validationResult } = require("express-validator");

let cancionesController = {

    mostrarTodas: function (req, res) {
        db.Cancion
            .findAll()
            .then(canciones => {
                return res.status(200).json({
                    total: canciones.length,
                    data: canciones,
                    status: 200
                });
            })
            .catch(function (e) {
                return res.status(500).json({
                    error: e
                })
            })
    },
    crearRegistro: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Cancion
                .create(req.body)
                .then(cancion => {
                    return res.status(200).json({
                        data: cancion,
                        status: 200,
                        created: 'ok'
                    })
                })
                .catch(function (e) {
                    return res.status(500).json({
                        error: e
                    })
                })
        } else {
            return res.status(500).json({
                errores: errors.mapped()
            })
        }
    },
    mostrarCancion: function (req, res) {
        db.Cancion
            .findByPk(req.params.id)
            .then(cancion => {
                return res.status(200).json({
                    data: cancion,
                    status: 200
                });
            })
            .catch(function (e) {
                return res.status(500).json({
                    error: e
                })
            })
    },
    editarCancion: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Cancion
                .update({
                    id: req.params.id,
                    titulo: req.body.titulo,
                    duracion: req.body.duracion,
                    genero_id: req.body.genero_id,
                    album_id: req.body.album_id,
                    artista_id: req.body.artista_id
                },
                    {
                        where:
                        {
                            id: req.params.id
                        }
                    })
                .then(cancion => {
                    return res.status(200).json
                        ({
                            id: req.params.id,
                            titulo: req.body.titulo,
                            duracion: req.body.duracion,
                            genero_id: req.body.genero_id,
                            album_id: req.body.album_id,
                            artista_id: req.body.artista_id,
                            status: 200,
                            edited: "ok"
                        })
                })
                .catch(function (e) {
                    return res.status(500).json({
                        error: e
                    })
                })
        } else {
            return res.status(500).json({
                errores: errors.mapped()
            })
        }
    },
    eliminarCancion: function (req, res) {
        db.Cancion
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(response => {
                return res.json(response)
            })
            .catch(function (e) {
                return res.status(500).json({
                    error: e
                })
            })
    },
}

module.exports = cancionesController;