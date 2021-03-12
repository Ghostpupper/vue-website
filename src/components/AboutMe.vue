<template>
  <section
    id="about"
    class="hide-overflow"
  >
    <v-layout white>
      <v-flex
        xs12
        md6
        pa-5
      >
        <base-bubble-1
          style="transform: translate(5%, -5%)"
        />
        <base-heading class="info--text">
          About Me
        </base-heading>

        <base-text class="mb-5" style="color: blue">
          My goal is to become a versatile full-stack developer being capabable of working in almost any developer role. What is most important to me in my job is my team and that I can grow within my position.
        </base-text>

        <base-subheading class="info--text">
          Skills
        </base-subheading>
        <base-text class="mb-5" style= "color: blue">
          My current strengths lie within object oriented programming and software testing.<br>
          Python is my language of choice and I am a firm believer in Clean Code and rigorous Code reviews together with complete unit test coverage.
        </base-text>

        <v-alert
          outlined
          color="info"
        >
          <v-layout
            v-for="(skill, i) in skills"
            :key="i"
            style="color: #69A1BB"
            wrap
          >
            <v-flex
              xs6
              text-uppercase
              v-text="skill.name"
            />
            <v-flex
              xs6
              text-xs-right
              v-text="`${skill.value}%`"
            />
            <v-progress-linear
              :value="skill.value"
              color="info"
              height="8"
            />
          </v-layout>
        </v-alert>
      </v-flex>
      <v-flex
        hidden-sm-and-down
        md6
      >
        <v-img
          :src="require('@/assets/eriksbergkranen.jpg')"
          height="100%"
        />
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  data: () => ({
    skills: [
      {
        name: 'Python',
        value: 85
      },
      {
        name: 'Software Testing',
        value: 75
      },
      {
        name: 'Agile Development',
        value: 70
      },
      {
        name: 'CI / CD',
        value: 65
      },
      {
        name: 'Web Development',
        value: 10
      }
    ]
  })
}
</script>
