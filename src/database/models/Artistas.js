module.exports = function (sequelize, dataTypes) {
    let alias = 'Artista';

    let cols = {
        id: {
            type : dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }, 

        nombre: {
            type: dataTypes.STRING(45)
        }, 
        apellido: {
            type: dataTypes.STRING(45)
        },

    };
    
    const config = {

        tableName:'artistas',
        timestamps: false

    };

    const Artista = sequelize.define(alias, cols, config);

    Artista.associate = function(modelos) {
        
        Artista.hasMany(modelos.Cancion, {
            as: "canciones",
            foreignKey: "artista_id"
        })
    }

    return Artista;
}