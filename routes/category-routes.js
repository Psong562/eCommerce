const router = require('express').Router()
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

router.get('/categories', async function (req, res) {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({ include: [Product] })
  res.json(categories)
})

router.get('/categories/:id', async function ({ params: { id } }, res) {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categories = await Category.findOne({where: { id }, include : [Product]})
  res.json(categories)
})

router.post('/categories', async function (req, res) {
  // create a new category
  const categories = await Category.Create(req.body)
})

router.put('/categories/:id', async function ({ params: { id } }, res) {
  // update a category by its `id` value
  const categories = await Category.Update(req.body, {where: { id }})
  res.sendStatus(200)
})

router.delete('/categories/:id', async function ({ params: { id } }, res) {
  // delete a category by its `id` value
  await Category.destroy( { where: { id } } )
  res.sendStatus(200)
})

module.exports = router
