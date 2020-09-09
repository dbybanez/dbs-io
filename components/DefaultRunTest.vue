<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <div class="row justify-content-center" v-if="loadTestStatus.idle">
        <div class="col-10 text-center">
          <p class="my-3 text-center">To run a quick test, click Run load test.</p>
          <div class="row">
            <div class="col">
              <button class="btn btn-danger btn-block py-3" @click="runLoadTest" v-if="mongoStatus.isActive && mysqlStatus.isActive && mysqlStatus.isActive">Run load test</button>
              <button class="btn btn-danger btn-block py-3" disabled v-else>Run load test</button>
            </div>
            <div class="col">
              <button class="btn btn-light btn-block py-3">Configure settings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DefaultRunTest',
  data () {
    return {
      status: false
    }
  },
  methods: {
    ...mapActions({
      runLoadTest: 'run-load-test/runLoadTest'
    })
  },
  computed: {
    ...mapGetters({
      loadTestStatus: 'run-load-test/loadTestStatus',
      mongoStatus: 'status-checker/mongoStatus',
      mysqlStatus: 'status-checker/mysqlStatus',
      mssqlStatus: 'status-checker/mssqlStatus'
    })
  }
}
</script>

<style>
</style>
