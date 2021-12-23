const express = require('express')
// import sequelize connection
const { join } = require ('path')
const {Category, Product, ProductTag, Tag} = require('./models')


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

// sync sequelize models to the database, then turn on the server
async function init() {
  await require('./db').sync()
  app.listen(process.env.PORT || 3000)
}

init()
