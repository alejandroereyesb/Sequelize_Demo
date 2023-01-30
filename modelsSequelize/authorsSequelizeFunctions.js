const Authors = require('./authorsSequelizeSchema');
const Entries = require('./entrySequelizeSchema');


const createAuthor = async (author) => {
    const newAuthor = await Authors.create(author);
    return newAuthor;
};



const getAllAuthorsWithEntries = async () => {
    const authorsAndEntries = await Authors.findAll({
        where: {},
        include: {
            model: Entries
        }
    });
    return authorsAndEntries;
};


const authorsModels = {
    createAuthor,
    getAllAuthorsWithEntries
};

module.exports = authorsModels;