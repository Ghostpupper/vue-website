<template>
  <v-container >
    <v-row class="text-center" align="center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/burgundymario.png')"
          class="my-3"
          contain
          height="400"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          My art page
        </h1>

        <p class="subheading font-weight-regular">
          An idea for an art page I can send to show of stuff I made
          <br>My email is: <i>9207gusmat@gmail.com</i>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          My Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Landing',

    data: () => ({
      importantLinks: [
        {
          text: 'GitHub',
          href: 'https://github.com/Ghostpupper',
        },
        {
          text: 'Instagram',
          href: 'https://www.instagram.com/mattisborgen1992/',
        }
      ]
    }),
  }
</script>

<style scoped>

</style>