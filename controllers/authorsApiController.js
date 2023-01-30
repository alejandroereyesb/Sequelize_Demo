const authorsModels = require('../modelsSequelize/authorsSequelizeFunctions');


const createAuthor = async (req, res) => {
    const authorData = req.body;
    const newAuthor = await authorsModels.createAuthor(authorData);
    res.status(201).json(newAuthor);
};


const getAuthorsAndEntries = async (req, res) => {
    const data = await authorsModels.getAllAuthorsWithEntries();
    res.status(200).json(data);
};



const authorsControllers = {
    createAuthor,
    getAuthorsAndEntries
};

module.exports = authorsControllers;