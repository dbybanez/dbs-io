<template>
  <div class="container-fluid h-100 py-4">
    <div class="row align-items-center justify-content-center h-100">
      <div class="col-12">
        <DatabaseLoader v-if="!loadTestFirstRun" />
        <LoadTestResults v-if="loadTestFirstRun"/>
        <EnvironmentChecker />
        <ConnectionProgress />
        <DefaultRunTest />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DatabaseLoader from '../components/DatabaseLoader'
import LoadTestResults from '../components/LoadTestResults'
import EnvironmentChecker from '../components/EnvironmentChecker'
import ConnectionProgress from '../components/ConnectionProgress'
import DefaultRunTest from '../components/DefaultRunTest'

export default {
  components: {
    DatabaseLoader,
    LoadTestResults,
    EnvironmentChecker,
    ConnectionProgress,
    DefaultRunTest
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      loadTestFirstRun: 'run-load-test/loadTestFirstRun'
    })
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
