<template>
  <div class="app">
    <Header />
    <!-- <AppHeader /> -->
    <div class="site-content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
// import AppHeader from '../components/AddHeader'

export default {
  components: {
    // AppHeader,
    Header,
    Footer
  }
}
</script>

<style>
</style>
