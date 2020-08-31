export default () => ({
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
  }
})
