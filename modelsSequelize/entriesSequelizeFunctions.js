const Entry = require('./entrySequelizeSchema');

const getEntriesByEmail = async (id) => {
    try {
        const response = await Entry.findAll({
            include: { model: Authors },
            where: { id_entry: id }
        });
        return response
    } catch (error) {
        console.log(error);
    }
}

const getAllEntries = async () => {
    try {
        const response = await Entry.findAll();
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const createEntry = async (entry) => {
    const { title, content, date, category } = entry;
    try {
        const response = await Entry.create({ title, content, category });
        return response
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getEntriesByEmail,
    getAllEntries,
    createEntry
}