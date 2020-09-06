const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// Middleware
// app.use(bodyParser.json()) // or use app.use(express.json())
app.use(cors())

//Body parser
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

const posts = require('./routes/api/posts')
const test = require('./routes/api/test')
const checkConnection = require('./routes/api/checkConnection')
const loadAllTables = require('./routes/api/loadAllTables')
const runTest = require('./routes/api/loadtest')
const systemInfo = require('./routes/api/systemInformation')

app.use('/api/posts', posts)
app.use('/api/test', test)
app.use('/api/checkconnection', checkConnection)
app.use('/api/load', loadAllTables)
app.use('/api', runTest)
app.use('/api/sys', systemInfo)

// Handle production
if(process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'))

  // Hande SPA (single page application)
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))