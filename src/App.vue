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

      <!-- Provides the application the proper gutter -->
      <v-img src='./assets/stained-bg.jpg'
        lazy-src='./assets/stained-bg.jpg'
        min-width="600px"
        max-height="100%">
      <v-container>
        
        <router-view></router-view>
        
      </v-container>
      </v-img>
      
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

<style lang="scss">

</style>