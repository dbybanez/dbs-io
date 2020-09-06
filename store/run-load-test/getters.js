export default {
  loadTestFirstRun: state => state.firstRun,
  loadTestStatus: state => state.loadTest,
  progressStatus: state => state.progress,
  loadTestResults: state => state.results,
  loadTestRequests: state => state.requests
}
