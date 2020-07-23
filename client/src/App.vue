<template>
  <div id="app">
    <b-container fluid>
      <b-nav>
        <b-nav-item>
          <router-link to='/spells'>Spells</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to='/monsters'>Monsters</router-link>
        </b-nav-item>
      </b-nav>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
