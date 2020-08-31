<template>
  <div class="row justify-content-center mt-5" v-if="!loadTestStatus.idle">
    <div class="col-9">
      <div class="progress">
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          :style="progressStatus.style"
          aria-valuenow="30"
          aria-valuemin="0"
        aria-valuemax="100"></div>
      </div>
      <p class="my-3 text-center font-italic">{{ progressStatus.msg }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ConnectionProgress',
  data () {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters({
      loadTestStatus: 'run-load-test/loadTestStatus',
      progressStatus: 'run-load-test/progressStatus'
    })
  }
}
</script>

<style scoped>
  .progress {
    height: 0.5rem;
  }
</style>
