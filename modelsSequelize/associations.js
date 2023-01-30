const Authors = require('./authorsSequelizeSchema');
const Entry = require('./entrySequelizeSchema');


Authors.hasMany(Entry, { foreignKey: 'id_author' });