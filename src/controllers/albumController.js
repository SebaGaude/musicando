const db = require("../database/models");

let albumController = {
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
            .catch(function(e){
                return res.status(500).json({
                    error: e
                })
            })   
    },
}

module.exports = albumController;