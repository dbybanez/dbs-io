<template>
  <div class="container h-100 py-5">
    <div class="row align-items-center justify-content-center h-100">
      <div class="col-9">
        <DatabaseLoader />
        <EnvironmentChecker />
        <ConnectionProgress v-on:run-test="updateStatus" />
        <DefaultRunTest />
      </div>
    </div>
  </div>
</template>

<script>
import DatabaseLoader from '../components/DatabaseLoader'
import EnvironmentChecker from '../components/EnvironmentChecker'
import ConnectionProgress from '../components/ConnectionProgress'
import DefaultRunTest from '../components/DefaultRunTest'

export default {
  components: {
    DatabaseLoader,
    EnvironmentChecker,
    ConnectionProgress,
    DefaultRunTest
  },
  data () {
    return {
      isRunTest: false
    }
  },
  props: ['run-test'],
  methods: {
    updateStatus () {
      this.isRunTest = !this.isRunTest
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
