
<template>
  <div>
    <intro />
    <about-me />
    <recent-work />
    <welcome />
    <about-me />
  </div>
</template>

<script>
export default {
  components: {
    AboutMe: () => import('@/components/AboutMe'),
    Intro: () => import('@/components/Intro'),
    RecentWork: () => import('@/components/RecentWork')
    Welcome: () => import('@/components/Welcome')
  }
}
</script>