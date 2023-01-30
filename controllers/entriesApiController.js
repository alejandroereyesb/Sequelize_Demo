// const entry = require('../models/entry');
const Entry = require("../modelsSequelize/entrySequelizeSchema");

//getEntries
// if(hay email)
//     busca por mail
// else
//     busca todo


// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
    let entries;
    if (req.query.id) {
        entries = await entry.getEntriesByEmail(req.query.id);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

const getEntriesByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const entries = await entry.getEntriesByEmail(email);
        res.status(200).json(entries);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);

    }
}

const getAllEntries = async (req, res) => {
    try {
        const entries = await entry.getAllEntries();
        res.status(200).json(entries);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await Entry.create(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}


module.exports = {
    getEntries,
    getAllEntries,
    getEntriesByEmail,
    createEntry,
    //deleteEntry, --> DELETE
    //updateEntry --> PUT
}