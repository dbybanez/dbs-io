const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection()
  res.send(await posts.find({}).toArray())
})

// Add Post
router.post('/', async (req, res) => {
  const posts = await loadPostsCollection()
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  })
  res.status(201).send()
})

// Delete Post
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection()
  await posts.deleteOne({
    _id: new mongodb.ObjectID(req.params.id)
  })
  res.status(200).send()
})

// find document using ID (NOTE: finding a document requires you to input the exact same length of the ID which is 24 alphanumeric chars)
router.get('/find/:id', async (req, res) => {
  const posts = await loadPostsCollection()
  let result = await posts.find({_id: new mongodb.ObjectID(req.params.id)}).toArray()
  //console.log(result[0]._id)
  if(await posts.find({_id: new mongodb.ObjectID(req.params.id)}).count() > 0) {
    res.send({msg: `Found document with ID ${result[0]._id}`})
  } else {
    // add return?
    res.status(400).json({msg: "Document not found"})
  }
})

// Get Collections
router.get('/collections', async (req, res) => {
  const collections = await loadCollections()
  console.log(collections)
  res.send(await collections.listCollections().toArray())
})

// Load Posts Collections
async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect('mongodb://localhost:27017/vue_express', {
    useNewUrlParser: true
  })

  return client.db('vue_express').collection('posts')
}

// List all collections
async function loadCollections() {
  const client = await mongodb.MongoClient.connect('mongodb://localhost:27017/vue_express', {
    useNewUrlParser: true
  })

  return client.db('retaildb_mongodb')
}

module.exports = router