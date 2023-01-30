const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/sql_connection');

const Authors = db.define("authors", {
    id_author: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        //allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})




Authors.sync();

module.exports = Authors;