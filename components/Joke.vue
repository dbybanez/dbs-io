<template>
  <nuxt-link :to="'jokes/' + id">
    <div class="card mb-3">
      <div class="card-body">
        <p class="mb-0">{{ joke }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Joke',
  props: ['joke', 'id']
}
</script>

<style>
  .joke {
    padding: 1rem;
    border: 1px dotted #ccc;
    margin: 1rem 0;
  }
</style>
