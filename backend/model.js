// imports 
const { DataTypes } = require('sequelize');
const { sequelize } = require('./conn');

// data parameters
const stateModel = sequelize.define('state', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bird: {
        type: DataTypes.STRING,
        allowNull: false
    },
    flower: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tree: {
        type: DataTypes.STRING,
        allowNull: false
    },
    signicant_event: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// exports
module.exports = stateModel;