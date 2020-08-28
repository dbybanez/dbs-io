<template>
  <div class="row justify-content-center mt-5" v-if="showComponent">
    <div class="col-9">
      <div class="progress">
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          :style="displayStyle"
          aria-valuenow="30"
          aria-valuemin="0"
        aria-valuemax="100"></div>
      </div>
      <p class="my-3 text-center font-italic">{{ progressString }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConnectionProgress',
  data () {
    return {
      showComponent: false,
      progress: 0,
      progressBarStyle: 'width: ',
      progressStrings: {
        initial: 'Checking environment configuration...',
        connecting: 'Establishing database connections...',
        connected: 'Databases connected!',
        running: 'Running database load tests...',
        completed: 'Database load test completed!'
      },
      progressString: 'Checking environment configuration...'
    }
  },
  props: {
    runTestConnection: {
      type: Boolean
    }
  },
  // watch: {
  //   runTestConnection (val) {
  //     this.showComponent = true
  //     this.processConnection()
  //   }
  // },
  created () {
    this.$on(this.runTestConnection, (data) => {
      console.log('im hereee')
    })
  },
  methods: {
    runTest () {
      this.processConnection()
    },
    async processConnection () {
      console.log('processing...')
      await setTimeout(() => {
        this.progress = 20
        this.progressString = this.progressStrings.connecting
      }, 1000)
      await setTimeout(() => {
        this.progress = 40
        this.progressString = this.progressStrings.connected
      }, 1500)
      await setTimeout(() => {
        this.progress = 80
        this.progressString = this.progressStrings.running
      }, 2500)
      await setTimeout(() => {
        this.progress = 100
        this.progressString = this.progressStrings.completed
      }, 3500)
      // RESET progress and progress string
      await setTimeout(() => {
        this.showComponent = false
        this.progress = 0
        this.progressString = this.progressStrings.initial
        this.testCompleted()
      }, 4000)
    },
    testCompleted () {
      this.$emit('testCompleted', true)
    }
  },
  computed: {
    displayStyle () {
      return this.progressBarStyle + this.progress + '%'
    }
  }
}
</script>

<style scoped>
  .progress {
    height: 0.5rem;
  }
</style>
