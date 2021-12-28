const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../models')

// The `/api/tags` endpoint

router.get('/tags', async function (req, res) {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll({ include: [Product] })
  res.json(tags)
})

router.get('/tags/:id', async function (req, res) {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tags = await Tag.findOne({ where: { id: req.params.id }, include: [Product] })
  res.json(tags)
})

router.post('/tags', async function (req, res) {
  // create a new tag
  const tags = await Tag.Create(req.body)
})

router.put('/tags/:id', async function(req, res) {
  // update a tag's name by its `id` value
  const tags = await Tag.Update(req.body, { where: { id } })
  res.sendStatus(200)
})

router.delete('/tags/:id', async function ({ params: { id } }, res) {
  // delete on tag by its `id` value
  await Tag.destroy({ where: id })
  res.sendStatus(200)
})

module.exports = router
