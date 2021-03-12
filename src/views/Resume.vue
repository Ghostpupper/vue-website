
<template>
  <div>
    <intro />
    <about-me />
    <recent-work />
  </div>
</template>

<script>
export default {
  components: {
    AboutMe: () => import('@/components/AboutMe'),
    Intro: () => import('@/components/Intro'),
    RecentWork: () => import('@/components/RecentWork'),
  }
}
</script>