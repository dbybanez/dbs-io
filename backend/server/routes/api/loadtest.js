const express = require('express')
const router = express.Router()
const loadtest = require('loadtest');
const os = require('os');

router.get('/run', async (req, res) => {
  let result = await initLoadTest()
  // let result = true
  res.send(await result)
})

let results_statusCallback = []
let mysql_requests = []
let mssql_requests = []
let mongo_requests = []

async function initLoadTest() {
  return new Promise((resolve, reject) => {
    const configs = [
      {
        db: "MySQL",
        option: {
          url: 'http://localhost:5000/api/load/mysql',
          concurrency: 10,
          maxSeconds: 20,
          statusCallback: statusCallback
        }
      },
      {
        db: "MSSQL",
        option: {
          url: 'http://localhost:5000/api/load/mssql',
          concurrency: 10,
          maxSeconds: 20,
          statusCallback: statusCallback
        }
      },
      {
        db: "MongoDB",
        option: {
          url: 'http://localhost:5000/api/load/mongo',
          concurrency: 10,
          maxSeconds: 20,
          statusCallback: statusCallback
        }
      }
    ]
  
    let promises = []
  
    configs.forEach((config, index) => {
      promises.push(runLoadTest(config))
    })

    Promise.all(promises).then((result) => {
      // console.log(os.cpus())
      // console.log(os.totalmem())
      // console.log(os.freemem())
      

      // Map instances to their corresponding databases
      results_statusCallback.forEach((request) => {

        // Using modulo because instanceIndex increments all the time. No control
        if((request.instanceIndex % 3) === 0) { // MySQL
          mysql_requests.push(request)
        } else if((request.instanceIndex % 3) === 1) { // MSSQL
          mssql_requests.push(request)
        } else if((request.instanceIndex % 3) === 2){ // MongoDB
          mongo_requests.push(request)
        }
      })

      // console.log(`Results total statusCallback: ${results_statusCallback.length}`)
      // console.log(`Results total mysql_requests: ${mysql_requests.length}`)
      // console.log(`Results total mssql_requests: ${mssql_requests.length}`)
      // console.log(`Results total mongo_requests: ${mongo_requests.length}`)

      mysql_requests.sort((a, b) => {
        if ( a.requestIndex < b.requestIndex ){
          return -1;
        }
        if ( a.requestIndex > b.requestIndex ){
          return 1;
        }
        return 0;
      })

      mssql_requests.sort((a, b) => {
        if ( a.requestIndex < b.requestIndex ){
          return -1;
        }
        if ( a.requestIndex > b.requestIndex ){
          return 1;
        }
        return 0;
      })

      mongo_requests.sort((a, b) => {
        if ( a.requestIndex < b.requestIndex ){
          return -1;
        }
        if ( a.requestIndex > b.requestIndex ){
          return 1;
        }
        return 0;
      })

      let results = {
        result: result,
        requests: {
          MySQL: mysql_requests,
          MSSQL: mssql_requests,
          MongoDB: mongo_requests
        }
      }

      results_statusCallback = []
      mysql_requests = []
      mssql_requests = []
      mongo_requests = []

      resolve(results)
    })
    
  })
}

async function runLoadTest (config) {
  return new Promise((resolve, reject) => {
    // console.dir(config.option.statusCallback)
    loadtest.loadTest(config.option, function (error, result ) {
      if(error) throw error
      // console.log(process.memoryUsage().heapUsed / 1024 / 1024)

      // console.log(res)
      let value = {
        databaseName: config.db,
        results: result,
        memoryUsage: {
          "Resident Set Size (mb)": process.memoryUsage().rss / 1024 / 1024,
          "Total Size of the Heap (mb)": process.memoryUsage().heapTotal / 1024 / 1024,
          "Heap Used (mb)": process.memoryUsage().heapUsed / 1024 / 1024
        }
      }

      // console.log(`From runLoadTest: ${result.instanceIndex}`)

      resolve(value)
    })
  })
}



function statusCallback(error, result, latency) {
  // console.log('Request loadtest() instance index: ', result.instanceIndex);
  // console.log(latency)
  let value = {
    // errors: error,
    requestIndex: result.requestIndex,
    requestPerSecond: latency.rps,
    meanLatencyMs: latency.meanLatencyMs,
    requestElapsed: result.requestElapsed,
    instanceIndex: result.instanceIndex
  }
  results_statusCallback.push(value)
  // console.log(results)
  // console.log('=======================');
  //   console.log(`Requests: ${result.requestIndex}, Requests per second: ${result.requestElapsed}`)
  //   // console.log('Current latency %j, error %j', latency, error);
  //   console.log('----');
  //   // console.log('Request elapsed milliseconds: ', result.requestElapsed);
  //   // console.log('Request index: ', result.requestIndex);
    
  // console.log('=======================');
}

module.exports = router