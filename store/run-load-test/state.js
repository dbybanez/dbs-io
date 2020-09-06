export default () => ({
  firstRun: false,
  loadTest: {
    statusMsg: 'Idle',
    loading: false,
    hasError: false,
    idle: true,
    completed: false
  },
  progress: {
    value: 0,
    msg: 'Checking environment configuration...',
    style: 'width: 0%'
  },
  results: {
    mysqlResult: null,
    mssqlResult: null,
    mongoResult: null
  },
  requests: {
    mysqlRequests: [],
    mssqlRequests: [],
    mongoRequests: []
  }
})
