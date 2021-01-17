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
      <v-img src='./assets/stained-bg.jpg'>
      <v-container fluid>
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

export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>

</style>