<template>
  <div class="row">
    <div class="col mb-4">
      <div class="card" style="min-height:15rem">
        <div class="card-body d-flex align-items-center justify-content-center">
          <img class="w-75" src="~/assets/images/mysql-logo.svg" />
        </div>
      </div>
      <p class="mt-3 mb-0 text-center"><i class="mdi mdi-circle" v-bind:class="[(this.dbStatus[1].isLoading) ? 'text-warning': (this.dbStatus[1].isActive) ? 'text-success' : 'text-danger']"></i> {{ dbStatus[1].status }}</p>
      <!-- <DatabaseStatus /> -->
    </div>
    <div class="col mb-4">
      <div class="card" style="min-height:15rem">
        <div class="card-body d-flex align-items-center justify-content-center">
          <img class="w-75" src="~/assets/images/microsoft-sql-server-logo.svg" />
        </div>
      </div>
      <p class="mt-3 mb-0 text-center"><i class="mdi mdi-circle" v-bind:class="[(this.dbStatus[2].isLoading) ? 'text-warning': (this.dbStatus[2].isActive) ? 'text-success' : 'text-danger']"></i> {{ dbStatus[2].status }}</p>
      <!-- <DatabaseStatus /> -->
    </div>
    <div class="col mb-4">
      <div class="card" style="min-height:15rem">
        <div class="card-body d-flex align-items-center justify-content-center">
          <img class="w-75" src="~/assets/images/mongodb-logo.svg" />
        </div>
      </div>
      <p class="mt-3 mb-0 text-center"><i class="mdi mdi-circle" v-bind:class="[(this.dbStatus[0].isLoading) ? 'text-warning': (this.dbStatus[0].isActive) ? 'text-success' : 'text-danger']"></i> {{ dbStatus[0].status }}</p>
      <!-- <DatabaseStatus /> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      dbStatus: [
        {
          db: 'mongo',
          status: 'Loading...',
          isActive: false,
          hasError: false,
          isLoading: true
        },
        {
          db: 'mysql',
          status: 'Loading...',
          isActive: false,
          hasError: false,
          isLoading: true
        },
        {
          db: 'mssql',
          status: 'Loading...',
          isActive: false,
          hasError: false,
          isLoading: true
        }
      ]
    }
  },
  async created () {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }

    // this.dbStatus[0].status = await mongoConnection()

    try {
      const res = await axios.get('http://localhost:5000/api/checkconnection/mongo', config)
      if (res.data.status) {
        this.dbStatus[0].isActive = true
        this.dbStatus[0].hasError = false
        this.dbStatus[0].isLoading = false
        this.dbStatus[0].status = 'Online'
      } else {
        this.dbStatus[0].isActive = false
        this.dbStatus[0].hasError = true
        this.dbStatus[0].isLoading = false
        this.dbStatus[0].status = 'Offline'
      }
    } catch (err) {
      // reject('Loading...')
    }

    try {
      const res = await axios.get('http://localhost:5000/api/checkconnection/mysql', config)
      if (res.data.status) {
        this.dbStatus[1].isActive = true
        this.dbStatus[1].hasError = false
        this.dbStatus[1].isLoading = false
        this.dbStatus[1].status = 'Online'
      } else {
        this.dbStatus[1].isActive = false
        this.dbStatus[1].hasError = true
        this.dbStatus[1].isLoading = false
        this.dbStatus[1].status = 'Offline'
      }
    } catch (err) {
      // test
    }

    try {
      const res = await axios.get('http://localhost:5000/api/checkconnection/mssql', config)
      if (res.data.status) {
        this.dbStatus[2].isActive = true
        this.dbStatus[2].hasError = false
        this.dbStatus[2].isLoading = false
        this.dbStatus[2].status = 'Online'
      } else {
        this.dbStatus[2].isActive = false
        this.dbStatus[2].hasError = true
        this.dbStatus[2].isLoading = false
        this.dbStatus[2].status = 'Offline'
      }
    } catch (err) {
      // test
    }
  },
  methods: {
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
