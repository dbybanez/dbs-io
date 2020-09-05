const express = require('express')
const router = express.Router()
const loadtest = require('loadtest');
const os = require('os')

router.get('/run', async (req, res) => {
  let result = await initLoadTest()
  // let result = true
  res.send(await result)
})

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
          // concurrency: 10,
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
      console.log(os.totalmem())
      console.log(os.freemem())

      resolve(result)
    })
    
  })
}

async function runLoadTest (config) {
  return new Promise((resolve, reject) => {
    loadtest.loadTest(config.option, function (error, result ) {
      if(error) throw error
      // console.log(process.memoryUsage().heapUsed / 1024 / 1024)
      let value = {
        databaseName: config.db,
        results: result,
        memoryUsage: {
          "Resident Set Size (mb)": process.memoryUsage().rss / 1024 / 1024,
          "Total Size of the Heap (mb)": process.memoryUsage().heapTotal / 1024 / 1024,
          "Heap Used (mb)": process.memoryUsage().heapUsed / 1024 / 1024
        }
      }
      resolve(value)
    })
  })
}

let display

function statusCallback(error, result, latency) {
  display = {error, result, latency}
  // console.log('=======================');
  //   console.log(`Requests: ${result.requestIndex}, Requests per second: ${result.requestElapsed}`)
  //   // console.log('Current latency %j, error %j', latency, error);
  //   console.log('----');
  //   // console.log('Request elapsed milliseconds: ', result.requestElapsed);
  //   // console.log('Request index: ', result.requestIndex);
  //   console.log('Request loadtest() instance index: ', result.instanceIndex);
  // console.log('=======================');
}

// console.log(display)

module.exports = router