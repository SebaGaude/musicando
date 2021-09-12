module.exports = function (sequelize, dataTypes) {

    let alias = "Album";

    let cols = {
        id: {
            type : dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        
        nombre: {
            type: dataTypes.STRING(45),
        },

        duracion: {
            type: dataTypes.INTEGER,
        },
    };

    const config = {
        tableName: "albumes",
        timestamps: false,
    };

    const Album = sequelize.define (alias, cols, config);
    
    Album.associate = function(modelos) {
        Album.hasMany(modelos.Cancion, {
            as: "Canciones",
            foreignKey: "album_id"
        })
    }
    
    return Album; 
};