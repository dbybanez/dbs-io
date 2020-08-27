<template>
  <div class="row justify-content-center" v-if="show">
    <div class="col-8">
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
export default {
  name: 'DefaultRunTest',
  data () {
    return {
      show: true
    }
  },
  methods: {
    runTest () {
      this.$emit('run-test', this.show)
      this.show = !this.show
    }
  }
}
</script>

<style>
</style>
