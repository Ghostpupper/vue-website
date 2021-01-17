<template>
  <v-app>
    <!--<v-navigation-drawer app>-->
      
    <!--</v-navigation-drawer>-->

    <v-system-bar app
    fixed window>
      <header class="header">
        <h1>Welcome</h1>
      </header>
    </v-system-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-img src='./assets/stained-bg.jpg'
        lazy-src='./assets/stained-bg.jpg'
        contain>
        <router-view></router-view>
        </v-img>
      </v-container>
      
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

export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>

</style>