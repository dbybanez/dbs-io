<template>
  <div class="row">
    <div class="col-4 mb-4">
      <div class="card" style="min-height:15rem">
        <div class="card-body d-flex align-items-center justify-content-center">
          <img class="w-75" src="~/assets/images/mysql-logo.svg" />
        </div>
      </div>
      <p class="mt-3 mb-0 text-center"><i class="mdi mdi-circle" v-bind:class="[(this.mysql.isLoading) ? 'text-warning': (this.mysql.isActive) ? 'text-success' : 'text-danger']"></i> {{ mysql.status }}</p>
      <!-- <DatabaseStatus /> -->
    </div>
    <div class="col-4 mb-4">
      <div class="card" style="min-height:15rem">
        <div class="card-body d-flex align-items-center justify-content-center">
          <img class="w-75" src="~/assets/images/microsoft-sql-server-logo.svg" />
        </div>
      </div>
      <p class="mt-3 mb-0 text-center"><i class="mdi mdi-circle" v-bind:class="[(this.mssql.isLoading) ? 'text-warning': (this.mssql.isActive) ? 'text-success' : 'text-danger']"></i> {{ mssql.status }}</p>
      <!-- <DatabaseStatus /> -->
      <p class="text-center mt-3">Counter: {{ totalCounter }}</p>
    </div>
    <div class="col-4 mb-4">
      <div class="card" style="min-height:15rem">
        <div class="card-body d-flex align-items-center justify-content-center">
          <img class="w-75" src="~/assets/images/mongodb-logo.svg" />
        </div>
      </div>
      <p class="mt-3 mb-0 text-center"><i class="mdi mdi-circle" v-bind:class="[(this.mongo.isLoading) ? 'text-warning': (this.mongo.isActive) ? 'text-success' : 'text-danger']"></i> {{ mongo.status }}</p>
      <!-- <DatabaseStatus /> -->
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      mongo: {
        status: 'Loading...',
        isActive: false,
        hasError: false,
        isLoading: true
      },
      mysql: {
        status: 'Loading...',
        isActive: false,
        hasError: false,
        isLoading: true
      },
      mssql: {
        status: 'Loading...',
        isActive: false,
        hasError: false,
        isLoading: true
      }
    }
  },
  methods: {
    ...mapActions[['fetchTotalCounter']],
    mongoConnection () {
      // return new Promise((resolve, reject) => {
      //   try {
      //     const res = axios.get('http://localhost:5000/api/checkconnection/mongo', config)
      //     if (res.data.status) {
      //       resolve('Online')
      //     } else {
      //       resolve('Offline')
      //     }
      //   } catch (err) {
      //     reject('Loading...')
      //   }
      // })
    }
  },
  created () {
    this.$store.dispatch('fetchTotalCounter')
  },
  // async created () {
  //   const config = {
  //     headers: {
  //       Accept: 'application/json'
  //     }
  //   }

  //   // this.dbStatus[0].status = await mongoConnection()

  //   try {
  //     const res = await axios.get('http://localhost:5000/api/checkconnection/mongo', config)
  //     if (res.data.status) {
  //       this.mongo.isActive = true
  //       this.mongo.hasError = false
  //       this.mongo.isLoading = false
  //       this.mongo.status = 'Online'
  //     } else {
  //       this.mongo.isActive = false
  //       this.mongo.hasError = true
  //       this.mongo.isLoading = false
  //       this.mongo.status = 'Offline'
  //     }
  //   } catch (err) {
  //     // reject('Loading...')
  //   }

  //   try {
  //     const res = await axios.get('http://localhost:5000/api/checkconnection/mysql', config)
  //     if (res.data.status) {
  //       this.mysql.isActive = true
  //       this.mysql.hasError = false
  //       this.mysql.isLoading = false
  //       this.mysql.status = 'Online'
  //     } else {
  //       this.mysql.isActive = false
  //       this.mysql.hasError = true
  //       this.mysql.isLoading = false
  //       this.mysql.status = 'Offline'
  //     }
  //   } catch (err) {
  //     // test
  //   }

  //   try {
  //     const res = await axios.get('http://localhost:5000/api/checkconnection/mssql', config)
  //     if (res.data.status) {
  //       this.mssql.isActive = true
  //       this.mssql.hasError = false
  //       this.mssql.isLoading = false
  //       this.mssql.status = 'Online'
  //     } else {
  //       this.mssql.isActive = false
  //       this.mssql.hasError = true
  //       this.mssql.isLoading = false
  //       this.mssql.status = 'Offline'
  //     }
  //   } catch (err) {
  //     // test
  //   }
  // },
  computed: {
    ...mapGetters(['totalCounter'])
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
