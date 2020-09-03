<template>
  <div class="site-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-auto align-self-center">
          <h5 class="logo mb-0"><nuxt-link to="/">DBS.IO</nuxt-link></h5>
        </div>
        <div class="col">
          <div class="main-navigation float-right">
            <ul>
              <li :class="{active: this.$route.name === 'index'}"><nuxt-link to="/">Test</nuxt-link></li>
              <li :class="{active: this.$route.name === 'about'}"><nuxt-link to="/about">About</nuxt-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    updateLinks () {
      console.log(this.$route.name)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../assets/scss/stylesheets/variables";
  .active {
    a {
      color: $red-ryb;
    }
    &::after {
      content: "";
      display: block;
      background-color: $red-ryb;
      height: 2px;
      margin-top:-2px;
    }
  }
</style>
