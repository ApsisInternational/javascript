const base = require('./base');

// clone this so we aren't mutating a module
const eslintrc = JSON.parse(JSON.stringify(base));

module.exports = eslintrc;
