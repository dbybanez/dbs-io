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
  let result = false

  try {
    connection.connect()
    console.log('connected as id ' + connection.threadId);
  } catch (err) {
    console.log('error connecting: ' + err.stack);
    return
  } finally {
    return connection.threadId
  }

  //return result 
  
  // try {
  //   connection.connect((err) => {
  //     if(err) return false
  //   })
  //   result = await getEmployeeList(connection)
  // } catch (err) {
  //   return false
  // } finally {
  //   if( connection && connection.end ) connection.end()
  //   return result;
  // }
}

// async function getEmployeeList( connection ) {
//   return new Promise((resolve, reject)  => {
//     var result
//     var query_result = []
//     var res
//     var query = "SELECT 1"
//     connection.query(query, function (error, results, fields) {
//       if (error) reject(false)
//       if(results.length > 0) {
//         for (result in results) {
//           query_result.push(results[result])
//         }
//       }
//       res = JSON.parse(JSON.stringify(query_result))
//       resolve(true)
//     })
//   })
// }


module.exports = router