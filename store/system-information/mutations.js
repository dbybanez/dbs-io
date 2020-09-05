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
  }
}
