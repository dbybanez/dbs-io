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
  res.send(result)
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
  return new Promise (async (resolve, reject) => {
    let connection = mysql.createConnection(mysqlConfig)
    let status = false
    try {
      connection.connect((err) => {
        if(err) {
          status = false
          resolve({msg: err.code, active: status})
        }

        status = true
        resolve({msg: [{"connection_id": connection.threadId}], active: status})
      })
    } catch (err) {
      status = false
      reject(status)
    } finally {
      if( connection && connection.end ) connection.end()
      return status;
    }
  })
}

module.exports = router