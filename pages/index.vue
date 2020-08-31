<template>
  <div class="container-fluid h-100 py-4">
    <div class="row align-items-center justify-content-center h-100">
      <div class="col-12">
        <!-- <DatabaseLoader /> -->
        <LoadTestResults />
        <EnvironmentChecker />
        <ConnectionProgress :run-test-connection="runTestTriggered" v-on:testCompleted="resetRunTest" />
        <DefaultRunTest v-on:runTestClicked="updateRunTest" :reset-load-test="resetTest"/>
      </div>
    </div>
  </div>
</template>

<script>
// import DatabaseLoader from '../components/DatabaseLoader'
import LoadTestResults from '../components/LoadTestResults'
import EnvironmentChecker from '../components/EnvironmentChecker'
import ConnectionProgress from '../components/ConnectionProgress'
import DefaultRunTest from '../components/DefaultRunTest'

export default {
  components: {
    // DatabaseLoader,
    LoadTestResults,
    EnvironmentChecker,
    ConnectionProgress,
    DefaultRunTest
  },
  data () {
    return {
      runTestTriggered: false,
      resetTest: false
    }
  },
  methods: {
    updateRunTest () {
      this.runTestTriggered = true
      console.log('going to test now...')
    },
    resetRunTest () {
      console.log('going to reset now...')
      this.resetTest = true
    }
  },
  head () {
    return {
      title: 'DBS.IO',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place for corny dad jokes'
        }
      ]
    }
  }
}
</script>
