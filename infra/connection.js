const {PATH_DB} = require("dotenv").config().parsed;
const {Database} = require("sqlite3");
module.exports = new Database(PATH_DB);