const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,

    },
    description_raw:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    released:{
      type:DataTypes.STRING ,
      allowNull: true,

    },
    rating:{
      type: DataTypes.DECIMAL, 
      allowNull: true,

    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,

    },
    genres:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,

    },
    background_image:{
      type: DataTypes.STRING,
      allowNull: true,

    },
    
    createdInDb:{
      type:DataTypes.BOOLEAN,
      defaultValue: true,
    }
  });
};
