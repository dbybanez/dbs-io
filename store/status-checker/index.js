import axios from 'axios'

export const state = () => ({
  mongo: {
    statusMsg: 'Loading...',
    isActive: false,
    hasError: false,
    isLoading: true
  },
  mysql: {
    statusMsg: 'Loading...',
    isActive: false,
    hasError: false,
    isLoading: true
  },
  mssql: {
    statusMsg: 'Loading...',
    isActive: false,
    hasError: false,
    isLoading: true
  }
})

export const getters = {
  mongoStatus: state => state.mongo,
  mysqlStatus: state => state.mysql,
  mssqlStatus: state => state.mssql
}

export const mutations = {
  setMongoStatus (state, { statusMsg, isActive, hasError, isLoading }) {
    state.mongo.statusMsg = statusMsg
    state.mongo.isActive = isActive
    state.mongo.hasError = hasError
    state.mongo.isLoading = isLoading
  },
  setMySQLStatus (state, { statusMsg, isActive, hasError, isLoading }) {
    state.mysql.statusMsg = statusMsg
    state.mysql.isActive = isActive
    state.mysql.hasError = hasError
    state.mysql.isLoading = isLoading
  },
  setMSSQLStatus (state, { statusMsg, isActive, hasError, isLoading }) {
    state.mssql.statusMsg = statusMsg
    state.mssql.isActive = isActive
    state.mssql.hasError = hasError
    state.mssql.isLoading = isLoading
  }
}

export const actions = {
  async connectToMongo ({ commit }) {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }

    let statusMsg
    let isActive
    let hasError
    let isLoading

    try {
      const response = await axios.get('http://localhost:5000/api/checkconnection/mongo', config)
      if (response.data.status) {
        statusMsg = 'Online'
        isActive = true
        hasError = false
        isLoading = false
      } else {
        statusMsg = 'Offline'
        isActive = false
        hasError = true
        isLoading = false
      }
      commit('setMongoStatus', { statusMsg, isActive, hasError, isLoading })
    } catch (err) {
      // test
    }
  },
  async connectToMySQL ({ commit }) {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }

    let statusMsg
    let isActive
    let hasError
    let isLoading

    try {
      const response = await axios.get('http://localhost:5000/api/checkconnection/mysql', config)
      if (response.data.status) {
        statusMsg = 'Online'
        isActive = true
        hasError = false
        isLoading = false
      } else {
        statusMsg = 'Offline'
        isActive = false
        hasError = true
        isLoading = false
      }
      commit('setMySQLStatus', { statusMsg, isActive, hasError, isLoading })
    } catch (err) {
      // test
    }
  },
  async connectToMSSQL ({ commit }) {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }

    let statusMsg
    let isActive
    let hasError
    let isLoading

    try {
      const response = await axios.get('http://localhost:5000/api/checkconnection/mssql', config)
      if (response.data.status) {
        statusMsg = 'Online'
        isActive = true
        hasError = false
        isLoading = false
      } else {
        statusMsg = 'Offline'
        isActive = false
        hasError = true
        isLoading = false
      }
      commit('setMSSQLStatus', { statusMsg, isActive, hasError, isLoading })
    } catch (err) {
      // test
    }
  }
}
