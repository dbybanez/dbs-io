<template>
  <p class="mt-3 mb-0 text-center"><i class="mdi mdi-circle text-warning" v-bind:class="updateIcon"></i> {{ dbStatus[0].status }}</p>
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
  computed: {
    updateIcon: () => {
      // return this.active === 'Online' ? 'text-success' : 'text-danger'
    }
  },
  name: 'DatabaseStatus',
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
