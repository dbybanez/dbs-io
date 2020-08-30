<template>
  <div class="row">
    <div class="col text-center">
      <p class="mb-3 text-center">Environment: <span class="badge badge-pill badge-warning ml-2">Local</span></p>
      <button @click="decrementByOne(1)" class="btn btn-danger btn-sm">Decrement 1</button>
      <button @dblclick="decrementTwo(2)" class="btn btn-danger btn-sm">Decrement 2</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'EnvironmentChecker',
  methods: {
    ...mapActions(['decrementByTwo', 'decrementByOne']),
    decrementOne (val) {
      this.decrementByOne(val)
    },
    decrementTwo (val) {
      this.decrementByTwo(val)
    }
  }
}
</script>

<style>
</style>
