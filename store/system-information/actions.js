import axios from 'axios'

export default {
  async runSystemInfo ({ commit, dispatch }) {
    const config = {
      headers: {
        Accept: 'application/jason'
      }
    }

    try {
      const response = await axios.get('http://localhost:5000/api/sys/info', config)
      const systeminfo = response.data.os
      commit('setSystemInfo', { systeminfo })
    } catch (err) {
      // console.log(err)
    }
  }
}
