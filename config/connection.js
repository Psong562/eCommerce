require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = new Sequelize(`mysql:root:rootroot@localhost:3306/ecommerce_db`)


  // process.env.JAWSDB_URL ? process.env.JAWSDB_URL : process.env.LOCALDB_URL

module.exports = sequelize
