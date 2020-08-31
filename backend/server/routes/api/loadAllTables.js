const express = require('express')
const { MongoClient } = require('mongodb')
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
  user: 'admin',
  password: 'admin',
  server: 'DAVID-LAPTOP\\SQLEXPRESS01',
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

router.get('/mssql', async (req, res) => {
  let result = await checkMSSQLConnection()
  res.send(result)
})

async function checkMongoDBConnection() {
  return new Promise ((resolve, reject) => {
    let client = MongoClient(mongoConfig, { useNewUrlParser: true })
    let result = {
      status: false
    }

    let collections = []
    let collectionData = []
    try {
      client.connect( async (err) => {
        if(err) {
          result.error = {
            message: err.message
          }
          result.status = false
          resolve(result)
        } else {
          // Get all collections
          let queryResult = await client.db(mongo_database).listCollections().toArray()
          
          // Loop all results and add it to collections
          queryResult.forEach(child => {
            collections.push(child.name)
          })

          // Loop all collections and load every data 
          // collections.forEach(collection => {
          //   console.log(collection)
          // })
          let data = await client.db(mongo_database).collection('EmployeeList')
          console.log(await data.find({}).toArray())
          resolve(data.find({}).toArray())
        }
      })
    } catch (err) {
      result.error = {
        message: err.message
      }
      result.status = false
      reject(result)
    } finally {
      client.close()
    }
  })
}

// MySQL Connect
async function checkMySQLConnection() {
  return new Promise (async (resolve, reject) => {
    let connection = mysql.createConnection(mysqlConfig)
    let result = {
      status: false
    }
    try {
      connection.connect((err) => {
        if(err) {
          result.error = {
            code: err.code,
            message: err.message
          }
          result.status = false
          resolve(result)
        } else {
          result.success = {
            message: 'Connected successfully.',
            connection_id: connection.threadId
          }
          result.status = true
          resolve(result)
        }
      })
    } catch (err) {
      result.error = {
        code: err.code,
        message: err.message
      }
      result.status = false
      reject(result)
    } finally {
      if( connection && connection.end ) connection.end()
      return result.status;
    }
  })
}

// MSSQL Connect
async function checkMSSQLConnection() {
  return new Promise (async (resolve, reject) => {
    let pool = new mssql.ConnectionPool(mssqlConfig)
    let result = {
      status: false
    }
    try {
      pool.connect( (err) => {
        if(err) {
          result.error = {
            code: err.code,
            message: err.message
          }
          result.status = false
          resolve(result)
        } else {
          result.success = {
            message: 'Connected successfully.'
          }
          result.status = true
          resolve(result)
        }
        
      })
    } catch (err) {
      result.error = {
        code: err.code,
        message: err.message
      }
      result.status = false
      reject(result)
    } finally {
      // if( pool && pool.close ) pool.close()
      return result.status
    }
  })
}

module.exports = router