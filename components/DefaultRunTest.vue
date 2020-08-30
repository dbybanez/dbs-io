<template>
  <div class="row justify-content-center" v-if="showComponent">
    <div class="col-8 text-center">
      <button @click="incrementOne(1)" class="btn btn-primary btn-sm mt-3">Increment 1</button>
      <button @dblclick="incrementTwo(2)" class="btn btn-primary btn-sm mt-3">Increment 2</button>
      <p class="my-3 text-center">To run a quick test, click Run test.</p>
      <div class="row">
        <div class="col">
          <button class="btn btn-danger btn-block py-3" v-on:click="runTest">Run test</button>
        </div>
        <div class="col">
          <button class="btn btn-light btn-block py-3">Configure settings</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DefaultRunTest',
  data () {
    return {
      showComponent: true
    }
  },
  props: {
    resetLoadTest: {
      type: Boolean
    }
  },
  methods: {
    ...mapActions(['incrementByTwo', 'incrementByOne']),
    runTest () {
      this.showComponent = false
      this.$emit('runTestClicked', true)
    },
    incrementOne (val) {
      this.incrementByOne(val)
    },
    incrementTwo (val) {
      this.incrementByTwo(val)
    }
  }
  // watch: {
  //   resetLoadTest () {
  //     this.showComponent = true
  //     console.log('run test reset')
  //   }
  // }
}
</script>

<style>
</style>
