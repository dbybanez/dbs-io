<template>
  <div class="action-bar mb-3">
    <form class="form-inline" @submit.prevent="onSubmit">
      <input class="form-control mr-3" type="text" v-model="text" placeholder="Search Jokes...">
      <input class="btn btn-primary" type="submit" value="Search">
    </form>
    <button @click="clearSearch" class="btn btn-secondary clear">Clear</button>
  </div>
</template>

<script>
export default {
  name: 'SearchJokes',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    onSubmit () {
      this.$emit('search-text', this.text)
      this.text = ''
    },
    clearSearch () {
      this.$emit('search-text', '')
    }
  }
}
</script>

<style>
  .action-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
