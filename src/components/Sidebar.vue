<template>
<v-navigation-drawer app permanent expand-on-hover>
    <v-list nav>
        <v-list-item 
        :to="'/'">
        <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav shaped>
        <v-list-item 
        v-for="(link, i) in routesLinks"
        :key="i"
        :to="link.path">
        <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>

    </v-list>
        <v-divider></v-divider>
        <v-list
        nav dense>
        <v-list-item 
        v-for="(link, i) in socialmediaLinks"
        :key="i"
        :href="link.href">
        <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>

        </v-list>
    
</v-navigation-drawer>
</template>

<script>
export default {
    name: 'Sidebar',
    data: () => ({
      socialmediaLinks: [
        {
          icon: 'mdi-github',  
          text: 'GitHub',
          href: 'https://github.com/Ghostpupper',
        },
        {
          text: 'Spotify',
          href: 'https://open.spotify.com/user/magmaberg?si=Wl7LN-TDRAGf7bB9ZpsNBA',
          icon: 'mdi-spotify'
        },
        {
          text: 'Linkedin',
          href: 'https://www.linkedin.com/in/mattias-gustafsson-6b6b45b1/',
          icon: 'mdi-linkedin'
        },
        {
          text: 'DeviantArt',
          href: 'https://www.deviantart.com/madghostdog',
          icon: 'mdi-deviantart'
        }
      ],
      routesLinks: [
        {
          icon: 'mdi-unicorn',  
          text: 'My Resume',
          path: '/resume',
        },
        {
          text: 'My Interests',
          path: '/interests',
          icon: 'mdi-triforce'
        }
      ]
    }),
}
</script>