<template>
  <section
    id="work-experience"
  >
    <v-layout>
        <v-flex
        hidden-sm-and-down
        md6
        >
        <v-img
            :src="require('@/assets/recentwork.jpg')"
            height="100%"
            />
        </v-flex>
        <v-layout
        align-center
        justify-center
        >
        <v-flex
        xs10
        >
        <base-heading
        >
        Work Experience
        </base-heading>

        <v-expansion-panels>
            <v-expansion-panel
                v-for="(entry,i) in workentries"
                :key="i"
            >
            <v-expansion-panel-header>
                <v-col>
                    <base-subheading>
                    {{ entry.name }}
                    </base-subheading>
                    <div class="hidden-sm-and-down">
                        <base-text>
                            {{ entry.company }}
                        </base-text>
                    </div>
                    </v-col>
                <v-col lg="2" class="hidden-sm-and-down">
                    
                    {{ entry.dates }}
                    
                    </v-col>
                
                
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <base-text>
                {{ entry.text }}
                </base-text>
                <base-text>
                {{ entry.skills }}
                </base-text>
            </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        </v-flex>
     </v-layout>
      
    </v-layout>
  </section>
</template>

<script>
export default {
  data: () => ({
    workentries: [
        {
          name: 'Software Integration Engineer / Scrum Master',  
          text: 'Developing and maintaining the build environment for the embedded linux system running in the connectivity control unit. Working both as a software developer and the Scrum Master of the team.',
          skills: 'Skills: Jenkins, Python, Docker, Docker Swarm, Git, Linux, Kafka, Yocto, yaml,JSON, REST APIs',
          dates: '04/2020 - today',
          company: 'Volvo Group Trucks Technology'
        },
        {
          name: 'Test Automation Software Developer',  
          text: 'Being part of the front end team developing proof of concept applications forweb, mobile and desktop.  The projects aim is to modernize the aftermarket software provided for technicians and mechanics by Volvo by using a platform of micro-services and a front-end framework built with web technologies.',
          skills: 'Skills: Robot Framework (Python), Selenium, HTML, CSS, iOS, Android, Elec-tron, Canoe, Git, Jenkins, REST APIs',
          dates: '08/2018 - 03/2020',
          company: 'Volvo Group Trucks Technology'
        },
        {
          name: 'Validation and Verification Engineer',  
          text: 'Test Engineer for Volvo Aftermarket Diagnostic solutions. Mainly manual vehicle testing using rigs but also some automation test development.',
          skills: 'Skills: Software Testing, Diagnostics, UFT, Visual Basic, Canoe, E2E testing',
          dates: '07/2017 - 07/2018',
          company: 'Volvo Group Trucks Technology - Consultant'
        },
        {
          name: 'Software Engineering Consultant',  
          text: '2nd line Technical support engineer for volvo group managing authenticationsystems, testing and fault tracing diagnostic solution tools for Volvo Group After-market.',
          skills: 'Skills: Volvo central systems, diagnostic fault tracing, software management,end user relations',
          dates: '08/2016 - 07/2017',
          company: 'Volvo Group Trucks Technology - Consultant'
        },
        {
          name: 'Mechatronics Bachelor Thesis',  
          text: 'Built an autonomously controlled labyrinth-game witha gyroscope and a vision optical sensor for input.',
          skills: 'Skills: Python, control algorithms, PWM-modulation,technical  documentation,  electrical  construction,project management, Linux, LaTeX',
          dates: '03/2016 - 06/2016',
          company: 'Broccoli Engineering'
        },
        
    ]
  })
}
</script>