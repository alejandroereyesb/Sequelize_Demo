const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/sql_connection');
const Authors = require('./authorsSequelizeSchema');

const Entry = db.define("entries", {
    id_entry: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Date.now()
    },
    id_author: {
        type: Sequelize.UUID,
       // defaultValue: Sequelize.UUIDV1,
    
    
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

//Entry.belongsTo(Authors, { foreignKey: 'id_client' });
Entry.sync();

module.exports = Entry;