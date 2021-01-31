<template>
<v-navigation-drawer app expand-on-hover permanent>
    <v-list
        nav shaped>
        <v-list-item 
        v-for="(link, i) in routesLinks"
        :key="i"
        :to="link.path">
        <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

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
          text: 'Instagram',
          href: 'https://www.instagram.com/mattisborgen1992/',
          icon: 'mdi-instagram'
        },
        {
          text: 'Linkedin',
          href: 'https://www.linkedin.com/in/mattias-gustafsson-6b6b45b1/',
          icon: 'mdi-linkedin'
        },
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
        },
        {
          text: 'My References',
          path: '/references',
          icon: 'mdi-ufo'
        },
        {
          text: 'My Art',
          path: '/art',
          icon: 'mdi-guitar-electric'
        }
      ]
    }),
}
</script>