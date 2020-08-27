<template>
  <div class="row justify-content-center mt-5" v-if="show">
    <div class="col-9">
      <div class="progress">
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          style="width: 30%"
          aria-valuenow="30"
          aria-valuemin="0"
        aria-valuemax="100"></div>
      </div>
      <p class="my-3 text-center font-italic">Establishing database connections...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConnectionProgress',
  data () {
    return {
      show: true
    }
  },
  props: ['runTest'],
  mounted: () => {
    // this.$on('run-test', (value) => {
    //   this.show = value
    // })
    console.log(this)
  }
}
</script>

<style scoped>
  .progress {
    height: 0.5rem;
  }
</style>
