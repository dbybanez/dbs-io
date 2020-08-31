<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <div class="row">
        <div class="col-4 mb-4">
          <div class="card" style="min-height:15rem">
            <div class="card-body d-flex align-items-center justify-content-center">
              <img class="w-75" src="~/assets/images/mysql-logo.svg" />
            </div>
          </div>
          <p class="mt-3 mb-0 text-center"><i class="mdi mdi-circle" v-bind:class="[(mysqlStatus.isLoading) ? 'text-warning': (mysqlStatus.isActive) ? 'text-success' : 'text-danger']"></i> {{ mysqlStatus.statusMsg }}</p>
        </div>
        <div class="col-4 mb-4">
          <div class="card" style="min-height:15rem">
            <div class="card-body d-flex align-items-center justify-content-center">
              <img class="w-75" src="~/assets/images/microsoft-sql-server-logo.svg" />
            </div>
          </div>
          <p class="mt-3 mb-0 text-center"><i class="mdi mdi-circle" v-bind:class="[(mssqlStatus.isLoading) ? 'text-warning': (mssqlStatus.isActive) ? 'text-success' : 'text-danger']"></i> {{ mssqlStatus.statusMsg }}</p>
        </div>
        <div class="col-4 mb-4">
          <div class="card" style="min-height:15rem">
            <div class="card-body d-flex align-items-center justify-content-center">
              <img class="w-75" src="~/assets/images/mongodb-logo.svg" />
            </div>
          </div>
          <p class="mt-3 mb-0 text-center"><i class="mdi mdi-circle" v-bind:class="[(mongoStatus.isLoading) ? 'text-warning': (mongoStatus.isActive) ? 'text-success' : 'text-danger']"></i> {{ mongoStatus.statusMsg }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  methods: {},
  created () {
    this.$store.dispatch('status-checker/connectToMongo')
    this.$store.dispatch('status-checker/connectToMySQL')
    this.$store.dispatch('status-checker/connectToMSSQL')
  },
  computed: {
    ...mapGetters({
      mongoStatus: 'status-checker/mongoStatus',
      mysqlStatus: 'status-checker/mysqlStatus',
      mssqlStatus: 'status-checker/mssqlStatus'
    })
  },
  components: {},
  name: 'DatabaseLoader',
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css'
      }
    ]
  }
}
</script>

<style>
</style>
