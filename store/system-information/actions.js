export default {
  runLoadTest ({ commit }) {
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
      progressValue = 60
      progressMsg = 'Running database load tests...'
      progressStyle = `width: ${progressValue}%`
      commit('setProgressStatus', { progressValue, progressMsg, progressStyle })
    }, 3500)

    // Simulate loading 4
    setTimeout(() => {
      progressValue = 80
      progressMsg = '$&#$(#H$J#@H$UIG#(@$*(DHU(@HD(#GU('
      progressStyle = `width: ${progressValue}%`
      commit('setProgressStatus', { progressValue, progressMsg, progressStyle })
    }, 4500)

    // Simulate loading 4
    setTimeout(() => {
      progressValue = 100
      progressMsg = 'Database load test completed!'
      progressStyle = `width: ${progressValue}%`
      commit('setProgressStatus', { progressValue, progressMsg, progressStyle })
    }, 5000)

    // Simulate run load test
    setTimeout(() => {
      statusMsg = 'Running test...'
      loading = true
      commit('setLoadTestStatus', { statusMsg, loading, hasError, idle, completed })
    }, 5500)

    // Simulate completed
    setTimeout(() => {
      statusMsg = 'Test completed!'
      loading = false
      idle = true
      completed = true
      commit('setLoadTestStatus', { statusMsg, loading, hasError, idle, completed })
    }, 6000)
  }
}
