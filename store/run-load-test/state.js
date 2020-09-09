export default () => ({
  firstRun: false, // temporarily true so you can edit charts. revert to false after youre done
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
    mysqlRequests: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    mssqlRequests: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    mongoRequests: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
})
