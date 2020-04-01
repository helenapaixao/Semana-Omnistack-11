const knex = require('knex');
const configuration = require('../../knexfile');

const connnection = knex(configuration.development);

module.exports = connnection;
