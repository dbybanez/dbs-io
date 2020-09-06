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
    }, 3500)

    // Running test

    dispatch('loadTestResults').then(() => {
      // Set load test counter
      console.log(state.firstRun)
      if (state.firstRun === false) {
        const newValue = true
        console.log(newValue)
        commit('setLoadTestFirstRun', { newValue })
      }

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
    let mysqlRequests = []

    let mssqlResult
    let mssqlRequests = []

    let mongoResult
    let mongoRequests = []

    try {
      const response = await axios.get('http://localhost:5000/api/run', config)
      mysqlResult = response.data.result[0]
      mysqlRequests = response.data.requests.MySQL

      mssqlResult = response.data.result[1]
      mssqlRequests = response.data.requests.MSSQL

      mongoResult = response.data.result[2]
      mongoRequests = response.data.requests.MongoDB

      commit('setLoadTestResults', { mysqlResult, mssqlResult, mongoResult })
      commit('setLoadTestRequests', { mysqlRequests, mssqlRequests, mongoRequests })
    } catch (err) {
      // console.log(err)
    }
  }
}
