
module.exports = function (sequelize, dataTypes) {
    let alias = 'Cancion';

    let cols = {
        id: {
            type : dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }, 

        titulo: {
            type: dataTypes.STRING(45)
        }, 
        duracion: {
            type : dataTypes.INTEGER,
        },
        genero_id: {
            type : dataTypes.INTEGER,
        },
        album_id: {
            type : dataTypes.INTEGER,
        },
        artista_id: {
            type : dataTypes.INTEGER,
        },

    };
    
    const config = {

        tableName:'canciones',
        timestamps: true,
        underscored: true,

    };

    const Cancion = sequelize.define(alias, cols, config);

    Cancion.associate = function(modelos) {
        
        Cancion.belongsTo(modelos.Album, {
            as: "album",
            foreignKey: "album_id"
        }),
        Cancion.belongsTo(modelos.Genero, {
            as: "genero",
            foreignKey: "genero_id"
        }),
        Cancion.belongsTo(modelos.Artista, {
            as: "artista",
            foreignKey: "artista_id"
        })
    }

    return Cancion;
}