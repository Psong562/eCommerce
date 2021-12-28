require('dotenv').config()

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/ecommerce_db',{
  
  host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
})
  
  
//   process.env.JAWSDB_URL ? process.env.JAWSDB_URL : process.env.LOCALDB_URL, {
//   host: 'localhost',
//     dialect: 'mysql',
//     dialectOptions: {
//       decimalNumbers: true,
//     },


// });


// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: 'localhost',
//     dialect: 'mysql',
//     dialectOptions: {
//       decimalNumbers: true,
//     },
//   });



module.exports = sequelize
