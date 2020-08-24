const express = require('express')
const mongodb = require('mongodb')
const mysql = require('mysql')
const mssql = require('mssql')

const router = express.Router()

const mongo_database = 'retaildb_mongodb'
const host = 'localhost'

let mongoConfig = `mongodb://${host}:27017/${mongo_database}`

let mysqlConfig = {
  host: host,
  user: 'root',
  password: '',
  database: 'retaildb_mysql'
}

let mssqlConfig = {
  user: '',
  password: '',
  server: '',
  database: 'retaildb_mssql',
  port: 1433,
  options: {
    enableArithAbort: false
  }
}

router.get('/mongo', async (req, res) => {
  let result = await checkMongoDBConnection()
  res.send(await result)
})

router.get('/mysql', async (req, res) => {
  let result = await checkMySQLConnection()
  res.send(await result)
})

// MongoDB Connect
async function checkMongoDBConnection() {
  let client = null

  try {
    client = await mongodb.MongoClient.connect('mongodb://localhost:27017/retaildb_mongodb', {
      useNewUrlParser: true
    })
  } catch (err) {
    console.log(err)
  } finally {
    return !!client && !!client.topology && client.topology.isConnected()
  }
}

// MySQL Connect
async function checkMySQLConnection() {
  let connection = mysql.createConnection(mysqlConfig)
  
  try {
    connection.connect()
  } catch (err) {
    console.log(err)
  } finally {
    return true
  }
}

// async function checkMySQLConnection() {
//   return new Promise ((resolve, reject) => {
//     let connection = mysql.createConnection(mysqlConfig)
//     connection.connect( (err) => {
//       if (err) {
//         reject(1)
//       }
//       resolve(true)
//     })
//   })
// }

module.exports = router