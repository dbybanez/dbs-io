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
              <li><nuxt-link to="/">Test</nuxt-link></li>
              <li><nuxt-link to="/about">About</nuxt-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
