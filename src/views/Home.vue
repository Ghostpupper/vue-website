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
          My first own website (actually on the internet)
        </h1>
        <v-container id="text-box">

        <p class="font-weight-regular">
          My name is Mattias Gustafsson and I am a swedish Software Developer living in Gothenburg.
          When I was little I wanted to make my own website but I thought it was impossible. <br> Turns out its not really that hard.
          <br>My email is: <i>9207gusmat@gmail.com</i>
        </p>
        </v-container>
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
#text-box {
  box-sizing: content-box;
  width: 100%;
  padding: 5px;
}

</style>