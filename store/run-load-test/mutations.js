export default {
  setLoadTestStatus (state, { statusMsg, loading, hasError, idle, completed }) {
    state.loadTest.statusMsg = statusMsg
    state.loadTest.loading = loading
    state.loadTest.hasError = hasError
    state.loadTest.idle = idle
    state.loadTest.completed = completed
  },
  setProgressStatus (state, { progressValue, progressMsg, progressStyle }) {
    state.progress.value = progressValue
    state.progress.msg = progressMsg
    state.progress.style = progressStyle
  },
  setLoadTestResults (state, { mysqlResult, mssqlResult, mongoResult }) {
    state.results.mysqlResult = mysqlResult
    state.results.mssqlResult = mssqlResult
    state.results.mongoResult = mongoResult
  },
  // setLoadTestRequests (state, { mysqlRequests, mssqlRequests, mongoRequests }) {
  setLoadTestRequests (state, { newMySQL, newMSSQL, newMongoDB }) {
    // console.log(mysqlRequests.latency.totalRequests)
    // state.requests.mysqlRequests = []
    // mysqlRequests.forEach((element) => {
    //   state.requests.mysqlRequests.push(element.latency.totalRequests)
    // })
    // state.requests.mssqlRequests = []
    // mssqlRequests.forEach((element) => {
    //   state.requests.mssqlRequests.push(element.latency.totalRequests)
    // })
    // state.requests.mongoRequests = []
    // mongoRequests.forEach((element) => {
    //   state.requests.mongoRequests.push(element.latency.totalRequests)
    // })
    state.requests.mysqlRequests = newMySQL
    state.requests.mssqlRequests = newMSSQL
    state.requests.mongoRequests = newMongoDB
    // state.requests.mysqlRequests = mysqlRequests
    // state.requests.mssqlRequests = mssqlRequests
    // state.requests.mongoRequests = mongoRequests
  },
  setLoadTestFirstRun (state, { newValue }) {
    state.firstRun = newValue
  }
}
