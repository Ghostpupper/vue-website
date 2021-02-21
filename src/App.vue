<template>
  <v-app>
    <Sidebar />
    <v-system-bar app>
      <header class="header">
        <v-divider></v-divider>
      </header>
    </v-system-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <div class="bg">

      <!-- Provides the application the proper gutter -->
      <v-container >
        
        <router-view></router-view>
        
      </v-container>
      </div>
    </v-main>

    <v-footer app>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      </v-footer> 
  </v-app>
  
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'App',
  components: {
    Sidebar
  }
  
}
</script>

<style>
  .bg {
    /* The image used */
    background-image: url('./assets/stained-bg.jpg');

    /* Half height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: repeat-y;
    background-size: cover;
  }
</style>