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
  setLoadTestRequests (state, { mysqlRequests, mssqlRequests, mongoRequests }) {
    state.requests.mysqlRequests = mysqlRequests
    state.requests.mysqlRequests = mssqlRequests
    state.requests.mysqlRequests = mongoRequests
  },
  setLoadTestFirstRun (state, { newValue }) {
    state.firstRun = newValue
  }
}
