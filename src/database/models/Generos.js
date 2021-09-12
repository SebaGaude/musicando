module.exports = function (sequelize, dataTypes) {
    let alias = 'Genero';

    let cols = {
        id: {
            type : dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }, 
        name: {
            type: dataTypes.STRING(45)
        }
    };
    
    const config = {

        tableName:'genero',
        timestamps: false

    };

    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(modelos) {
        
        Genero.hasMany(modelos.Cancion, {
            as: "canciones",
            foreignKey: "genero_id"
        })
    }

    return Genero;
}