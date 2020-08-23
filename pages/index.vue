<template>
  <div class="container h-100 pt-3">
    <div class="row align-items-center justify-content-center h-100">
      <div class="col-9">
        <DatabaseLoader />
        <EnvironmentChecker />
        <DefaultRunTest />
      </div>
    </div>
  </div>
</template>

<script>
import DatabaseLoader from '../components/DatabaseLoader'
import EnvironmentChecker from '../components/EnvironmentChecker'
import DefaultRunTest from '../components/DefaultRunTest'

export default {
  components: {
    DatabaseLoader,
    EnvironmentChecker,
    DefaultRunTest
  },
  head () {
    return {
      title: 'Welcome to dad jokes',
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
