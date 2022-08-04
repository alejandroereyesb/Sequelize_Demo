const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/sql_connection');

const Entry = db.define("entries", {
    id_entry:{
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    content:{
        type: DataTypes.STRING,
        allowNull: false
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    id_author:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        references: {
            model: "authors",
            key: "id_author"
        }
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})


const Authors = db.define("authors",{
    id_author:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    surname:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false 
    }
}, {
    timestamps: false
})


Authors.Entry = Authors.belongsTo(Entry);


module.exports = {
    Entry,
    Authors
};