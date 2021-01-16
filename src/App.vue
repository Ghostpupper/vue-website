<template>
  <div id="App">
    <header class="header">
      <h1>Welcome</h1>
    </header>
    <router-view/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
    .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }
  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>