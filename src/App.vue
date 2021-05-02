<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <img src="./assets/logo.svg" v-on:click="main" class="navbar-item logo">

        <a role="button" class="navbar-burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="nav-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/bored">Bored</router-link>
          <router-link class="navbar-item" to="/jokes">Jokes</router-link>
        </div>
      </div>
    </nav>
    <ErrorContainer />
    <router-view />
  </div>
</template>

<script>
import $ from 'jquery'
import {useRouter } from 'vue-router'
import ErrorContainer from './components/ErrorContainer.vue'
export default {
  components: { ErrorContainer },
  setup() {
    const router = useRouter()
      // Function to make menu work
      $(document).ready(function() {
        $('.navbar-burger').click(function() {
          $('.navbar-burger').toggleClass('is-active')
          $('.navbar-menu').toggleClass('is-active')
        })
      })
      const main = () => router.push({name: 'Home'})
      return { main }
  }
}
</script>

<style>
@import "~bulma/css/bulma.css";

* {
  margin: 0;
  padding: 0;
}

.navbar a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}

.logo {
  height: 80px;
  cursor: pointer;
}
</style>
