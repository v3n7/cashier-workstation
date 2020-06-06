require('dotenv').config()

module.exports = {
    SECRET: process.env.SECRET,
    PORT: process.env.PORT,
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING
}
