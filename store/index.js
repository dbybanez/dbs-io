export const state = () => ({
  counter: null
})

export const getters = {
  totalCounter: state => state.counter
}

export const mutations = {
  increment (state, add) {
    state.counter += add
  },
  decrement (state, minus) {
    state.counter -= minus
  },
  initialization: (state, total) => (state.counter = total)
}

export const actions = {
  fetchTotalCounter ({ commit }) {
    const total = 0
    commit('initialization', total)
  },
  incrementByTwo ({ commit }, val) {
    const total = val
    commit('increment', total)
  },
  incrementByOne ({ commit }, val) {
    const total = val
    commit('increment', total)
  },
  decrementByTwo ({ commit }, val) {
    const total = val
    commit('decrement', total)
  },
  decrementByOne ({ commit }, val) {
    const total = val
    commit('decrement', total)
  }
}
