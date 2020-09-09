import axios from 'axios'

export default {
  runLoadTest ({ commit, state, dispatch }) {
    let statusMsg = 'Idle'
    let loading = false
    const hasError = false
    let idle = true
    let completed = false

    let progressValue = 0
    let progressMsg = ''
    let progressStyle = 'width: '

    // Initialize
    setTimeout(() => {
      statusMsg = 'Initiating load test...'
      idle = false
      progressMsg = 'Checking environment configuration...'
      progressStyle = `width: ${progressValue}%`
      commit('setLoadTestStatus', { statusMsg, loading, hasError, idle, completed })
      commit('setProgressStatus', { progressValue, progressMsg, progressStyle })
    }, 500)

    // Simulate loading 1
    setTimeout(() => {
      progressValue = 20
      progressMsg = 'Establishing database connections...'
      progressStyle = `width: ${progressValue}%`
      commit('setProgressStatus', { progressValue, progressMsg, progressStyle })
    }, 1000)

    // Simulate loading 2
    setTimeout(() => {
      progressValue = 40
      progressMsg = 'Databases connected!'
      progressStyle = `width: ${progressValue}%`
      commit('setProgressStatus', { progressValue, progressMsg, progressStyle })
    }, 1500)

    // Simulate loading 3
    setTimeout(() => {
      progressValue = 55
      progressMsg = 'Running database load tests...'
      progressStyle = `width: ${progressValue}%`
      commit('setProgressStatus', { progressValue, progressMsg, progressStyle })
    }, 2500)

    // Running test

    dispatch('loadTestResults').then(() => {
      // Set load test counter
      // console.log(state.firstRun)
      if (state.firstRun === false) {
        const newValue = true
        // console.log(newValue)
        commit('setLoadTestFirstRun', { newValue })
      }

      /**
       * Get System information
       */
      this.dispatch('system-information/runSystemInfo')

      progressValue = 90
      progressMsg = '$&#$(#H$J#@H$UIG#(@$*(DHU(@HD(#GU('
      progressStyle = `width: ${progressValue}%`
      commit('setProgressStatus', { progressValue, progressMsg, progressStyle })

      setTimeout(() => {
        progressValue = 100
        progressMsg = 'Database load test completed!'
        progressStyle = `width: ${progressValue}%`
        commit('setProgressStatus', { progressValue, progressMsg, progressStyle })
      }, 500)

      // Simulate completed
      setTimeout(() => {
        statusMsg = 'Test completed!'
        loading = false
        idle = true
        completed = true
        commit('setLoadTestStatus', { statusMsg, loading, hasError, idle, completed })
      }, 1000)
    })
  },
  async loadTestResults ({ commit }) {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }

    let mysqlResult
    const mysqlRequests = []

    let mssqlResult
    const mssqlRequests = []

    let mongoResult
    const mongoRequests = []

    try {
      const response = await axios.get('http://localhost:5000/api/run', config)
      /**
       * MySQL Process Data
       */
      mysqlResult = response.data.result[0]
      // mysqlRequests = response.data.requests.MySQL
      response.data.requests.MySQL.forEach((element) => {
        mysqlRequests.push(element.latency.totalRequests)
      })
      let incrementBy = Math.floor(mysqlRequests.length / 20)
      const newMySQL = []
      for (let i = 0; i < mysqlRequests.length; i += incrementBy) {
        newMySQL.push(mysqlRequests[i])
      }
      if (newMySQL.length < 21) {
        newMySQL.unshift(0)
      }
      // console.log(`MySQL increment by: ${incrementBy}`)
      // console.log(newMySQL)

      /**
       * MSSQL Process Data
       */
      mssqlResult = response.data.result[1]
      // mssqlRequests = response.data.requests.MSSQL
      response.data.requests.MSSQL.forEach((element) => {
        mssqlRequests.push(element.latency.totalRequests)
      })
      incrementBy = Math.floor(mssqlRequests.length / 20)
      const newMSSQL = []
      for (let i = 0; i < mssqlRequests.length; i += incrementBy) {
        newMSSQL.push(mssqlRequests[i])
      }
      if (newMSSQL.length < 21) {
        newMSSQL.unshift(0)
      }
      // console.log(`MSSQL increment by: ${incrementBy}`)
      // console.log(newMSSQL)

      /**
       * MongoDB Process Data
       */
      mongoResult = response.data.result[2]
      // mongoRequests = response.data.requests.MongoDB
      response.data.requests.MongoDB.forEach((element) => {
        mongoRequests.push(element.latency.totalRequests)
      })
      incrementBy = Math.floor(mongoRequests.length / 20)
      const newMongoDB = []
      for (let i = 0; i < mongoRequests.length; i += incrementBy) {
        newMongoDB.push(mongoRequests[i])
      }
      if (newMongoDB.length < 21) {
        newMongoDB.unshift(0)
      }
      // console.log(`MongoDB increment by: ${incrementBy}`)
      // console.log(newMongoDB)

      commit('setLoadTestResults', { mysqlResult, mssqlResult, mongoResult })
      // commit('setLoadTestRequests', { mysqlRequests, mssqlRequests, mongoRequests })
      commit('setLoadTestRequests', { newMySQL, newMSSQL, newMongoDB })
    } catch (err) {
      // console.log(err)
    }
  }
}
