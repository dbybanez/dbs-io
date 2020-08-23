<template>
  <div class="row">
    <div class="col mb-4">
      <div class="card" style="min-height:15rem">
        <div class="card-body d-flex align-items-center justify-content-center">
          <img class="w-75" src="~/assets/images/mysql-logo.svg" />
        </div>
      </div>
      <p class="mt-3 mb-0 text-center"><i class="mdi mdi-circle text-warning" v-bind:class="updateIcon"></i> {{ dbStatus[0].status }}</p>
      <!-- <DatabaseStatus /> -->
    </div>
    <div class="col mb-4">
      <div class="card" style="min-height:15rem">
        <div class="card-body d-flex align-items-center justify-content-center">
          <img class="w-75" src="~/assets/images/microsoft-sql-server-logo.svg" />
        </div>
      </div>
      <p class="mt-3 mb-0 text-center"><i class="mdi mdi-circle text-warning" v-bind:class="updateIcon"></i> {{ dbStatus[0].status }}</p>
      <!-- <DatabaseStatus /> -->
    </div>
    <div class="col mb-4">
      <div class="card" style="min-height:15rem">
        <div class="card-body d-flex align-items-center justify-content-center">
          <img class="w-75" src="~/assets/images/mongodb-logo.svg" />
        </div>
      </div>
      <p class="mt-3 mb-0 text-center"><i class="mdi mdi-circle text-warning" v-bind:class="updateIcon"></i> {{ dbStatus[0].status }}</p>
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
          status: 'Loading...'
        },
        {
          db: 'mysql',
          status: 'Loading...'
        },
        {
          db: 'mssql',
          status: 'Loading...'
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

    try {
      const res = await axios.get('http://localhost:5000/api/checkconnection/mongo', config)
      // this.active = res.data ? 'Online' : 'Offline'
      if (res.data) {
        this.dbStatus[0].status = 'Online'
      } else {
        this.dbStatus[0].status = 'Offline'
      }
      console.log(res.data)
    } catch (err) {
      console.log(err)
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
