const db = require("../database/models");

let mainController = {

    mostrarTodas: function(req, res){
        db.Cancion
            .findAll()
            .then(canciones => {
                return res.status(200).json({
                    total: canciones.length,
                    data: canciones,
                    status: 200
                }); 
            })
        }, 
    crearRegistro: function(req, res){
        db.Cancion 
            .create(req.body)
            .then(cancion => {
                return res.status(200).json({
                    data:cancion, 
                    status:200,
                    created: 'ok'
                })
            })
        
    },
    mostrarCancion: function(req, res){
        db.Cancion
            .findByPk(req.params.id)
            .then(cancion => {
                return res.status(200).json({
                data: cancion,
                status: 200
            });
        })
    },
    editarCancion: function(req, res){
        db.Cancion
            .findByPk(req.params.id)
            .then(cancion => {               
            db.Cancion  
                .update ({
                    id: req.body.id, 
                    titulo: req.body.titulo, 
                    duracion: req.body.duracion,
                    created_at: req.body.created_at,
                    updated_at: req.body.updated_at,
                    genero_id: req.body.genero_id,
                    album_id: req.body.album_id,
                    artista_id: req.body.artista_id
                }, 
                {
                    where:
                    {
                        id:req.params.id
                    }
                })
                return res.status(200).json({
                    data: cancion,
                    status: 200
                })
            })
    },
    eliminarCancion: function(req, res){
        db.Cancion
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(response=>{
                return res.json(response)
            })   
    },
    mostrarAlbumes: function(req, res){
        db.Album
            .findAll({
                include: [{association: "Canciones"}]
            })        
            .then(resultado => {
                return res.status(200).json({
                    total: resultado.length,
                    data: resultado,
                    status: 200
                }); 
            }) 
    },

}

module.exports = mainController;