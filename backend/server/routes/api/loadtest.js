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

      // Sort MySQL requests by request index
      mysql_requests.sort((a, b) => {
        if ( a.requestIndex < b.requestIndex ){
          return -1;
        }
        if ( a.requestIndex > b.requestIndex ){
          return 1;
        }
        return 0;
      })
      // Sort MSSQL requests by request index
      mssql_requests.sort((a, b) => {
        if ( a.requestIndex < b.requestIndex ){
          return -1;
        }
        if ( a.requestIndex > b.requestIndex ){
          return 1;
        }
        return 0;
      })
      // Sort MongoDB requests by request index
      mongo_requests.sort((a, b) => {
        if ( a.requestIndex < b.requestIndex ){
          return -1;
        }
        if ( a.requestIndex > b.requestIndex ){
          return 1;
        }
        return 0;
      })

      let mysqlVal = mysql_requests.map((value, index) => {
        console.log(value)
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
  let value = {
    requestIndex: result.requestIndex,
    requestElapsed: result.requestElapsed,
    instanceIndex: result.instanceIndex,
    latency: {
      totalRequests: latency.totalRequests,
      totalTimeSeconds: latency.totalTimeSeconds,
      requestPerSecond: latency.rps,
      meanLatencyMs: latency.meanLatencyMs,
    },
    errors: error
  }
  results_statusCallback.push(value)
  // console.log('Current latency %j, result %j, error %j', latency, result, error);
  // console.log('----');
  // console.log('Request elapsed milliseconds: ', result.requestElapsed);
  // console.log('Request index: ', result.requestIndex);
  // console.log('Request loadtest() instance index: ', result.instanceIndex);
}

module.exports = router